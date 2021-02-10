import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from 'reactstrap';

import './Bottombar.scss'

export const Bottombar = () => (
  <Container className={'bottombar'}>
    <Row>
      <Col>
        <div className={'event'}>
          Currently: side event here
        </div>
      </Col>
      <Col>
        <div className={'event'}>
          Up next: something
        </div>
      </Col>
    </Row>
  </Container>
)
