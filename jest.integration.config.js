module.exports = {
  testEnvironment: 'node',
  testMatch: [
    '**/tests/integration/**/*.test.js'
  ],
  testTimeout: 10000, // Увеличиваем таймаут для интеграционных тестов
  verbose: true
};