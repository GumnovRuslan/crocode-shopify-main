import { NextRequest, NextResponse } from "next/server";

async function getZohoAccessToken(): Promise<string | null> {
  const { ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_ACCOUNTS_URL } =
    process.env;

  if (!ZOHO_CLIENT_ID || !ZOHO_CLIENT_SECRET || !ZOHO_REFRESH_TOKEN) {
    return null;
  }

  const accountsUrl = ZOHO_ACCOUNTS_URL || "https://accounts.zoho.eu";

  const res = await fetch(
    `${accountsUrl}/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}&grant_type=refresh_token`,
    { method: "POST" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.access_token || null;
}

async function createZohoLead(
  accessToken: string,
  formData: {
    firstName: string;
    lastName: string;
    companyName: string;
    email: string;
    phone: string;
    budget: string;
    project: string;
  }
): Promise<void> {
  const { ZOHO_API_URL } = process.env;
  const apiUrl = ZOHO_API_URL || "https://www.zohoapis.eu/crm/v2";

  const searchRes = await fetch(
    `${apiUrl}/Leads/search?criteria=(Email:equals:${encodeURIComponent(formData.email)})`,
    {
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
      },
    }
  );

  if (searchRes.ok) {
    const searchData = await searchRes.json();
    if (searchData.data && searchData.data.length > 0) {
      return;
    }
  }

  await fetch(`${apiUrl}/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          First_Name: formData.firstName,
          Last_Name: formData.lastName,
          Company: formData.companyName,
          Email: formData.email,
          Phone: formData.phone,
          Lead_Source: "Website",
          Description: `Budget: ${formData.budget}\n\nProject: ${formData.project}`,
        },
      ],
    }),
  });
}

async function addMailerLiteSubscriber(email: string, firstName: string, lastName: string): Promise<void> {
  const { MAILERLITE_API_KEY, MAILERLITE_GROUP_ID } = process.env;

  if (!MAILERLITE_API_KEY) return;

  const body: Record<string, unknown> = {
    email,
    fields: { name: firstName, last_name: lastName },
    status: "active",
  };

  if (MAILERLITE_GROUP_ID) {
    body.groups = [MAILERLITE_GROUP_ID];
  }

  await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${MAILERLITE_API_KEY}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
}

export async function POST(req: NextRequest) {
  const formData = await req.json();
  const { firstName, lastName, companyName, email, phone, budget, project, newsletter } =
    formData;

  const errors: string[] = [];

  if (newsletter) {
    try {
      await addMailerLiteSubscriber(email, firstName, lastName);
    } catch {
      errors.push("newsletter");
    }
  }

  try {
    const accessToken = await getZohoAccessToken();
    if (accessToken) {
      await createZohoLead(accessToken, { firstName, lastName, companyName, email, phone, budget, project });
    }
  } catch {
    errors.push("crm");
  }

  return NextResponse.json({ success: true, errors });
}
