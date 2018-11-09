import React, { Component } from 'react';

class Api extends Component {

    getSeasonsList() {
        fetch('https://api.pubg.com/shards/steam/seasons',{
            mode: 'cors',
            method: 'get',
            headers: {
                "Accept": "application/vnd.api+json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3NGI2ZmYxMC0xOGQzLTAxMzYtNjU2ZC00ZDI4ZmVkOTQyNTUiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyNjk0NTIxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6InB1YmdjaGFydHMifQ.fYkNMhzh9pRqi7RrIzkpaZNk3ya8A-dIZaBvhO6xw-Q"    
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(" responseJson : " + JSON.stringify(responseJson));
           for(let season of responseJson.data) {
               console.log("ID: ", season.id);
               if(season.attributes && season.attributes.isCurrentSeason == true) {
                   console.log(" ^ current season");
               }
           }
          })
          .catch((error) => {
            alert("Error : " +error);
          });
    }
}

export default Api;