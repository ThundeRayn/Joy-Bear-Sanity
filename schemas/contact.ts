import {defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  fields: [
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'phone', type: 'string', title: 'Phone'},
    {name: 'address', type: 'string', title: 'Address'},
  ]
})
