import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Loader from "./Loader";
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps={
    Currcountry :"in",
    MaxNewsPerPage :21,
    Currcategory:"general"

  }

  static propTypes = {
    Currcountry : PropTypes.string,
    MaxNewsPerPage : PropTypes.number,
    Currcategory : PropTypes.string

  }

  constructor(props) {
    super(props);
    const  {MaxNewsPerPage,Currcountry,Currcategory} =  this.props
 

    this.state = {
      articles: [],
      loader: false,
      page:1,
      NewsPerPage : MaxNewsPerPage,
      nextDisabled: false,
      country:Currcountry,
      category:Currcategory
    };
  
  }



  async componentDidMount(){
    this.setState({loader:true})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=663be6ff529e406889d0fb6fd81cedf1&page=${this.state.page}&pageSize=${this.state.NewsPerPage}`
    // let url = `  https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=663be6ff529e406889d0fb6fd81cedf1&page=1&pageSize=20`
    let data = await fetch(url);
    
    
    let receivedJson = await data.json();
  console.log(receivedJson)
      setTimeout(()=>{

        this.setState({loader:false});
      },2000)
    this.setState({articles:receivedJson.articles})
  }
  
  handleNextClick = async () =>{
    this.setState({loader:true});

    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=663be6ff529e406889d0fb6fd81cedf1&page=${this.state.page+1}&pageSize=${this.state.NewsPerPage}`
    
      let data = await fetch(url);

      
      let receivedJson = await data.json();
      setTimeout(()=>{

        this.setState({loader:false});
      },2000)
      if(receivedJson.status === "error"){
        this.setState({nextDisabled: true});
        return;
      }
      
      this.setState({articles:receivedJson.articles, page:this.state.page+1})

  }

  handlePrevClick = async () =>{
    
    this.setState({loader:true});

    let url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=663be6ff529e406889d0fb6fd81cedf1&page=${this.state.page-1}&pageSize=${this.state.NewsPerPage}`
    let data = await fetch(url);

  
    let receivedJson = await data.json();
    
      setTimeout(()=>{

        this.setState({loader:false});
      },2000)
    this.setState({articles:receivedJson.articles,page:this.state.page - 1})
    
  }

  


  render() {
    return (
      <div className=" container center my-2 ">
        <h2 className="container  center">News Monkey Top Headlines</h2>
        {this.state.loader && <Loader/>}
        <div className=" d-flex justify-content-center align-items-center flex-wrap">
          {!this.state.loader&& this.state.articles && this.state.articles.map((element) => {
            return   <div className="d-flex justify-content-center col-md-4 " key={element.url}>
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

        </div>
          <div className="d-flex justify-content-between align-items-center  p-5">
            <button disabled={this.state.page<=1} className="btn btn-dark m-1" onClick={this.handlePrevClick}>&larr; Previous Page </button>
            <button className="btn btn-dark m-1" onClick={this.handleNextClick} disabled={this.state.nextDisabled}>Next Page 	&rarr; </button>
          </div>
      </div>
    );
  }
}

export default News;
