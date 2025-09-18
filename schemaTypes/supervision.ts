import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'supervision',
  title: 'Thesis Supervision',
  type: 'document',
  fields: [
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Ph.D', value: 'phd'},
          {title: 'M.Tech', value: 'mtech'},
          {title: 'M.Sc', value: 'msc'},
          {title: 'B.Tech', value: 'btech'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Project/Thesis Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
    }),
    defineField({
      name: 'endYear',
      title: 'End Year',
      type: 'number',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
          {title: 'Continuing', value: 'continuing'},
        ],
      },
    }),
    defineField({
      name: 'remarks',
      title: 'Remarks',
      type: 'text',
    }),
  ],
})
