import {CalendarIcon} from '@sanity/icons'


export default {
  name: 'blog',
  type: 'document',
	title: 'Blog',
  fields: [
    {
      name: 'blogTitle',
      type: 'string',
      title: 'Blog Title'
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle'
    },
    {
      name: 'details',
      type: 'array',
      // Allows for the 'rich editor' for customizing headers, adding bold, italics, etc.
      of: [{type: 'block'}],
    },
    {
		name:  'aboutImage',
		type:  'image',
		title:  'About Image',
		options: {
			hotspot:  true,
	}
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      // Marks the field as requried and gives an error message
      validation: (rule) => rule.required().error('Required to generate a page.'),
      hidden: ({document}) => !document?.blogTitle,
    },
  ]
}