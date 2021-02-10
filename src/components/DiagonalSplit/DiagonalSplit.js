import React from 'react'

import './DiagonalSplit.scss'

export const DiagonalSplit = props => {
  const color = props.color || 'rgba(33, 37, 41, 1)'
  const polygonPoints = !props.invert ? '1, 0 0, 1 1, 1' : '0, 1 1, 0 0, 0'

  return (
    <div className="split-container">
      <svg
        style={{
          width: '100%',
          height: 'calc(30px + 1vw)',
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1 1"
        preserveAspectRatio="none">
        <polygon points={polygonPoints} fill={color} />
      </svg>
      {!props.invert && <div className="gap-fill" style={{ outlineColor: color }}></div>}
    </div>
  )
}
