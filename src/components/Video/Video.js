import PropTypes from "prop-types"
import React from "react"

import "./Video.scss"

export const Video = ({ url }) => (
  <div className={'video'}>
    <div className={'videoC'}>
      <video controls autoPlay>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  </div>
)
