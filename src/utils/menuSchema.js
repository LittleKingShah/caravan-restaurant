import { menuItems, categories } from '../data/menuData'

const SITE_URL = 'https://caravanuyghur.com'

export function generateMenuSchema(t) {
  const menuSections = categories
    .filter((cat) => cat !== 'All')
    .map((cat) => ({
      '@type': 'MenuSection',
      name: t ? t(`categories.${cat}`, { defaultValue: cat }) : cat,
      hasMenuItem: menuItems
        .filter((item) => item.category === cat)
        .map((item) => ({
          '@type': 'MenuItem',
          name: item.name,
          description: t ? t(`dishes.${item.id}.description`, { defaultValue: item.description }) : item.description,
          image: `${SITE_URL}${item.image}`,
          offers: {
            '@type': 'Offer',
            price: item.price.toFixed(2),
            priceCurrency: 'USD',
          },
        })),
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: 'Caravan Uyghur Cuisine Menu',
    url: `${SITE_URL}/menu`,
    hasMenuSection: menuSections,
  }
}

export const menuSchema = generateMenuSchema()
