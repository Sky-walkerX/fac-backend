import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Journal', value: 'journal'},
          {title: 'Conference', value: 'conference'},
          {title: 'Research Area', value: 'research_area'},
        ],
      },
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'string',
    }),
    defineField({
      name: 'venue',
      title: 'Publication Venue',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'doi',
      title: 'DOI',
      type: 'string',
    }),
  ],
})
