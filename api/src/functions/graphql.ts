import { authDecoder } from '@redwoodjs/auth-auth0-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'
import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import generateGraphiQLHeader from 'src/lib/generateGraphiQLHeader'

import { getCurrentUser } from 'src/lib/utils/auth'

import { db } from 'src/lib/utils/db'
import { logger } from 'src/lib/utils/logger'

export const handler = createGraphQLHandler({
  getCurrentUser,
  authDecoder,
  generateGraphiQLHeader,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
