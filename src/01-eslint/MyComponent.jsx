import React from 'react';

function MyComponent() {
  const bar = document.getElementsByTagName('div');
  const foo = document.getElementsByTagName('body');
  foo.innerHTML = bar.value;

  return (
    <div>
      <a href="https://www.google.com" target="_blank">
        Google
      </a>
    </div>
  );
}

export default MyComponent;
