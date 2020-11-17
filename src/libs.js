import React from 'react';

export const withLogger = (Component) => () => {
  console.log('I AM LOGGER');
  console.log('NOW I AM LOGGING');
  console.log('WOKRING...');
  console.log('WOKRING..');
  console.log('WOKRING.');
  console.log('MORE CALCULATIONS');
  console.log(5 > 2 ? 'YES' : 'NO');
  console.log('DONE');
  return (
    <Component />
  );
};