import {defineType} from 'sanity'
import {FaceHappyIcon} from '@sanity/icons'

export default defineType({
  name: 'product',    // internal name (used in queries: _type == "product")
  title: 'Product',   // label shown in Sanity Studio
  type: 'document',   // makes it a top-level document type
  icon: FaceHappyIcon,
  fields: [
    {name: 'title', type: 'string', title: 'Title'}, // product name
    {name: 'id', type: 'string', title: 'ID'}, // product id
    {name: 'description', type: 'text', title: 'Description'}, // description text
    {
      name: 'images',
      type: 'array',
      of: [{type: 'image'}], // multiple images allowed
      title: 'Images'
    },
    {
      name: 'minOrderQuantity',
      title: 'Minimum Order Quantity (MOQ)',
      type: 'number',
      description: 'The smallest quantity customers can order (起订量)',
      validation: (Rule) => Rule.min(1).integer(),
    },
    {
      name: 'category',
      type: 'array',
      of: [
        { type: 'reference',
          to: [{ type: 'category' }]  // reference to category document
         }
      ],
      title: 'Category',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        { type: 'reference',
          to: [{ type: 'tags' }]  // reference to tags document
         }
      ],
      title: 'Tags',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title', maxLength: 96 }, //auto generate slug from title
      validation: (Rule) => Rule.required(),
    },
    // ✅ New features field
    {
      name: 'features',
      title: 'Product Features',
      type: 'object',
      description: 'Select product characteristics',
      fields: [
        { name: 'recyclable', title: '♻️ Recyclable Material', type: 'boolean' },
        { name: 'furry', title: '🧸 Furry / Soft Texture', type: 'boolean' },
        { name: 'handmade', title: '✋ Handmade', type: 'boolean' },
        { name: 'safeForKids', title: '👶 Safe for Kids', type: 'boolean' },
        { name: 'limitedEdition', title: '🌟 Limited Edition', type: 'boolean' },
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }
  ]
})
