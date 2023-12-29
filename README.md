# Easy Parking App

The app is using [Supabase](https://supabase.com/) as its cloud and infrastructure.

## Getting started

In order to run the app locally, you need to do the following:

- have Docker installed: `brew install --cask docker`
- install the Supabase CLI
  - `brew install supabase/tap/supabase` - recommended way for macOS users
  - `npm i supabase --save-dev` - as a dev dependency
- login to the Supabase CLI: `supabase login`
- create a `.env` file at the root of the project that has the same shape as the `.env.example` file. The Supabase api url and the anon key will be available after starting the app. For the Google and Facebook client ids ask around in the team.
- run `supabase start` - this will pull in all the required Docker images and start all the required docker containers. After everything has been installed a list of URLs and API keys will be provided. Use these to access the local resources.

For a more thorough walkthrough of starting Supabase locally access [this](https://supabase.com/docs/guides/cli/local-development) link.
