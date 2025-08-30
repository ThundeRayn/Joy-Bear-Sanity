import {defineType} from 'sanity'

export default defineType({
  name: 'product',    // internal name (used in queries: _type == "product")
  title: 'Product',   // label shown in Sanity Studio
  type: 'document',   // makes it a top-level document type
  fields: [
    {name: 'title', type: 'string', title: 'Title'}, // product name
    {name: 'price', type: 'number', title: 'Price'}, // numeric price
    {name: 'description', type: 'text', title: 'Description'}, // description text
    {
      name: 'images',
      type: 'array',
      of: [{type: 'image'}], // multiple images allowed
      title: 'Images'
    },
    {
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],//multiple categories allowed
      title: 'Category',
    },
  ]
})
