import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			credentials: {
				email: {
					label: "Email",
					type: "text",
					placeholder: "sample@sample.com",
				},
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const res = await fetch("http://localhost:3000/api/auth/login", {
					method: "POST",
					body: JSON.stringify(credentials),
					headers: { "Content-Type": "application/json" },
				});
				const user = await res.json();

				if (res.ok && user) {
					return user;
				}

				return null;
			},
		}),
	],
});
