# AngularFormsCoverageError

Sample repo to help demonstrate an issue described [here](https://github.com/rpbeukes/angular-typesafe-reactive-forms-helper/issues/288).

Steps to reproduce:

1. Clone the repo

2. Run `yarn install`

3. Run `yarn test` to see that the tests pass

4. Run `yarn test --coverage` to see that the test which uses the `getSafe` method fails and returns `undefined` values
