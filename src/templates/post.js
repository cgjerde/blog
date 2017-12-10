import React from 'react';
import Helmet from 'react-helmet';

export default function Template({data, pathContext}) {
    const {markdownRemark: post} = data;
    const { next, prev} = pathContext;
    //const post = data.markdownRemark;

    return (
        <div>
            <h1>{post.frontmatter.title}</h1>
            <h3>{post.frontmatter.date}</h3>
            <div dangerouslySetInnerHTML = {{__html: post.html}}/>
        </div>
    )
}

export const postQuery = graphql `
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
                date
            }
        }
    }
`
