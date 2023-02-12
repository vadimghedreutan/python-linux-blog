import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
// import { codeInput } from '@sanity/code-input'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID! 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!


export default defineConfig({
  basePath: "/studio",
  name: 'Blog_Youtube',
  title: 'Blog Youtube Video',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()], 

  schema: {
    types: schemaTypes,
  },
})
