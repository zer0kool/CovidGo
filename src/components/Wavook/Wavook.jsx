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
        const { wavookData, isLoading } = this.state;

        if ( isLoading ){
            return <p> Loading Data...</p>;
        }

        return (
            <div id="Wavook">
                 {wavookData.map( post =>
                 <div key={post.objectID}>
                     <td>{post.title}</td>
                     <td>{post.url}</td>
                     <td>{post.views}</td>
                 </div>)}
            </div>
        );
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        var data = [];
        fetch(proxy+Endpoint)
            .then(response => response.text())
            .then(function (html){
                let parser = new DOMParser();
                let wavook = parser.parseFromString(html, 'text/html');
                let posts = wavook.querySelectorAll(".blogpost");

                console.log(data)
                posts.forEach( scrape => {
                    let post = { title: "", url: "", author:"", avatar:"", views:"" };
                    post.title = scrape.children[0].children[0].children[0].text;
                    post.url = scrape.children[0].children[0].children[0].href;
                    post.author = scrape.children[1].children[0].innerText;
                    post.avatar = scrape.children[1].children[0].firstElementChild.currentSrc;
                    post.views = scrape.children[1].children[1].children[1].textContent;
                    data.push(post);
                })

                this.setState({ wavookData: data, isLoading: false })

        }).catch( error => this.setState({ error, isLoading: false }))

    }
}
