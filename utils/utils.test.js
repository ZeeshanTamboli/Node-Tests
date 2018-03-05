const expect = require('chai').expect;
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);

      expect(res)
        .to.equal(44)
        .to.be.a('number');
    });
  });

  it('should async add two numbers', done => {
    //done is used when testing async code
    utils.asyncAdd(4, 3, sum => {
      expect(sum)
        .to.equal(7)
        .to.be.a('number');
      done();
    });
  });

  it('should square a number', () => {
    const res = utils.square(3);

    expect(res)
      .to.equal(9)
      .to.be.a('number');
  });

  it('should async square a number', done => {
    utils.asyncSquare(3, square => {
      expect(square)
        .to.equal(9)
        .to.be.a('number');
      done();
    });
  });
});

// it('should expect some values', () => {
//   // expect(12).to.not.equal(11);
//   // expect({ name: 'Zeeshan' }).to.deep.equal({ name: 'Zeeshan' });
//   expect([2, 3, 4]).to.include(4);
//   expect({ age: 22 }).to.include({ age: 22 });
// });
it('should verify first and last names are set', () => {
  const user = {
    age: 22,
    location: 'Pune'
  };
  const res = utils.setName(user, 'Zeeshan Tamboli');
  expect(res).to.include({ firstName: 'Zeeshan', lastName: 'Tamboli' });
});
