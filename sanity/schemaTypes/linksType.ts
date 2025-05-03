import { defineArrayMember } from 'sanity'
import {defineField, defineType} from 'sanity'

export const linksType = defineType({
  name: 'links',
  title: 'Links',
  type: 'object',
  fields: [
    defineField({
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              type: 'image',
            }),
            defineField({
              name: 'image',
              type: 'image',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
  ],
})
