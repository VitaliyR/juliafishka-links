import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {markdownSchema} from 'sanity-plugin-markdown'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Links Yuliia Fishka',

  projectId: 'xp6v8xyg',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), markdownSchema()],

  schema: {
    types: schemaTypes,
  },
})
