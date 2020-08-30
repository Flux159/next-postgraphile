import { config } from "src/server/config";
import { Pool } from 'pg';
import { postgraphile } from "postgraphile";

const pool = new Pool({
    user: config.DB_USER,
    host: config.DB_HOST,
    database: config.DB_DATABASE,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
});

export {pool as pg};

export default postgraphile(
  // @ts-ignore - see https://github.com/graphile/postgraphile/issues/1313
  pool,
  config.DB_SCHEMA,
  {
    // watchPg: true, // Need extension for this to work properly
    graphiql: true,
    enhanceGraphiql: true,
    // externalUrlBase: "/api", // Don't use this since graphql route is incorrect w/ it
    graphqlRoute: "/api/graphql",
    graphiqlRoute: "/api/graphiql",
    retryOnInitFail: true, 
    // retryOnInitFail is mainly so that going to /api/graphiql 
    // doesn't crash entire app if config is incorrect. Fix config.
  }
);
