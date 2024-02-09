# Release

## Versioning

We use [semantic versioning](https://semver.org/). The version number is stored in the `package.json` and `config.yaml` files.

## Git release process

1. Create a new branch from `main` with the name `release/vX.X.X`
2. Update the version number in `package.json` and `config.yaml`
3. Create PRs from every branch that has features ready to be released to `release/vX.X.X`
4. Once the PRs are approved, create a PR from `release/vX.X.X` to `main`
5. Once the PR is approved, merge it into `main`

## Native release process

**Note**: if you need a new native setting, you can use the config.yaml file to add it (see [Trapeze](https://trapeze.dev/docs/)),  or you can set it manually in the native project files.

### With Appflow 

1. Log into Appflow: https://dashboard.ionicframework.com/
2. Go to Commits tab
3. Select the commit you want to release
4. Click on the "Build" button
5. Select the platform you want to build
6. Select the Store you want to release to
7. Click on the "Build" button
8. Once the build is done, go to appstoreconnect or google play console and enable testing for the new version
9. Once the release candidate is approved, go to appstoreconnect or google play console and release the new version

### Without Appflow

1. Build all the assets locally with `npm run sync:build`
2. Open Android Studio or XCode
3. Create a new native build, see [Native App](./native.md)
4. Sign the app with the correct certificates (see 1password for credentials)
5. Upload the app to the store (in Xcode with `Product > Archive` or for Android simply upload the file on the internal testing track)
6. Once the release candidate is approved, go to appstoreconnect or google play console and release the new version