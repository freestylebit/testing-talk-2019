import React from 'react';
import renderer from 'react-test-renderer';

import Specificity from './Specificity';

it('tests that the JSON payload matches', () => {
  const payload = [
    'together',
    'forever',
    'and',
    'never',
    'to',
    'part',
    'together',
    'forever',
    'we',
    'two',
    'and',
    "don't",
    'you',
    'know',
    'I',
    'would',
    'move',
    'heaven',
    'and',
    'earth',
    'to',
    'be',
    'together',
    'forever',
    'with',
    'you',
  ];

  expect(Specificity()).toEqual(payload);
  // Try `.toContain` here
});

// it('renders lyrics correctly', () => {
//   const tree = renderer
//     .create(
//       <span>
//         And I got angels on my side I got angels flying high And everything will be alright 'cause I
//         got angels on my side
//       </span>,
//     )
//     .toJSON();

//   expect(tree).toMatchSnapshot();
// });
