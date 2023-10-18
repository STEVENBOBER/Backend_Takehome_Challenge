const request = require('supertest');
const app = require('../server'); // Update the path to your Express app as needed

describe('GET /api/quotes/best-three', () => {
  test('responds to /api/quotes/best-three with 400 because no userId passed', async () => {
    const res = await request(app).get('/api/quotes/best-three');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(400);
  });

  test('responds to /api/quotes/best-three with with 200 when user id is passed', async () => {
    const res = await request(app).get('/api/quotes/best-three?userId=89f87ddf-b240-46b1-8b9d-bcfc804aa610');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
  });
});

describe('POST /api/quotes', () => {
  it('should respond with a 500 status code when no body is sent', async () => {
    const res = await request(app).post('/api/quotes');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(500);
  });
});