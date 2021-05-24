import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './featured.css'

const Featured = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulProjects(limit: 10) {
          nodes {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="featured-content">
        <h1 className="featured-titles">
          {data.allContentfulProjects.nodes.map( node => (
            <span>{node.title}</span>
          ))}
        </h1>
    </div>
    )}
  ></StaticQuery>
)

export default Featured



