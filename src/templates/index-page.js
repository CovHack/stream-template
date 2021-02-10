import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import {
  Layout
} from '../components/'

export default function IndexPage({ data, pageContext: { font } }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  useEffect(() => {
    if (font) document.body.style.fontFamily = font
  })
  return (
    <div>
      <Layout
        eventName={frontmatter.eventName}
        message={html}
      />
    </div>
  );
}


export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        eventName
        tagline
      }
    }
  }
  `
