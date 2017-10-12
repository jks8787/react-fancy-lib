import React from 'react';
import FancyMessage from './FancyMessage';

describe('FancyMessage', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<FancyMessage />)).toBe.ok;
  });

  it('should have text', function() {
    expect(shallow(<FancyMessage />).text()).toEqual('This is a fancy message...');
  });
});
