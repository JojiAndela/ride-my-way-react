module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/src/index.js',
    '!**/src/hoc/**',
    '!**/src/utility/**',
    '!**/src/store/reducers/index.js',
    '!**/server.js',
  ],
  testMatch: [
    '<rootDir>/tests/**/?(*.)(spec|test).js?(x)'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '/index.js/',
    '/AsyncComponent.js/',
    '/Aux.js/',
    '/ProtectedRoute/index.js/'
  ],
  moduleFileExtensions: [
    'web.js',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
    'scss'
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
      '^Containers(.*)$': '<rootDir>/src/containers$1',
    '^Components(.*)$': '<rootDir>/src/components$1',
    'Actions(.*)$': '<rootDir>/src/store/actions$1',
    'Constants(.*)$': '<rootDir>/src/store/constants$1',
    'Assets(.*)$': '<rootDir>/src/assets$1',
    'Hoc(.*)$': '<rootDir>/src/hoc$1',
    'Reducers(.*)$': '<rootDir>/src/store/reducers$1',
    '^Utility(.*)$': '<rootDir>/src/utility$1',
    '^Store(.*)$': '<rootDir>/src/store$1'
  },
  setupTestFrameworkScriptFile: '<rootDir>tests/setup/setupEnzyme.js'
};
