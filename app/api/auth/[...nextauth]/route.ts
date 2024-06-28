import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
    callbacks: {
        session: async (session: any) => {
            const cookie = cookies();

            const newUser = {
                username: session.token.name, email: session.token.email,
                photo: JSON.stringify({ src: session.token.picture })
            };

            cookie.set({
                name: "loggedUser",
                value: JSON.stringify(newUser),
                httpOnly: false,
                path: "/",
                maxAge: 60 * 60 * 24 * 365 * 1000,
                expires: new Date(Date.now() + 60 * 60 * 24 * 365 * 1000),
            });

            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
