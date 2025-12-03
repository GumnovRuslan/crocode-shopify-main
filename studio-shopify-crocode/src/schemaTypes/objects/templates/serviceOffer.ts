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
      name: 'text',
      type: 'text',
      title: 'Offer Text',
      description: 'Use __ to mark underlined text (e.g., "__underlined text__"). Use \\n\\n to separate paragraphs.',
      validation: (Rule) => Rule.required()
    })
  ]
});
