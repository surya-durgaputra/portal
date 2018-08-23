import React, { Component } from 'react'
import axios from 'axios'

import SingleSide from './SingleSide'
import Error from './Error'

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews:[],
            error: false,
        }
      }
      componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=a96bd743d2e64b809cbc7e1b49af22b1`
        //note: in axio we do not need to return the response before we can use it (unlike fetch)
        //axios also returns json response automatically
        axios.get(url)
            .then((response)=>{
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error)=> {
                this.setState({
                    error:true
                })
            })
        
        //this is how we do post
        // axios.post(url,{
        //     data:{
        //         news:{
        //             title: 'blahblah',
        //             description: 'blh bleh'
        //         }
        //     }
        // })
      }
    renderItems(){
        if(!this.state.error){
            return this.state.sidenews.map(item=>(
                <SingleSide key={item.url} item={item}/>
            ))
        } else {
            return <Error />
        }
        
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Sidenews