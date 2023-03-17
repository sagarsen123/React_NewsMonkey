import React, { Component } from 'react'


export class NewsComponent extends Component {
  render() {
    const {title,description,imageUrl,newsUrl} = this.props;
    
    return (
        <div className="card m-3" style={{minWidth:"14rem",height:"30rem", margin:"1rem"}} >
        <img src={imageUrl} className="card-img-top" style={{height:"15rem"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">
            {description}....
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btm-sm">
            Read More
          </a>
        </div>
      </div>
    )
  }
}

export default NewsComponent