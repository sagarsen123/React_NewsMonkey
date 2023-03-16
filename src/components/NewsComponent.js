import React, { Component } from 'react'


export class NewsComponent extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
        <div className="card m-3" style={{minWidth:"18rem" ,maxWidth:"20rem",height:"30rem"}} >
        <img src={imageUrl} className="card-img-top" style={{height:"15rem"}} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">
            {description}....
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    )
  }
}

export default NewsComponent