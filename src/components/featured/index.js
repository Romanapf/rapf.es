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
            year
            id
            featuredImage {
              fluid {
                src
              }
            }
          }
        }
      }
    `}

    
    

    render={data => (
      
      <div className="featured-content" >
          {data.allContentfulProjects.nodes.map( node => (
            <div className="featured-content--box" >
              <span className="featured-year">
                {node.year}
              </span>
              <h2 key="{node.id}" className="featured-titles">
                {node.title}
              </h2>
              <img className="featured-images" src={node.featuredImage.fluid.src}></img>
              
            </div>
          ))}
      
    </div>
    )}
  ></StaticQuery>
)

export default Featured



