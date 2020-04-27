# next-postgraphile

A lightweight starter template for next.js apps with postgraphile.

This starter template is a [Next.js](https://nextjs.org/) project that integrates [typescript](https://www.typescriptlang.org/) and [postgraphile](https://github.com/graphile/postgraphile) for quick graphql apis from built from postgres schemas.

## Next.js api routes

This starter example usages [Next's api routes](https://nextjs.org/docs/api-routes/introduction) which were introduced with [Next 9](https://reacttricks.com/exploring-next-9-dynamic-routing-and-api-routes/). Take a look at the `/pages/api/` folder for the graphql specifics. The `src/server/` folder contains some common helpers for the graphql and graphiql endpoints.

## Initial setup
Make sure to have Node.js and Postgres setup then update `src/server/config.ts` with your database information or use the following environment variables:

```shell
DB_HOST # default 'localhost'
DB_DATABASE # default 'next-postgraphile'
DB_USER # default 'next-postgraphile'
DB_PASSWORD # default 'test1234' 
DB_PORT # default 5432
DB_SCHEMA # default 'next-postgraphile'
```

## Getting Started

Clone this repo, update `src/server/config.ts` and run the following:
```
yarn
yarn dev
```

For other commands, building, etc. this repo is the same as a next.js app started with `yarn create next-app`.

## Graphiql and Graphql endpoints

In development, the graphiql endpoint is located at [http://localhost:3000/api/graphiql](http://localhost:3000/api/graphiql) and the graphql query endpoint is at [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql).

## Notes

Deployment has not been tested with now.sh or lambda/serverless. This repo is better suited as a starter template for VM or container deployment in a traditional client-server architecture.

Please see [postgraphile-lambda-example](https://github.com/graphile/postgraphile-lambda-example) for more references if you're looking to deploy to a serverless deployment target.

# LICENSE

MIT License