import React, { Component } from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import Img from "gatsby-image"

class PostTemplate extends Component {
    render() {
        const posts = this.props.data.allWordpressPost.edges

        return (
            <Layout>
                <h1>Posts</h1>
                <div>

                {posts.map(({node}) => (
                    <div key={node.slug}>
                        <Link to={'/post/' + node.slug}><h3>{node.title}</h3></Link>
                        {parse(node.excerpt)}
                    </div>
                ))}

                </div>
            </Layout>
        )
    }
}


export default PostTemplate

export const pageQuery = graphql`
    query postsQuery {
        allWordpressPost {
            edges {
                node {
                    id
                    title
                    excerpt
                    date(formatString: "MMMM DD, YYYY")
                    slug
                }
            }
        }
    }
`