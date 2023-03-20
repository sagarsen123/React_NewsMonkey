import React, { Component } from "react";

export class NewsComponent extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date ,source} = this.props;

    return (
      <div
        className="card m-3"
        style={{ minWidth: "14rem", height: "33rem", margin: "1rem" }}
      >
        <img
          src={imageUrl}
          className="card-img-top"
          style={{ height: "15rem" }}
          alt="..."
          />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....<span className="badge rounded-pill bg-secondary p-2 m-2">{source}</span></p>
          <p className="card-text">
            <small className="text-muted">
              By {author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark btm-sm"
          >
            Read More
          </a>
          
        </div>
      </div>
    );
  }
}

export default NewsComponent;
