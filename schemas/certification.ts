import {defineType} from 'sanity'
import {AddDocumentIcon} from '@sanity/icons'

export default defineType({
  name: 'certification',
  title: 'Certification',
  type: 'document',
  icon: AddDocumentIcon,
  fields: [
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'file', type: 'file', title: 'File'},
    {name: 'issuedBy', type: 'string', title: 'Issued By'},
  ]
})
