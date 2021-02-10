import PropTypes from "prop-types"
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Bottombar, Sidebar, Video, Background } from '..'

import '../../scss/theme.scss'
import TestVideo from '../../assets/sample-mp4-file.mp4'

export const Layout = ({ eventName, message }) => (
  <Background>
    <Container>
      <Row>
        <Col xs="1" className={'sidebar-col'}>
          <Sidebar eventName={eventName} text={message} />
        </Col>
        <Col xs="11" className={'video-col'}>
          <Video url={TestVideo} />
          <Bottombar />
        </Col>
      </Row>
    </Container>
  </Background>
)

Layout.propTypes = {
  eventName: PropTypes.string,
  message: PropTypes.string,
}

Layout.defaultProps = {
  eventName: `Test Event`,
}
