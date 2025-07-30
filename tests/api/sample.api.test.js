// tests/api/sample.api.test.js
const request = require("supertest");
const app = require("../../api/app");

describe("API Test", () => {
  it("GET /status should return 200", async () => {
    const res = await request(app).get("/status");
    expect(res.statusCode).toBe(200);
  });
});
console.log('====================================');
console.log('Running API tests...');
console.log('====================================');