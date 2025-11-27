import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'serviceOffer',
  type: 'object',
  title: 'Service Offer',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Offer Title',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'text1',
      type: 'text',
      title: 'Text 1',
      description: 'Use __ to mark underlined text (e.g., "__underlined text__")',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'text2',
      type: 'text',
      title: 'Text 2',
      description: 'Use __ to mark underlined text (e.g., "__underlined text__")',
      validation: (Rule) => Rule.required()
    })
  ]
});
