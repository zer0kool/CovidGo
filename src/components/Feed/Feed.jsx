import React, { Component } from "react";

import "./Feed.css"

//  using proxy to bypass cors
const proxy = "https://cors-anywhere.herokuapp.com/";
const Endpoint = "https://www.worldometers.info/coronavirus/";

export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedData: [],
            isLoading: false,
            error: null
        };
    }

    render() {
        const { feedData, isLoading, error } = this.state;

        if ( !feedData ){ return <p className="white-text"> No FeedData...</p>;}
        if ( isLoading ){ var fetching = <p className="white-text"> Loading FeedData...</p>;}
        if ( error ){ return <p className="white-text"> {error.message} </p>;}

        return (
            <div className="Feed blue-grey darken-4">
                <aside id="right-sidebar-nav" className="sideFeed">
                   <div className="navtop">
                     <a className="right waves-effect waves-light navbtn sidenav-close">close</a>
                     <h3 className="menutitle">Feed</h3>
                   </div>
                <ul className="collection">
                    {fetching}
                     {feedData.map(function(source, index){
                        return ( <li key={index} className="collection-item blue-grey darken-4 waves-effect">
                            <a href={source.source}>{source.info}</a>
                        </li> )
                    })}
                 </ul>
                </aside>
            </div>
        );
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        console.log("loading feed Component")
        let self = this
        let dataParsed = [];
        let parser = new DOMParser();
        fetch(proxy+Endpoint)
            .then(response => response.text())
            .then(function (html){
                try {
                    var htmlDom = parser.parseFromString(html, "text/html");
                    var todayDate = new Date().toISOString().slice(0,10);
                    var htmlFeed = htmlDom.querySelectorAll(`#newsdate${todayDate} .news_post .news_li`);
                    console.log(htmlFeed)
                    htmlFeed.forEach( scrape => {
                        let article = { info:"", source:""};
                        article.info = scrape.innerText;
                        article.source = scrape.lastChild.children[0].href

                        dataParsed.push(article);
                    })

                }catch (error) {console.log(`Error inside the parsing function: ${error}`)}
            self.setState({feedData: dataParsed, isLoading: false })

        }).catch( error => this.setState({ error, isLoading: false }))
        console.log("Feed conponent finished")
    }

}
