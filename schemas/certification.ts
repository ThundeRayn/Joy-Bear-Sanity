import {defineType} from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'file', type: 'file', title: 'File'},
    {name: 'issuedBy', type: 'string', title: 'Issued By'},
  ]
})
