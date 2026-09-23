import {ImageIcon, LinkIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogBody',
  title: 'Article body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          defineArrayMember({
            name: 'link',
            title: 'Link',
            type: 'object',
            icon: LinkIcon,
            fields: [
              defineField({
                name: 'href',
                title: 'URL',
                type: 'url',
                validation: (Rule) => Rule.required().uri({
                  allowRelative: true,
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
              }),
            ],
          }),
          defineArrayMember({
            name: 'textColor',
            title: 'Text color',
            type: 'object',
            fields: [
              defineField({
                name: 'hex',
                title: 'Hex color',
                type: 'string',
                description: 'A six-digit color, for example #1155CC.',
                validation: (Rule) => Rule.required().regex(/^#[0-9a-fA-F]{6}$/, {
                  name: 'six-digit hex color',
                }),
              }),
            ],
          }),
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      title: 'Article image',
      icon: ImageIcon,
      description: 'Displayed in full, between the surrounding text blocks.',
      options: {hotspot: false},
      validation: (Rule) => Rule.required().assetRequired(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Describe the image for readers who cannot see it.',
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: {title: 'alt', media: 'asset'},
      },
    }),
  ],
})
