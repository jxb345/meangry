import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup from '../public/components/Signup.jsx';

Enzyme.configure({ adapter: new Adapter() });

test('preview-snapshot-test', () => {
  const component = renderer.create(
    <Signup/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test('sign up button', () => {

  const signup = shallow(<Signup />);
  expect(signup.find('button').text()).toEqual('Sign Up');

  expect(signup.containsMatchingElement(<p className="receive-text">
  ...<i>receive</i> anonymous email:
</p>)).toBeTruthy();

})