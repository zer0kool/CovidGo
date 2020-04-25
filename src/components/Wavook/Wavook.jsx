import React, { Component } from "react";
//import Loading from "../Loading/Loading";

import "./Wavook.css"

const proxy = "https://cors-anywhere.herokuapp.com/";
const Endpoint = 'https://www.wavook.com/covid19.php'

export default class Wavook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            wavookData: [],
            isLoading: false,
            error: null
        };
    }

    render() {
        const { wavookData, isLoading, error } = this.state;

        if ( !wavookData ){ return <p className="white-text"> No Data...</p>;}
        if ( isLoading ){ return <p className="white-text"> Loading Data...</p>;}
        if ( error ){ return <p className="white-text"> {error.message} </p>;}

        return (
            <div id="Wavook">
                 {wavookData.map( post =>
                 <div key={post.objectID}>
                     <p>{post.title}</p>
                     <p>{post.url}</p>
                     <p>{post.views}</p>
                 </div>)}
            </div>
        );
    }

   async componentDidMount() {
        this.setState({ isLoading: true })
        let self = this
        var data = [];
        fetch(proxy+Endpoint)
            .then(response => response.text()) // Aqui podemos agregar mas error handling -alex.
            .then(function (html){
                try{
                    let parser = new DOMParser();
                    let wavook = parser.parseFromString(html, 'text/html');
                    let posts = wavook.querySelectorAll(".blogpost");
                    posts.forEach( scrape => {
                        let post = { title: "", url: "", author:"", avatar:"", views:"" };
                        post.title = scrape.children[0].children[0].children[0].text;
                        post.url = scrape.children[0].children[0].children[0].href;
                        post.author = scrape.children[1].children[0].innerText;
                        post.avatar = scrape.children[1].children[0].firstElementChild.currentSrc;
                        post.views = scrape.children[1].children[1].children[1].textContent;
                        data.push(post);
                    })
                } catch (error) {console.log(`Error inside the parsing function: ${error}`)}
            self.setState({ wavookData: data, isLoading: false })

        }).catch( error => this.setState({ error, isLoading: false }))
    }
}
