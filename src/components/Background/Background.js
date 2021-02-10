import React from 'react'

import '../../scss/background.scss'

export const Background = ({children}) => (
  <div className={'area'}>
    <ul className={'circles'}>
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
      <li />
    </ul>
    {children}
  </div>
)
