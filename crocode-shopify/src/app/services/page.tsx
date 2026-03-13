import { ServicesPage } from "@/components/pages"
import { fetchGROQ } from "@/lib/sanity/groq"
import { getServiceCategoriesWithServices } from "@/lib/sanity/queries/services"
import { TServiceCategoryWithServices } from "@/types"
import { getLocale } from "next-intl/server"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shopify Services | Crocode",
  description: "Full-service Shopify agency offering development, design, migration, integrations, and SEO to help your eCommerce store scale faster.",
}

export default async function Page() {
  const locale: string = await getLocale()

  const { data } = await fetchGROQ(getServiceCategoriesWithServices(locale))
  const serviceCategories: TServiceCategoryWithServices[] = data?.serviceCategories || []

  return <ServicesPage serviceCategories={serviceCategories} />
}