import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'
import SEO from '../components/SEO'
const IndexPage = ({ data }) => {
  const { allMdx: { nodes: posts } } = data;
  return <Layout>
    <SEO />

    <Hero showPerson />
    <Posts posts={posts} title="recently published" />

  </Layout>
}


export const query = graphql`
{
  allMdx(sort: {fields: frontmatter___date, order: DESC},limit:3) {
    nodes {
      excerpt
      frontmatter {
        title
        author
        category
        date(formatString: "MMMM Do,YYYY")
        slug
        image {
          childImageSharp {
            fluid {
              
              ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default IndexPage
