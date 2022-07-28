import React from 'react';
import renderer from 'react-test-renderer';
import ContinentsPage from './ContinentsPage';

it('renders correctly', () => {
  const tree = renderer.create(<ContinentsPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
