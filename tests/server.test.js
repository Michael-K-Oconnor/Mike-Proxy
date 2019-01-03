const request = require("supertest");
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const app = require("../server/app");

describe("Testing Proxy server", function() {
  let mock;
  beforeEach(() => {
    mock = new MockAdapter(axios);
    mock.onGet("http://localhost:3001/comments/108").reply(200, "success");
    mock.onPost("http://localhost:3001/comments").reply(201);
    mock.onGet("http://localhost:3002/projects/108").reply(200, "success");
    mock.onGet("http://localhost:3003/pledges/108").reply(200, "success");
    mock.onPost("http://localhost:3003/pledges").reply(201);
    mock.onGet("http://localhost:3004/related/108").reply(200, "success");
  });

  afterEach(() => {
    mock.restore();
  });

  test("It should handle GET requests to comments service", () => {
    return request(app)
      .get("/comments/108")
      .then(response => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual("success");
      });
  });

  test("It should handle POST requests to comments service", () => {
    return request(app)
      .post("/comments")
      .then(response => {
        expect(response.statusCode).toEqual(201);
      });
  });

  test("It should handle GET requests to projects service", () => {
    return request(app)
      .get("/projects/108")
      .then(response => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual("success");
      });
  });

  test("It should handle GET requests to pledges service", () => {
    return request(app)
      .get("/pledges/108")
      .then(response => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual("success");
      });
  });

  test("It should handle POST requests to pledges service", () => {
    return request(app)
      .post("/pledges")
      .then(response => {
        expect(response.statusCode).toEqual(201);
      });
  });

  test("It should handle GET requests to related service", () => {
    return request(app)
      .get("/related/108")
      .then(response => {
        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual("success");
      });
  });
});
