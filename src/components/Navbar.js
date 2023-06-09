import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor(props){
    super(props)
  
  }

  GoForSearch = () =>{
    const input = document.getElementById("searchInput")

    this.props.searchContent(input.value,false);
    input.value = ""
    
  }

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Web
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Sciences
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                id="searchInput"
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="button" onClick={this.GoForSearch}>
              <Link style={{
                textDecoration:"none",
                color:"white"
              }} to="/search">
                  Search
                </Link>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}
