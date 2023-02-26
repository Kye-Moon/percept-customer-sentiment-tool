import type { ComponentMeta } from '@storybook/react'

import FavouritesPage from './FavouritesPage'

export const generated = () => {
  return <FavouritesPage />
}

export default {
  title: 'Pages/FavouritesPage',
  component: FavouritesPage,
} as ComponentMeta<typeof FavouritesPage>
