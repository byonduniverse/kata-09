module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/checkout.test.ts'],
  roots: ['src'],
  modulePaths: ['./__stubs__'],
  moduleNameMapper: {
    '.scss$': 'scss-stub.js'
  }
}
