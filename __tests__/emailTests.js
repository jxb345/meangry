import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import EmailForm from '../public/components/EmailForm.jsx';
import { TestScheduler } from 'jest';

test('test', async () => {
  const { container, asFragment } = render(<EmailForm />)
  await waitFor(() => screen.getByPlaceholderText('subject'));

  expect(screen.getAllByRole('heading')).toHaveTextContent('hi');

})