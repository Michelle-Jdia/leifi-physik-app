# CLI

## Local development

### How to start a local environment

- Install project dependencies with `npm install`
- run `npm run dev` to start a dev server

### Building App for production

- `npm run build` will build all assets needed for the app

### Preview the production build

- run `npm run preview` and it should start a server from the production build

### Building Native Code

- for Android: `npx cap add android`
- for IOS: `npx cap add ios`

After you do changes to your web app, you need to run

- `npx cap copy <platform>` (native capacitor CLI) (replace platform with android | ios)

In case package.json dependencies have changes, you need to run

- `npx cap sync <platform>`

For more CLI on Capacitor, please visit: [Capacitor CLI](https://capacitorjs.com/docs/cli)

## Linting

When you run your dev server, the linting is enabled by default.

Linters:

- Eslint
- Typescript check
- Stylelint
- Prettier

Depending on IDE settings, `npm run lint` will run on-save, on commit, or you have to run it manually in the terminal. Either way, make sure to run it before commits. This will run all the above Linters. It will fail if you have errors, but warnings will still pass.

### Other linting scripts

- `npm run eslint` will check `.{vue,ts}`
- `npm run eslint:fix` will fix any eslint issues it can (usually this fixes 0 issues, because it doesn't know how to fix them)
- `npm run stylelint` will check styles
- `npm run prettier` will check formatting
- `npm run prettier:fix` will fix formatting
- `npm run typecheck` will check typescript
- `npm run lint` will run all above scripts
- `npx lint-staged` This will run `npm run lint` on all staged files. (you can use this to simulate the same behavior as committing to test it out)

## Testing

- use `npn run test:unit` to run units tests
- to create a snapshot, you need to run `npm run test:unit -- -u`
- if your test fails because of a snapshot change, make sure that the change is intended and then run `npm run test:unit -- -u` which will update all snapshots.
- use `npm run test:e2e` to run playwright. Use `npm run test:e2e:ui` to open a browser like UI mode

## Storybook

- use `npm run storybook`

## Dependencies

We are using `Taze` to manage our dependencies.
We have only 2 CLI commands, so if you want to use other commands, please refer to the official docs: [Taze](https://github.com/antfu/taze)

- `npm run check` will check `patch` level dependencies for updates
- `npm run check:update` will update `package.json` with the new deps. You will need to do `npm i` to install them.
