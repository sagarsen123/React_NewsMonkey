import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import React, { Component } from "react";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0,
    searchContent:"",
    searchVal: false
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  
  };

  setSearchContent = (searchData,sVal) => {
    this.setState({
      searchContent : searchData,
      searchVal: sVal

    })
    console.log(this.state.searchContent)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar searchContent = {this.setSearchContent}/>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="general"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"sports"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="sports"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="entertainment"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"business"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="business"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"technology"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="technology"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"science"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="science"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"health"}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory="health"
                  apiKey={this.apiKey}
                  searchEnable = {false}
                />
              }
            />
            <Route
              path="/search"
              element={
                <News
                  setProgress={this.setProgress}
                  key={this.searchContent}
                  MaxNewsPerPage={21}
                  Currcountry="in"
                  Currcategory={this.state.searchContent}
                  apiKey={this.apiKey}
                  searchEnable = {true}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
