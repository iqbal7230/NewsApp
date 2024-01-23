import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title, description, imageurl, newsurl} = this.props;
    return (
      <div className='my-3 '>
        <div className="card" >
      <img src={!imageurl?"https://www.plslwd.org/wp-content/plugins/lightbox/images/No-image-found.jpg":imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}.</p>
        <a href={newsurl} className="btn btn-sm btn-primary">Read more</a>
      </div>
    </div></div>
    )
  }
}
