import react from 'react';
import renderer from 'react-test-renderer';
import Preview from '../public/components/Preview.jsx';

test('test', () => {
  const component = renderer.create(
    <Preview body='body' subject='subject'/>);

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})