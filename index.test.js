var isKezo = require('./index');

describe('Testing isKezo', function () {
  it('should be true', function () {
    expect(isKezo('k3z0')).toBeTruthy();
  });
  it('should be false', function () {
    expect(isKezo('geo')).toBeFalsy();
  });
});
