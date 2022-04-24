/**
 * @prettier
 */
const longNameMehod1 = () => {};
const longNameMehod2 = () => {};
const longNameMehod3 = () => {};
const longNameMehod4 = () => {};
const longNameMehod5 = () => {};
const longNameMehod6 = () => {};

const fn = (...params) => {
  console.log('params', params);
};

html`
  <p>
    sdlfjsdlfjsdlfjljljljlj
    <span>sfsdfs dfds</span>
  </p>
`;

fn('a', 'b', 'c');
fn({
  name: 'aa',
  age: 12,
});

export {
  longNameMehod1,
  longNameMehod2,
  longNameMehod3,
  longNameMehod4,
  longNameMehod5,
  longNameMehod6,
};
