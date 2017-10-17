import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

const completedMessages = [
  'Thank You!',
  'We will begin working now'
];

describe('Modal', function() {
  it('should render without throwing an error', function() {
    const wrapper = shallow(
      <Modal
        isActive
        onClose={function(){}}
        simpleMessageList={completedMessages}
        desiredClassName={"modal-for-message"}
      />
    );
    expect(wrapper).toBe.ok;
  });

  it('should have desired class name', function() {
    const wrapper = shallow(
      <Modal
        isActive
        onClose={function(){}}
        simpleMessageList={completedMessages}
        desiredClassName={"modal-for-message"}
      />
    );
    const modalMessage = wrapper.find('.modal-for-message.modal-component.modal');
    expect(modalMessage.length).toEqual(1);
  });

  it('should have the necessary message', function() {
    const wrapper = shallow(
      <Modal
        isActive
        onClose={function(){}}
        simpleMessageList={completedMessages}
        desiredClassName={"modal-for-message"}
      />
    );
    const messages = wrapper.find('.modal-component__content-line');
    expect(messages.length).toEqual(2);
    expect(messages.first().text()).toEqual('Thank You!');
  });
});
