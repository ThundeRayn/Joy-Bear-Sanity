import {defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'price', type: 'number', title: 'Price'},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'images', type: 'array', of: [{type: 'image'}], title: 'Images'},
  ]
})
