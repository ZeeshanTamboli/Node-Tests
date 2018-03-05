const request = require('supertest');
const expect = require('chai').expect;
const app = require('./server').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hello world response', done => {
      request(app)
        .get('/')
        .expect(404)
        .expect(res => {
          expect(res.body).to.include({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should verify that I am included in array.', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).to.deep.include({
            name: 'Zeeshan',
            age: 22
          });
        })
        .end(done);
    });
  });
});
