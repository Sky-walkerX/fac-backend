import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
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
      name: 'fundingAgency',
      title: 'Funding Agency',
      type: 'string',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'budget',
      title: 'Budget',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Principal Investigator (PI)', value: 'PI'},
          {title: 'Co-Principal Investigator (Co-PI)', value: 'Co-PI'},
          {title: 'Coordinator', value: 'Coordinator'},
          {title: 'Team Member', value: 'Team Member'},
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
          {title: 'Proposed', value: 'proposed'},
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
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
  ],
})
