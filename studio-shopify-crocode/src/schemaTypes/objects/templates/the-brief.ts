import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'brief',
  title: 'brief',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Detailed description of the project',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      description: 'Industry sector ',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      description: 'List of technologies used in the project',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Link to the live project'
    },
    {
      name: 'project',
      title: 'Project',
      type: 'string',
      description: 'Link to the project case study on our website'},
  ],
})