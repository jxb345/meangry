import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../public/components/App.jsx';

Enzyme.configure({ adapter: new Adapter() });


test('app-snapshot-test', () => {
  const component = renderer.create(
    <App/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  })

    test('preview button', () => {

      const app = shallow(<App />);
      expect(app.find('button').text()).toEqual('Preview');

      expect(app.containsMatchingElement(<p className="vertical-center">
      heatMail</p>)).toBeTruthy();
  })
