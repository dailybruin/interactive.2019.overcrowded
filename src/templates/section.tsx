import * as React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    pageArticles(title: { eq: "Growing_Pains" }) {
      title
    }
  }
`
