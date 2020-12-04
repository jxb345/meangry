import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../public/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });

const app = mount(<App />);

test('app-snapshot-test', () => {
  const component = renderer.create(
    <App/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  })

test('preview button', () => {

  expect(app.find('.button-preview').text()).toEqual('Preview');

  expect(app.containsMatchingElement(<p className="vertical-center">
  heatMail</p>)).toBeTruthy();
})

test('send button', () => {
  app.find('#preview').simulate('click')
  expect(app.find('.button-send').text()).toEqual('Send');
})
