import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'qualifications',
      title: 'Educational Qualifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'qualification', type: 'string', title: 'Qualification'},
            {name: 'university', type: 'string', title: 'University/Board'},
            {name: 'percentage', type: 'string', title: 'Percentage/Grade'},
            {name: 'year', type: 'string', title: 'Year of Completion'},
          ],
        },
      ],
    }),
  ],
})
