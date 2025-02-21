# I Got Issues

## Steps to run this project locally

Before we start, I highly recommend installing `pnpm` to navigate this project instead of using the usual `npm`. Get `pnpm` [here](https://pnpm.io/installation).

1. Create a `.env` file as per `.env.example` in the root of the project. (Check out the (Appendix)[#Appendix] at end of this README for steps getting your own environment variables mentioned in `.env.example`).
2. Apply migrations to your database.
    ```
    pnpx prisma migrate dev
    ```
    I am using Prisma Postgres in this project. If you plan to use any other database, you would have to delete the existing migrations and generate them again. See the relevant database guide at [Prisma](https://www.prisma.io/docs).
3. OPTIONAL: Seed the database.
    ```
    pnpm seed
    ```
4. Generate the prisma client.
    ```
    pnpx prisma generate
    ```
5. Run the application.
    ```
    pnpm dev
    ```

## Appendix
There are two parts of this application that require some environment variables:

1. Database
2. Auth

Database setup has been done using [Prisma](https://www.prisma.io/docs). You'll need to configure your database provider and connection string in the `prisma/schema.prisma` file. Check out [Prisma Docs](https://www.prisma.io/docs/orm/reference/connection-urls) on how to get your connection string. Put this in the `DATABASE_URL` environment variable.

Auth setup has been done using [NextAuth](https://next-auth.js.org/getting-started/introduction). You'll need three environment variables for it to work.

```
NOTE: We are using only Google OAuth 2.0 in this project but you can potentially expand it with other providers.
```
1. `NEXTAUTH_SECRET`: Could be any random string. I recommend generating one using:
    ```
    openssl rand -base64 32
    ```
2. `GOOGLE_CLIENT_ID`: Get it from [Google Cloud Console](https://console.cloud.google.com/). Steps to generate it can be found [here](https://support.google.com/cloud/answer/15549257?hl=en).
3. `GOOGLE_CLIENT_SECRET`: Get it from [Google Cloud Console](https://console.cloud.google.com/). Steps to generate it can be found [here](https://support.google.com/cloud/answer/15549257?hl=en).
