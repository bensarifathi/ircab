import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "ir-cab",
      
      credentials: {
        email: { label: "Email", type: "email", placeholder: "<username>@ir-cab.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const { email, password } = credentials
        if (email === 'superadmin@ir-cab.com' 
          && password === 'g-"fUrgvL5%A9#YU') {
            return {
              name: 'Adib',
              email: email
            }
          }
        }
    })
  ],
  secret: 'cQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s',
})