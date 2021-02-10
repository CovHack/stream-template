import PropTypes from "prop-types"
import React from "react"

export const Message = ({ message }) => (
  <div className="markdown-content" dangerouslySetInnerHTML={{ __html: message }} />
)


Message.propTypes = {
  message: PropTypes.string,
}

Message.defaultProps = {
  message: `test`,
}
