import NextAuth from "next-auth";
import Auth0Provider from 'next-auth/providers/auth0';  

export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [
          Auth0Provider({
                clientId: process.env.AUTH0_CLIENT_ID,
                clientSecret: process.env.AUTH0_CLIENT_SECRET,
                issuer: process.env.AUTH0_DOMAIN,
          }),
    ],
    secret: process.env.NEXT_SECRET,
    session: {
          strategy: 'jwt',
    },
    callbacks: {
          async jwt({ token, account, profile }) {
                if (account) {
                      token.email = profile.email;
                      return token;
                }
                return token;
          },
    },
})