import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alternateEmail',
      title: 'Alternate Email',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'office',
      title: 'Office Address',
      type: 'text',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn Profile',
      type: 'url',
    }),
    defineField({
      name: 'googleScholar',
      title: 'Google Scholar Profile',
      type: 'url',
    }),
    defineField({
      name: 'orcid',
      title: 'ORCID',
      type: 'string',
    }),
    defineField({
      name: 'researchGate',
      title: 'ResearchGate Profile',
      type: 'url',
    }),
  ],
})
