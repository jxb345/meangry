import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Preview from '../public/components/Preview.jsx';

test('preview-snapshot-test', () => {
  const component = renderer.create(
    <Preview body='body' subject='subject'/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log('tree------c.p', tree.children[0].props);
})

test('test-shallow', () => {

  const preview = shallow(<Preview />);

  expect(preview.text()).toEqual('me');

})