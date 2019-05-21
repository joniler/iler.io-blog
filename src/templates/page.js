import React, {Component} from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import SEO from "../components/seo"

class PageTemplate extends Component {
    render() {
        const siteMetadata = this.props.data.site.siteMetadata
        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <Layout>
                <SEO title={siteMetadata.title} keywords={[`gatsby`, `application`, `react`]} />
                <h1>{currentPage.title}</h1>
                <div className="pageContent">{parse(currentPage.content)}</div>
                {/* <div className="pageContent" dangerouslySetInnerHTML={{__html: currentPage.content}}/> */}
                <p>{currentPage.date}</p>
                <p>{currentPage.slug}</p>
            </Layout>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
            slug
            id
            date(formatString: "MMMM DD, YYYY")
        }
        site {
            id
            siteMetadata {
                title
            }
        }
    }
`