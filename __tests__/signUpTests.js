import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Signup from '../public/components/Signup.jsx';

test('preview-snapshot-test', () => {
  const component = renderer.create(
    <Signup/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log('tree------c.p', tree.children[0].props);
})