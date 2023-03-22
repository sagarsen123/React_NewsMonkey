import React, { Component } from "react";
import NewsComponent from "./NewsComponent";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // static defaultProps = {
  //   Currcountry: "in",
  //   MaxNewsPerPage: 21,
  //   Currcategory: "general",
  // };

  static propTypes = {
    Currcountry: PropTypes.string,
    MaxNewsPerPage: PropTypes.number,
    Currcategory: PropTypes.string,
  };

  constructor(props) {
    super(props);
    const { MaxNewsPerPage, Currcountry, Currcategory ,searchEnable} = this.props;
    
    console.log(this.props)
    this.state = {
          articles: [],
          loader: true,
          page: 1,
          NewsPerPage: MaxNewsPerPage,
          nextDisabled: false,
          country: Currcountry,
          category: Currcategory,
          totalresults : 0,
          searchEnable: searchEnable
          
        };

    document.title = `${this.capitalize(Currcategory)} | My News Monkey `;
  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  async componentDidMount() {
    this.props.setProgress(10)
    this.setState({ loader: true });
    let url = !this.state.searchEnable? `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.NewsPerPage}`:
    `https://newsapi.org/v2/everything?apiKey=${this.props.apiKey}&q=${this.state.category}`
    ;
    console.log(url)
    let data = await fetch(url);
    this.props.setProgress(30)
    let receivedJson = await data.json();
    // console.log(receivedJson);
    // console.log(this.state.articles.length)
    this.setState({loader: false , articles: receivedJson.articles ,totalresults :receivedJson.totalResults});
    this.props.setProgress(100)
  }



  

  fetchMoreData = async () =>{
    this.setState({ loader: false });
    this.setState({page : this.state.page +1});
    let url = 
    !this.state.searchEnable? 
    this.props.search`https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.NewsPerPage}` 
    :`https://newsapi.org/v2/everything?apiKey=${this.props.apiKey}&q=${this.state.category}`;
    
    let data = await fetch(url);
    let receivedJson = await data.json();

    if (receivedJson.status === "error") {
      this.setState({ loader: false });
      return;
    }
    
    this.setState({ articles: this.state.articles.concat(receivedJson.articles)});
    console.log(receivedJson.totalResults , this.state.articles.length)
  }

  render() {
    return (
      <div className=" container center my-2 ">
        <h2 className="container  center" style={{ marginTop: "5rem" }}>
          News Monkey Top Headlines
        </h2>
        {this.state.loader && <Loader/>}
          <InfiniteScroll
            dataLength={this.state.articles.length?this.state.articles.length:0}
            next={this.fetchMoreData}
           hasMore = {this.state.articles.length<this.state.totalresults}
            loader={<Loader/>}>
                              
                        <div className=" d-flex justify-content-center align-items-center flex-wrap">
                          {this.state.articles &&  this.state.articles.map((element) => {
                              return (
                                <div className="d-flex justify-content-center col-md-4 " key={element.url}>
                                  <NewsComponent
                                    title={ element.title? element.title.slice(0, 40): "Following News Article Click ReadMore to Know more about this Articles" }
                                    newsUrl={element.url}
                                    description={element.content ? element.content.slice(0, 90): "Description for the Current News is Not Mentioned. Click Read More to Know More about article"}
                                    imageUrl={element.urlToImage? element.urlToImage: "https://thumbs.dreamstime.com/b/news-header-background-title-abstract-colorful-global-map-text-hightech-design-blue-colorful-template-90494676.jpg"}
                                    author={element.author ? element.author : "Unknown"}
                                    date={element.publishedAt ? element.publishedAt : "Unknown"}
                                    source={ element.source.name ? element.source.name : "Unknown"}/>
                                </div>
                              );
                            })}
                        </div>
        
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
