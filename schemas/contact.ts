import {defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export default defineType({
  name: 'contact',
  title: 'Contact Info',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    {name: 'email', type: 'string', title: 'Email'},
    {name: 'phone', type: 'string', title: 'Phone'},
    {name: 'address', type: 'string', title: 'Address'},
  ]
})
