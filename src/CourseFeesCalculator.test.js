/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import CourseFeesCalculator from './CourseFeesCalculator';

test('renders minimum fees correctly', () => {
    const { getByText } = render(<CourseFeesCalculator />);
    const minimumFeesElement = getByText(/Minimum Fees for Rahul/i);
    expect(minimumFeesElement).toBeInTheDocument();
});
