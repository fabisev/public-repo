const app = require('../index');
const request = require('supertest');

describe('Express App', () => {
  test('GET / should return 200 and correct message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from public-repo!');
  });
});