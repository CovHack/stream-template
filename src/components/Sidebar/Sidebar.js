import PropTypes from "prop-types"
import React from "react"

import { DiagonalSplit, Message } from '..'

import './Sidebar.scss'

import Logo from '../../assets/covhack-logo-white.png'

import Twilio from '../../assets/sponsors/twilio-logo-red.svg'
import Super5 from '../../assets/sponsors/super5-logo.png'
import CUSU from '../../assets/sponsors/cusu.svg'
import Fusion from '../../assets/sponsors/fusion-logo.png'

import '../../scss/colors.scss'

export const Sidebar = ({eventName, text}) => (
  <div className={'sidebar'}>
    <div className={"eventName"}>
      <img src={Logo}/>
      <br />
      {eventName}
    </div>
    <div className={"sponsors"}>
      <DiagonalSplit invert />
      <img src={Twilio}/>
      <img src={Super5}/>
      <img src={CUSU}/>
      <img src={Fusion}/>
      <DiagonalSplit  />
    </div>
    <Message message={text}/>
  </div>
)
