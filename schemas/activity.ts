import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Activity Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'isFeatured',
        title: 'Show on Frontend',
        type: 'boolean',
        description: 'Only one activity can be featured at a time.',
        initialValue: false,
        validation: (Rule) =>
            Rule.custom(async (value, context) => {
            // Skip if not featured
            if (!value) return true

            // Type-safe check for context.document
            const docId = context?.document?._id
            if (!docId) return true

            const { getClient } = context
            const client = getClient({ apiVersion: '2025-01-01' })

            const otherFeaturedCount = await client.fetch(
                `count(*[_type == "activity" && isFeatured == true && _id != $id])`,
                { id: docId }
            )

            return otherFeaturedCount === 0
                ? true
                : 'Only one activity can be marked as featured at a time.'
            }),
    }),
    defineField({
      name: 'hint',
      title: 'Hint Text (One Sentence)',
      type: 'string',
      description: 'A short tagline that will appear on top of home page',
      validation: (Rule) => Rule.max(50).warning('Keep it short — like [explore our winter market now -->]'),
    }),
    defineField({
      name: 'description',
      title: 'Activity Description',
      type: 'text',
      description: 'A detailed description or story about this activity.',
      rows: 4,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Main image shown on the activity card or banner.',
    }),
    defineField({
      name: 'contentImages',
      title: 'Content Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Add one or more images related to this activity.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
