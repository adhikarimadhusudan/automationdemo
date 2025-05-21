import dotenv from 'dotenv';
dotenv.config();

import { test, expect } from '@playwright/test';
const { BASE_URL, ENDPOINTS, CREDENTIALS } = require('../../../utils/constants');


test.describe(' Books API Tests', () => {
  let token;
  let userId;

  test.beforeEach(async ({ request }) => {
    const response = await request.post(`${BASE_URL}${ENDPOINTS.login}`, {
      data: {
      userName: CREDENTIALS.username,
      password: CREDENTIALS.password
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(process.env.USERNAME);
    expect(response.status()).toBe(200);
    const data = await response.json();
    token = data.token;
    userId = data.userId;

    console.log('Generated Token:', token);
    console.log('User ID:', userId);
  });

  test('GET /books returns a list of books with expected structure', async ({ request }) => {
    const response = await request.get(`${BASE_URL}${ENDPOINTS.books}`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body).toHaveProperty('books');
    expect(Array.isArray(body.books)).toBeTruthy();
    expect(body.books.length).toBeGreaterThan(0);

    const book = body.books[0];
    expect(book).toHaveProperty('isbn');
    expect(book).toHaveProperty('title');
    expect(book).toHaveProperty('author');
    expect(book).toHaveProperty('publisher');
    expect(book).toHaveProperty('pages');
    expect(typeof book.title).toBe('string');
    expect(typeof book.pages).toBe('number');

    const found = body.books.find(b => b.title === 'Git Pocket Guide');
    expect(found).toBeTruthy();
    expect(found.author).toBe('Richard E. Silverman');
  });

  test('POST /BookStore/v1/Books - Add valid book to user collection', async ({ request }) => {
    const payload = {
      userId: userId,
      collectionOfIsbns: [
        { isbn: '9781449331818' }
      ]
    };

    const response = await request.post(`${BASE_URL}${ENDPOINTS.books}`, {
      data: payload,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    expect(response.status()).toBe(201);
  });

  test('POST /BookStore/v1/Books without token should be unauthorized', async ({ request }) => {
    const payload = {
      userId: userId,
      collectionOfIsbns: [
        { isbn: '9781449325862' }
      ]
    };

    const response = await request.post(`${BASE_URL}${ENDPOINTS.books}`, {
      data: payload,
      headers: {
        'Content-Type': 'application/json'
        // Authorization header omitted
      }
    });

    expect(response.status()).toBe(401);

    const body = await response.json();
    expect(body).toHaveProperty('code');
    expect(body).toHaveProperty('message');
  });

  test.skip('DELETE /BookStore/v1/Books - delete all books for a user and validate response', async ({ request }) => {
    const payload = {
      userId: userId
    };

    const response = await request.delete(`${BASE_URL}${ENDPOINTS.books}`, {
      data: payload,
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    expect(response.status()).toBe(200); 

    const body = await response.json();
    console.log('Delete response:', body);

    expect(body).toHaveProperty('userId');
    expect(body).toHaveProperty('message');
    expect(body.userId).toBe(userId);
    expect(typeof body.message).toBe('string');
  });
});

