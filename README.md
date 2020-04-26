# Lightweight starter template for next.js apps with postgraphile

This starter template is a [Next.js](https://nextjs.org/) project that integrates [typescript](https://www.typescriptlang.org/) and [postgraphile](https://github.com/graphile/postgraphile) for quick graphql apis from built from postgres schemas.

## Next.js api routes

This starter example usages [Next's api routes](https://nextjs.org/docs/api-routes/introduction) which were introduced with [Next 9](https://reacttricks.com/exploring-next-9-dynamic-routing-and-api-routes/). Take a look at the `/pages/api/` folder for the graphql specifics. The `src/server/` folder contains some common helpers for the graphql and graphiql endpoints.

## Initial setup
Make sure to have Node.js and Postgres setup then update `src/server/config.ts` with your database information.

## Getting Started

Clone this repo, update `src/server/config.ts` and run the following:
```
yarn
yarn dev
```
