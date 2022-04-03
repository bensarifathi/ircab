import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import dbConnect from '../../../lib/dbConnect'
import Admin from '../../../models/Admin'

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
        try {
          await dbConnect()
          const admin = await Admin.findOne({ email: email }).exec();
          if (admin 
          && password === admin.password) {
            return {
              name: 'Adib',
              email: email
            }
          }
        } catch (error) {
          console.log(error)
        }
        }
    })
  ],
  secret: 'cQfTjWnZr4u7x!A%D*G-KaPdRgUkXp2s',
})