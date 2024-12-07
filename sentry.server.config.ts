// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://b16004f87581bc5965b6685ff2e4e3c4@o4508211596951552.ingest.us.sentry.io/4508211602718720",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  // to track how many user visits your website 
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
