const request = require("supertest");
const app = require("../../api/index");

describe("API Test", () => {
  it("GET /status should return 200", async () => {
    const res = await request(app).get("/status");
    expect(res.statusCode).toBe(200);
  });
});
