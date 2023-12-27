# Repo steps for issue with middleware matcher

To create this sample I did the following:

1. `npx create-next-app@latest` (using page routing)
1. `npx create-sst@latest`
1. `npm i`
1. Add the basic middleware structure (see [./middleware.ts](./middleware.ts))
1. Add basic index page with redirect in server side props (not necessary but to avoid issues with root)
1. Add test page (showing locale).
1. configure localization with localeDetection in false.

To see the issue, deploy the solution using `npx sst deploy`, navigate to root and see that you are not redirected to `/en/test` (locale === en) but to `/test` (locale === default).

## Local logs

When navigating to `/` you will see the following logs.

```
○ Compiling / ...
 ✓ Compiled / in 573ms (202 modules)
 ✓ Compiled in 76ms (202 modules)
 ✓ Compiled /middleware in 51ms (64 modules)
Middleware - http://localhost:3000/test
Middleware redirect - http://localhost:3000/en/test
Middleware - http://localhost:3000/en/test
 ✓ Compiled /test in 60ms (268 modules)
Middleware - http://localhost:3000/en/test
```

## Cloud logs

You will only see logs if you navigate directly to `/en/test`, but not if you navigate to `/test/` or to root `/`.

```
INFO Middleware - https://d3l7a6hcp6eabu.cloudfront.net/en/test
```
