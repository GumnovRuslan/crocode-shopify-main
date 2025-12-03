import { ServiceCategoryPage } from "@/components/pages"
import { fetchGROQ } from "@/lib/sanity/groq"
import { getServiceCategoryBySlug } from "@/lib/sanity/queries/services"
import { TServiceCategoryWithServices } from "@/types"
import { getLocale } from "next-intl/server"
import { notFound } from "next/navigation"

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params
  const locale: string = await getLocale()

  // Fetch service category with its services from Sanity
  const { data } = await fetchGROQ(getServiceCategoryBySlug(slug, locale))
  const category: TServiceCategoryWithServices | null = data?.serviceCategory || null

  // If category not found, show 404
  if (!category) {
    notFound()
  }

  return <ServiceCategoryPage category={category} />
}
