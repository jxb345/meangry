import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../../public/components/App.jsx';

test('app-snapshot-test', () => {
  const component = renderer.create(
    <App/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    console.log('tree[0].props', tree.children[0].props);
})
