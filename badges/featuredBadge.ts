export const featuredBadge = (context: any) => {
  const isFeatured = context?.published?.isFeatured
  const hint = context?.published?.hint

  if (isFeatured) {
    return {
      label: hint ? `⭐ Featured — ${hint}` : '⭐ Featured',
      color: 'success', // green badge
    }
  }

  return null
}


