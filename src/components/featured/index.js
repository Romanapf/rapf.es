import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import './featured.css'

const Featured = () => {
  const data = useStaticQuery(graphql`
   {
        allContentfulProjects(limit: 10) {
          nodes {
            title
            year
            id
            color
            featuredImage {
              fluid {
                srcSet
              }
            }
          }
        }
      }
  `)

  const [isHovering, setIsHovering] = useState(false);


  return  <div className="featured-content">
    {data.allContentfulProjects.nodes.map( node => (
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <img className={`featured-images ${ isHovering ? "" : "hidden"}`} srcSet={node.featuredImage.fluid.srcSet}></img>
        <div className="featured-content--box">
          <h2 className="featured-titles" style={{color: `${node.color}`}}>
            {node.title}
          </h2>
        </div>
      </div>
    ))}
  </div>
}



export default Featured

