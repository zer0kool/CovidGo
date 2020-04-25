import React, { Component } from "react";

import "./Feed.css"

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Feed:[]
        };
    }

    render() {
        return (
            <div className="Feed blue-grey darken-4">
                <aside id="right-sidebar-nav" className="sideFeed">
                   <div className="navtop">
                     <a className="right waves-effect waves-light navbtn sidenav-close">close</a>
                     <h3 className="menutitle">Feed</h3>
                   </div>
                <ul className="collection">
                     {this.state.Feed.map(function(source, index){
                        return ( <li key={index} className="collection-item blue-grey darken-4">{source}</li> )
                    })}
                 </ul>
                </aside>
            </div>
        );
    }

    fetchData = (url_api) =>{
        return new Promise( (resolve, reject) =>{
            let xHttp = new XMLHttpRequest();

            xHttp.open('POST', url_api, true ) //El true es para decir que se ejecute de forma asincrona
            xHttp.onreadystatechange = ( () =>{

                if(xHttp.readyState === 4){
                    //El 4 es para hacer referencia a los estados de la peticion, en este caso "Request finished, Response is ready"

                    (xHttp.status === 200)
                        ? resolve( xHttp.responseText )
                        : reject( new Error('Error Peticion Data', url_api) )
                }
            })

            xHttp.send();
        })

    }


    componentDidMount = async () =>{

        //  using proxy to bypass cors
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "https://www.worldometers.info/coronavirus/";
        try {
            const data = await this.fetchData(proxy+url);

            var covid = data;

            var parser = new DOMParser();
            var htmlDom = parser.parseFromString(data, "text/html");

            var todayDate = new Date().toISOString().slice(0,10);
            var htmlFeed = htmlDom.querySelectorAll(`#newsdate${todayDate} .news_post .news_li`);
//            console.log(htmlFeed)
            var dataFeed = []
//            console.log(dataFeed)
            htmlFeed.forEach( article => {
//                console.log(article)
                dataFeed.push(article.innerHTML);
            })

            this.setState({
                Feed:dataFeed
            })

        } catch (error) {
            console.log("Error Feed COMP: ",error)
        }
    }

}
