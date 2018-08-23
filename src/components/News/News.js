import React, { Component } from 'react'
import axios from 'axios'
import NewSingle from './NewSingle'
import Error from './Error'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news:[],
            error: false,
        }
      }
      componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=a96bd743d2e64b809cbc7e1b49af22b1`
        // fetch(url)
        //   .then((response)=>{
        //     return response.json() // In fetch, you need to return the response to be able to do anything with it. Also, you need to decode json when returning
        //   })
        //   .then((data)=>{
        //     this.setState({
        //       news: data.articles
        //     })
        //   })
        axios.get(url)
            .then((response)=>{
                this.setState({
                    news: response.data.articles
                })
            })
            .catch((error)=> {
                this.setState({
                    error:true
                })
            })
      }
    renderItems(){
        if(!this.state.error){
            return this.state.news.map(item=>(
                <NewSingle key={item.url} item={item}/>
            ))
        } else {
            return <Error />
        }
        
    }
    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News