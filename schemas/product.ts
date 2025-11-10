import {defineType} from 'sanity'
import {FaceHappyIcon} from '@sanity/icons'

export default defineType({
  name: 'product',    // internal name (used in queries: _type == "product")
  title: 'Product',   // label shown in Sanity Studio
  type: 'document',   // makes it a top-level document type
  icon: FaceHappyIcon,
  fields: [
    {name: 'title', type: 'string', title: 'Title'}, // product name
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
  ]
})
