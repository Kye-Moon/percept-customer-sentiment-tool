import {Auth0Client} from "@auth0/auth0-spa-js";
import {createAuth} from "@redwoodjs/auth-auth0-web";

const auth0 = new Auth0Client({
  client_id: process.env.AUTH0_CLIENT_ID,
  domain: process.env.AUTH0_DOMAIN,
  redirect_uri: process.env.AUTH0_REDIRECT_URI,
  audience: process.env.AUTH0_AUDIENCE
})

export const { AuthProvider, useAuth } = createAuth(auth0)
