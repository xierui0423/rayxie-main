import React from 'react';

export default ({headerText, children}) =>
  <h2 className="header">
    {headerText}
    {children}
  </h2>