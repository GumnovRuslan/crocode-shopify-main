import {MasterDetailIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: MasterDetailIcon,
  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
      media: 'coverImage.image'
    },
  },
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      description: 'На каком языке отображать проект',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Polish', value: 'pl' },
        ]
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      description: 'Название проекта',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Work Done',
      name: 'workDone',
      type: 'string',
      description: 'Краткое описание проделанной работы (Shopify Custom Theme Design & Development)',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Название ссылки проекта',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Card Image',
      name: 'cardImage',
      type: 'imageWithAlt',
      description: 'Изображение для карточки',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      title: 'Hero image',
      name: 'coverImage',
      type: 'imageWithAlt',
      description: 'Изображение для главной страницы'
    }),
    defineField({
      title: 'Brief',
      name: 'brief',
      type: 'brief',
      description: 'Краткое описание проекта'
    }),
    defineField({
      title: 'Gallery',
      name: 'gallery',
      type: 'gallery',
      description: 'Изображениея для галереи'
    }),
    defineField({
      title: 'Solution',
      name: 'solution',
      type: 'solution',
      description: 'Описани выполненой работы',
    }),
    defineField({
      title: 'Status',
      name: 'status',
      type: 'string',
      hidden: true,
    }),
    // defineField({
    //   title: 'Content',
    //   name: 'content',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'block',
    //       marks: {
    //         decorators: [
    //           {title: 'Strong', value: 'strong'},
    //           {title: 'Emphasis', value: 'em'},
    //           {title: 'Code', value: 'code'},
    //         ],
    //       },
    //       styles: [
    //         {title: 'Normal', value: 'normal'},
    //         {title: 'H1', value: 'h1'},
    //         {title: 'H2', value: 'h2'},
    //         {title: 'H3', value: 'h3'},
    //         {title: 'H4', value: 'h4'},
    //         {title: 'H5', value: 'h5'},
    //         {title: 'H6', value: 'h6'},
    //         {title: 'Quote', value: 'blockquote'},
    //       ],
    //       lists: [
    //         {title: 'Bullet', value: 'bullet'},
    //         {title: 'Numbered', value: 'number'},
    //       ],
    //     },
    //     {
    //       type: 'image',
    //     },
    //   ],
    // }),
    defineField({
      name: 'seo',
      type: 'seo',
    }),
  ],
})