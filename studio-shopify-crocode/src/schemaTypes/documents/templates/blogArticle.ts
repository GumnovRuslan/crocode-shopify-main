import {DocumentTextIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogArticle',
  title: 'Blog Articles',
  type: 'document',
  icon: DocumentTextIcon,
  initialValue: {language: 'en', author: 'Crocode'},
  orderings: [
    {
      title: 'Article date, newest first',
      name: 'articleDateDesc',
      by: [{field: 'articleDate', direction: 'desc'}, {field: 'slug.current', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'title', author: 'author', date: 'articleDate'},
    prepare({title, author, date}) {
      return {title, subtitle: [author, date].filter(Boolean).join(' · ')}
    },
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The page heading. Do not repeat it at the start of the article body.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The part after /blog/. Use lowercase words separated by hyphens.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) => Rule.required().custom((value) => {
        if (!value?.current) return true
        return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value.current)
          || 'Use lowercase letters, numbers and single hyphens, without slashes.'
      }),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {list: [{title: 'English', value: 'en'}]},
      validation: (Rule) => Rule.required().custom((value) =>
        !value || value === 'en' || 'Only English articles are supported.',
      ),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'articleDate',
      title: 'Article date',
      type: 'date',
      description: 'Date of first publication. Keep this date when editing a published article.',
      options: {dateFormat: 'YYYY-MM-DD'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'title',
          title: 'SEO title',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'SEO description',
          type: 'text',
          rows: 3,
          description: 'Also used as the article summary on the blog listing.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Article body',
      type: 'blogBody',
      description: 'Keep images in their reading order. The first image is also used on the blog card.',
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
