import {defineField} from 'sanity'

export const iconField = defineField({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: {
    list: [
      {title: 'Email', value: 'email'},
      {title: 'Instagram', value: 'instagram'},
      {title: 'Tiktok', value: 'tiktok'},
      {title: 'Youtube', value: 'youtube'},
      {title: 'Facebook', value: 'facebook'},
    ],
  },
})
