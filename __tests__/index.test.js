const app = require('../index');
const request = require('supertest');

describe('Express App', () => {
  test('GET / should return 200 and correct message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello from public-repo!');
  });

  test('GET /utils/add should correctly add numbers', async () => {
    const response = await request(app).get('/utils/add/5/3');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 8 });
  });

  test('GET /utils/add should handle negative numbers', async () => {
    const response = await request(app).get('/utils/add/-10/5');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: -5 });
  });
});