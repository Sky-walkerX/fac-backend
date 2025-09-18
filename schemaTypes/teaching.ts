import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teaching',
  title: 'Teaching',
  type: 'document',
  fields: [
    defineField({
      name: 'courseCode',
      title: 'Course Code',
      type: 'string',
    }),
    defineField({
      name: 'courseName',
      title: 'Course Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'semester',
      title: 'Semester',
      type: 'string',
      options: {
        list: [
          {title: 'Spring', value: 'spring'},
          {title: 'Fall', value: 'fall'},
          {title: 'Summer', value: 'summer'},
          {title: 'Winter', value: 'winter'},
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'description',
      title: 'Course Description',
      type: 'text',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Undergraduate', value: 'undergraduate'},
          {title: 'Graduate', value: 'graduate'},
          {title: 'Postgraduate', value: 'postgraduate'},
        ],
      },
    }),
  ],
})
