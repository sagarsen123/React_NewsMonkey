import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loader: false,
      page:1,
      totalResults :1,
      maxArticles:12
    };
  
  }

  async componentDidMount(){
    
    let url = `https://newsapi.org/v2/everything?q=india&from=2023-03-15&to=2023-03-15&sortBy=popularity&apiKey=98460566d55e45b9b2ddd7ef6d4f920b&page=${this.state.page}&pageSize=12`
    let data = await fetch(url);
  
    let receivedJson = await data.json();
    console.log(receivedJson);
    this.setState({articles:receivedJson.articles,maxPages: receivedJson.totalResults/this.state.maxArticles})
  }
  
  handleNextClick = async () =>{
    // if(this.state.page + 1 < this.state.maxPages){

    //   this.state.page = this.state.page +1
    //   let url = `https://newsapi.org/v2/everything?q=india&from=2023-03-15&to=2023-03-15&sortBy=popularity&apiKey=98460566d55e45b9b2ddd7ef6d4f920b&page=${this.state.page}&pageSize=12`
    //   let data = await fetch(url);
      
    //   let receivedJson = await data.json();
    //   this.setState({articles:receivedJson.articles, page:this.state.page})
    //   console.log(receivedJson.articles)
    // }
  }

  handlePrevClick = async () =>{
    // this.state.page = this.state.page -1
    // let url = `https://newsapi.org/v2/everything?q=india&from=2023-03-15&to=2023-03-15&sortBy=popularity&apiKey=98460566d55e45b9b2ddd7ef6d4f920b&page=${this.state.page}&pageSize=12`
    // let data = await fetch(url);

  
    // let receivedJson = await data.json();
    // this.setState({articles:receivedJson.articles})
    
  }

  


  render() {
    return (
      <div className=" container center my-2 ">
        <h2 className="container  center">News Monkey Top Headlines</h2>
        <div className="row d-flex justify-content-center align-items-center flex-wrap">
          {this.state.articles && this.state.articles.map((element) => {
            return   <div className="d-flex justify-content-center col-md-4" key={element.url}>
              <NewsComponent
                title={
                  element.title?element.title.slice(0,40):"Following News Article Click ReadMore to Know more about this Articles"
                }
                newsUrl={
                  element.url
                }
                description={
                 element.content?element.content.slice(0,90):"Description for the Current News is Not Mentioned. Click Read More to Know More about article"
                }
                imageUrl={
                 element.urlToImage?element.urlToImage:"https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"
                }
              />
        </div>
          
          })}

          {!this.state.articles && <h1>No More News To Show Now Visit After Some Time</h1>}
        </div>
          <div className="d-flex justify-content-between p-5">
            <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous Page </button>
            <button className="btn btn-dark" onClick={this.handleNextClick}>Next Page 	&rarr; </button>
          </div>
      </div>
    );
  }
}

export default News;
