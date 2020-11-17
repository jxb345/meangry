import React from 'react';
import renderer from 'react-test-renderer';
import EmailForm from '../public/components/EmailForm.jsx';

test('emailForm-snapshot-test', () => {
  const component = renderer.create(
    <EmailForm/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log('tree', tree);
})
