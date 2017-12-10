import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      {posts.map(({node: post }) => {
        const { frontmatter } = post

        return (
          <div>
            <h2>
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </h2>
            <p>{frontmatter.date}</p>
            <p>{frontmatter.excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort:{ fields: [frontmatter___date], order: DESC}
      filter: { frontmatter: { published: { eq: true }}}
    ) {
     
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            published
            excerpt
          }
        }
      }
    }
  }
`

export default IndexPage
