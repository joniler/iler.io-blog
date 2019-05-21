import React, { Component } from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const post = this.props.data.wordpressPost

        return (
            <Layout>
                <h1>{post.title}</h1>
                <div className="postContent">{parse(post.content)}</div>
                <p>{post.date}</p>
                <p>{post.slug}</p>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query currentPostQuery($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title
            content
            date(formatString: "MMMM DD, YYYY")
            slug
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`