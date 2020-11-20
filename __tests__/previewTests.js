import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Preview from '../public/components/Preview.jsx';

Enzyme.configure({ adapter: new Adapter() });

// test('preview-snapshot-test', () => {
//   const component = renderer.create(
//     <Preview body='body' subject='subject'/>);

//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();

//     console.log('tree------c.p', tree.children[0].props);
// })

test('test-shallow', () => {

  const preview = shallow(<Preview />);

  expect(preview.text()).toEqual('');

})