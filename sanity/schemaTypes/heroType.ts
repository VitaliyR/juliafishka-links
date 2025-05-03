import {defineArrayMember, defineField, defineType} from 'sanity'
import {iconField} from './fields/iconField'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'markdown',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'link',
          title: 'Link',
          fields: [
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
            iconField,
          ],
        }),
      ],
    }),
  ],
})
