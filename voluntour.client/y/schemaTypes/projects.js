import {CalendarIcon, ProjectsIcon, EarthGlobeIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location'
    }),
    defineField({
      name: 'startDate',
      type: 'date',
      title: 'Start Date',
      options: {
        dateFormat: 'DD-MMM-YY'
      }
    }),
    defineField({
      name: 'endDate',
      type: 'date',
      title: 'End Date',
      options: {
        dateFormat: 'DD-MMM-YY'
      }
    }),
    defineField({
      name:  'aboutImage',
      type:  'image',
      title:  'About Image',
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: ['location', 'startDate']},
      // Marks the field as requried and gives an error message
      validation: (rule) => rule.required().error('Required to generate a page.'),
    }),
  ],
  preview: {
    select: {
      location: 'location',
      startDate: 'startDate',
    },
    prepare({location, startDate}) {


      return {
        title: location,
        subtitle: startDate,
      }
    },
  },
}