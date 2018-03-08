const typeUtil = require('../src/index')

describe('index.js: ', () => {
  it('isFunction() should work fine.', () => {
    expect(typeUtil.isFunction(function(){})).to.equal(true)
    expect(typeUtil.isFunction(Object.prototype.toString)).to.equal(true)
  });

  it('isArray() should work file.', () => {
      expect(typeUtil.isArray([])).to.equal(true)
      expect(typeUtil.isArray({})).to.equal(false)
  })
});