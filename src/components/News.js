import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {
   
    constructor(){
        super();
        this.state={
           articles: [],
           loading : false,
           page:1
        }
    }
    // Fetching data from the API
   async componentDidMount() {
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dc02c79bf1fd4ee0aacbf28a487dbe8b&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
          totalResults: parsedData.totalResults,
          loading: false
        })
    }
    handleNextclick = async () => {
      if (this.state.page +1> Math.ceil(this.state.totalResults/18)){
        
      }
      else{  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dc02c79bf1fd4ee0aacbf28a487dbe8b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState(prevState => ({
        page: prevState.page + 1,
        articles: parsedData.articles,
        loading:false
      }));
    }
    }
    
    handlePrevclick = async () => {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dc02c79bf1fd4ee0aacbf28a487dbe8b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState(prevState => ({
        page: prevState.page - 1,
        articles: parsedData.articles,
        loading:false
      }));
    }
  render() {
    return (
      <div className='container my-3'>
         <h2 className='text-center' style={{margin: "35px"}}>Top headlines</h2>
         {this.state.loading && <Spinner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element) =>{
          return <div className='col-md-4' key={element.url}>
            <NewsItems title={element.title ? element.title: ""} description ={element.description ? element.description:""} imageurl={element.urlToImage} newsurl ={element.url}/>
            </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevclick}>&larr; Previous</button>
        <button disabled={this.state.page +1> Math.ceil(this.state.totalResults/18)} type="button" className="btn btn-dark" onClick={this.handleNextclick}>Next &rarr;</button>
        </div>
      </div>

    )
  }
}
