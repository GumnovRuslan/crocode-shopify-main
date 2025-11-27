import { DocumentsIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  icon: DocumentsIcon,
  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
      media: 'heroImage.image'
    },
  },
  fields: [
    // Language field (required)
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'Language for this service',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Polish', value: 'pl' },
        ]
      },
      validation: (Rule) => Rule.required()
    }),

    // Category reference (filtered by language)
    defineField({
      name: 'category',
      title: 'Service Category',
      description: "Category this service belongs to",
      type: 'reference',
      to: [{ type: 'serviceCategories' }],
      options: {
        filter: ({ document }) => {
          if (!document?.language) {
            return { filter: '' }
          }
          return {
            filter: 'language == $lang',
            params: { lang: document.language }
          }
        }
      },
      validation: (Rule) => Rule.required()
    }),

    // Basic Info
    defineField({
      title: 'Service Title',
      name: 'title',
      type: 'string',
      description: 'Main H1 title for the service page (REQUIRED - populate initially)',
      validation: (Rule) => Rule.required()
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL slug for service (e.g., shopify-plus-development)',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),

    defineField({
      title: 'Order',
      name: 'order',
      description: 'Display order within category (lower numbers first)',
      type: 'number',
      initialValue: 0,
    }),

    // Hero Section
    defineField({
      title: 'Hero Subtitle',
      name: 'heroSubtitle',
      type: 'text',
      description: 'Subtitle text shown in hero section',
    }),

    defineField({
      title: 'Hero Background Image',
      name: 'heroImage',
      type: 'imageWithAlt',
      description: 'Background image for hero section (optional, defaults to standard)',
    }),

    // Service Description Section (~100 words - INITIALLY POPULATE)
    defineField({
      title: 'Description Title',
      name: 'descriptionTitle',
      type: 'string',
      description: 'H2 title for description section',
    }),

    defineField({
      title: 'Description Text',
      name: 'descriptionText',
      type: 'text',
      description: 'Main description text (~100 words - REQUIRED - populate initially). Use \\n\\n to separate paragraphs.',
      validation: (Rule) => Rule.required()
    }),

    // Why Shopify Section
    defineField({
      title: 'Why Shopify Title',
      name: 'whyShopifyTitle',
      type: 'string',
      description: 'Title for "Why Shopify" section',
    }),

    defineField({
      title: 'Why Shopify Text',
      name: 'whyShopifyText',
      type: 'text',
      description: 'Main text for "Why Shopify" section',
    }),

    // Offers (4 cards)
    defineField({
      title: 'Offers',
      name: 'offers',
      type: 'array',
      description: '4 offer cards shown in dark section',
      of: [{ type: 'serviceOffer' }],
      validation: (Rule) => Rule.max(4)
    }),

    // Service Details Section
    defineField({
      title: 'Details Title',
      name: 'detailsTitle',
      type: 'string',
      description: 'Title for service details section',
    }),

    defineField({
      title: 'Details Text 1',
      name: 'detailsText1',
      type: 'text',
    }),

    defineField({
      title: 'Details Text 2',
      name: 'detailsText2',
      type: 'text',
    }),

    // What's Included Section
    defineField({
      title: 'Included Title',
      name: 'includedTitle',
      type: 'string',
      description: 'Title for "What is included" section',
    }),

    defineField({
      title: 'Included Items',
      name: 'includedItems',
      type: 'array',
      description: 'List of items included in the service',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.max(6)
    }),

    // Video Section
    defineField({
      title: 'Video Title',
      name: 'videoTitle',
      type: 'string',
      description: 'Title for video section',
    }),

    defineField({
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
      description: 'YouTube or video URL',
    }),

    // SEO
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
});
