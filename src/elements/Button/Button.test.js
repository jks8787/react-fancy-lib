import React from 'react';
import Button from './Button';

describe('Button', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<Button />)).toBe.ok;
  });

  it('should have text', function() {
    expect(shallow(<Button />).text()).toEqual('i am a button');
  });
});
