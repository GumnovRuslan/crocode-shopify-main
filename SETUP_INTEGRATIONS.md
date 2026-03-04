SETUP INSTRUCTIONS — MailerLite & Zoho CRM

These integrations require manual configuration on external services. Follow the steps below.

---

1. MAILERLITE

What it does:
When a user submits the contact form with the marketing checkbox checked ("I want to receive occasional updates and marketing emails."), their email, first name, and last name are added as a subscriber in MailerLite.

Steps:

a) Log in to your MailerLite account at https://app.mailerlite.com

b) Get your API Key:
   - Go to Integrations → Developer API → API tokens
   - Copy the existing token or generate a new one

c) (Optional but recommended) Create a Group/segment for website subscribers:
   - Go to Subscribers → Groups → Create group
   - Name it e.g. "Website Subscribers" and copy the Group ID from the URL or API

d) Add credentials to crocode-shopify/.env:
   MAILERLITE_API_KEY="your_api_key_here"
   MAILERLITE_GROUP_ID="your_group_id_here"   (leave empty if you don't want a group)

---

2. ZOHO CRM

What it does:
When a user submits the contact form, the system checks if a Lead with the same email already exists in Zoho CRM. If not, it creates a new Lead with the contact's details (name, company, email, phone, budget, project description).

Steps:

a) Log in to your Zoho CRM account at https://crm.zoho.eu (or .com depending on your region)

b) Register a Self Client OAuth app:
   - Go to https://api-console.zoho.eu (or https://api-console.zoho.com)
   - Click "Add Client" → choose "Self Client"
   - Note the Client ID and Client Secret

c) Generate a Refresh Token:
   - In the Self Client, go to "Generate Code"
   - Scope required: ZohoCRM.modules.leads.ALL (or ZohoCRM.modules.ALL)
   - Set duration: e.g. "10 minutes" or "Self" (permanent)
   - Click Create → copy the code
   - Exchange for tokens by calling:
     POST https://accounts.zoho.eu/oauth/v2/token
       ?code=YOUR_CODE
       &client_id=YOUR_CLIENT_ID
       &client_secret=YOUR_CLIENT_SECRET
       &redirect_uri=https://www.zoho.com/crm
       &grant_type=authorization_code
   - Copy the refresh_token from the response

d) Determine your API region:
   - EU accounts: ZOHO_ACCOUNTS_URL=https://accounts.zoho.eu  and  ZOHO_API_URL=https://www.zohoapis.eu/crm/v2
   - US accounts: ZOHO_ACCOUNTS_URL=https://accounts.zoho.com  and  ZOHO_API_URL=https://www.zohoapis.com/crm/v2

e) Add credentials to crocode-shopify/.env:
   ZOHO_CLIENT_ID="your_client_id"
   ZOHO_CLIENT_SECRET="your_client_secret"
   ZOHO_REFRESH_TOKEN="your_refresh_token"
   ZOHO_ACCOUNTS_URL="https://accounts.zoho.eu"
   ZOHO_API_URL="https://www.zohoapis.eu/crm/v2"

---

3. AFTER CONFIGURATION

After filling in the .env values, restart the Next.js dev server (or redeploy on Vercel).

If deploying to Vercel:
- Add all the above env variables in Project Settings → Environment Variables

---

4. VERIFYING IT WORKS

- Submit the contact form with all required fields
- Check Zoho CRM → Leads: a new Lead should appear (if no Lead with that email existed)
- If the marketing checkbox was checked, check MailerLite → Subscribers: the email should be listed
