const request = require('supertest');
const app = require('./index');
describe('Post Endpoints', () => {
  it('should create a new post', () => {
    //expect.assertions(1);
    const response = request(app).post({
        headers: {'content-type' : 'application/json'},
        rejectUnauthorized: false, 
        body: JSON.stringify({question:'string'})
      }, function(error, response, body){
        console.log(response);
        expect(response.body.type).toEqual('3');
      });
  })
})