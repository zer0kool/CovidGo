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

        if ( !wavookData ){ return <p className="white-text"> No WavookData...</p>;}
        if ( isLoading ){var fetching = <p className="white-text"> Loading WavookData...</p>;}
        if ( error ){ return <p className="white-text"> {error.message} </p>;}

        return (
            <div id="Wavook">
                {fetching}
                 {wavookData.map( (post, index) =>
                 <div key={index}>
                     <p>{post.title}</p>
                     <p>{post.url}</p>
                     <p>{post.views}</p>
                 </div>)}
            </div>
        );
    }

    componentDidMount = async () =>{
        this.setState({ isLoading: true })
        let self = this
        let dataParsed = [];
        let parser = new DOMParser();
        fetch(proxy+Endpoint)
            .then(response => response.text()) // Aqui podemos agregar mas error handling -alex.
            .then(function (html){
                try{
                    let wavook = parser.parseFromString(html, 'text/html');
                    let posts = wavook.querySelectorAll(".blogpost");
                    posts.forEach( scrape => {
                        let post = { title: "", url: "", author:"", avatar:"", views:"" };
                        post.title = scrape.children[0].children[0].children[0].text;
                        post.url = scrape.children[0].children[0].children[0].href;
                        post.author = scrape.children[1].children[0].innerText;
                        post.avatar = scrape.children[1].children[0].firstElementChild.currentSrc;
                        post.views = scrape.children[1].children[1].children[1].textContent;
                        dataParsed.push(post);
                    })
                } catch (error) {console.log(`Error inside the parsing function: ${error}`)}
            self.setState({ wavookData: dataParsed, isLoading: false })

        }).catch( error => this.setState({ error, isLoading: false }))
    }
}
