import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { HowToReg } from "@mui/icons-material";
import Cryptr from "cryptr";
// import { PrismaClient } from "@prisma/client";
import prisma from "/PrismaConnect";
import { getToken } from "next-auth/jwt";

export default NextAuth({
  pages: {
    // signIn: "/msf",
    signIn: "/",
    // signOut: '/auth/signout',
    // error: "/auth/error", // Error code passed in query string as ?error=
    error: "/", // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  session: {
    // Choose how you want to save the user session.
    // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
    // If you use an `adapter` however, we default it to `"database"` instead.
    // You can still force a JWT session by explicitly defining `"jwt"`.
    // When using `"database"`, the session cookie will only contain a `sessionToken` value,
    // which is used to look up the session in the database.
    strategy: "jwt",

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Bhalogari Account",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "+8801700702641 / someone@example.com" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { username, password } = credentials;

        // Call BG API to verify the credential
        // const res = await axios.post("https://backend.bhalogari.com/api/user/verify-password/", {
        const authenticationURL = `${process.env.NEXT_PUBLIC_BG_API}user/verify-password/`;
        console.log("authenticationURL", authenticationURL, { username, password });

        let res;
        try {
          res = await axios.post(authenticationURL, {
            contact_number: username,
            password: password,
            // user_email: user_mail1,
          });
        } catch (err) {
          // console.error("Axios", err.response);
          const { response } = err;
          console.error("\taxios.post", response.status, response.statusText, response.data);
        }

        console.log("\tCredentialsProvider.res", res.status, res.statusText);

        if (res.status && res.status === 200) {
          const { data } = res;
          console.log("\tdata", data);
          // JWT cannot add other info into it?
          // Save to DB
          // const prisma = new PrismaClient();
          let { user_id, token } = data;

          if (token.detail == "No active account found with the given credentials") {
            // TODO Dummy accesstoken for testing

            // const secret = process.env.NEXTAUTH_SECRET;
            // token = await getToken({ req, secret });
            // console.log("\tgenerated token", token);
  
            token.id = user_id;
            token.access =
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzMjg5OTQzLCJpYXQiOjE2NTMyMDM1NDMsImp0aSI6IjEyNmFiYTZmMDNlZTQ4YWZiZGIwYmNkOTRlMGY0OTRhIiwidXNlcl9pZCI6NDEsImNvbnRhY3RfbnVtYmVyIjoiKzg4MDE3Nzc2NjQwMzMiLCJpc19zdXBlcnVzZXIiOmZhbHNlfQ.krhExGRWLpFDiAn8zCQ2Tx2QSuWvI6b8mRYhYf6JKrw";
          }
          console.log("---", user_id, token.access);
          console.log("1...");

          try {
            // var upsertRecord = await prisma.user_session.create({
            //   data: {
            //     id: user_id.toString(),
            //     access_token: token.access,
            //     refresh_token: token.refresh,
            //   },
            // });

            var upsertRecord = await prisma.user_session.upsert({
              where: {
                id: user_id.toString(),
              },
              update: {
                access_token: token.access,
                refresh_token: token.fresh,
              },
              create: {
                id: user_id.toString(),
                access_token: token.access,
                refresh_token: token.fresh,
              },
            });

            console.log("2...");
            console.log("upsert record", upsertRecord);
          } catch (err) {
            console.error(err);
          }

          console.log("3...");

          // Any object returned will be saved in `user` property of the JWT
          //backend.bhalogari.com/api/user/profile/?user_id=22
          // TODO find email, image
          return { ...data, name: data.username, id: data.id, admin: data.is_staff };
          // nextAuth won't allow sensitive data in the session token
          // return data;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          console.log("Login Failed", res);
          return null;
        }
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      },
    }),
  ],

  // jwt: {
  //   // The maximum age of the NextAuth.js issued JWT in seconds.
  //   // Defaults to `session.maxAge`.
  //   maxAge: 60 * 60 * 24 * 30,
  //   // You can define your own encode/decode functions for signing and encryption
  //   async encode() {},
  //   async decode() {},
  // },

  callbacks: {
    async jwt(args) {
      const { token, user } = args;
      // console.log("callbacks.jwt", args);
      if (user) {
        token.id = user.user_id;
        token.isStaff = user.is_staff;
      }
      return token;
    },

    async session(args) {
      const { session, token } = args;
      // Send properties to the client, like an access_token from a provider.
      // session.accessToken = token.accessToken;
      // console.log("callbacks.session", args);

      // const prisma = new PrismaClient();
      var userSessionRecord = await prisma.user_session.findUnique({
        where: {
          // id: session.user_id.toString(),
          id: token.id.toString(),
        },
      });

      // console.log("session.userSessionRecord", userSessionRecord);

      session.token = token;
      // session.hello = "use this token to look up id";
      session.accessToken = userSessionRecord.access_token;
      session.refreshToken = userSessionRecord.refresh_token;
      // session.accessToken = token;
      // console.debug("\tcallback", { session, token });
      return session;
    },
  },
});
