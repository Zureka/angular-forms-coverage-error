// require("jest-preset-angular/ngcc-jest-processor");

module.exports = {
  globalSetup: 'jest-preset-angular/global-setup',
  // preset: "jest-preset-angular",
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  transformIgnorePatterns: [
    // Used by angular-oidc-auth-client, causes errors with jest
    "node_modules/(?!jsrsasign-reduced)",
  ],
  testPathIgnorePatterns: ["src/environments/environment.test.ts"],
  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
  },
};
