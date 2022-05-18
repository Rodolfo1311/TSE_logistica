import React from 'react';
import "./mapa.css"
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Mapa = (props)=>{
    console.log(props)
    return(

        <div style={{backgroundColor: "red", height: "1000px" ,marginLeft: "50px", width: "70%" , display: "flex", justifyContent: "center", border: "1px solid black"}}>
            <Map
                google ={props.google}
                style = {{width: '50%', height: '70%', display: "flex"}}
                zoom = {19}
                initialCenter = {
                    {
                        lat:14.621436724405207,
                        lng: -90.55012628706181
                    }
                }
            />
        </div>
    )
}

export default GoogleApiWrapper ({
    apiKey: "AIzaSyB-RhklFOwT4P9EVEt4wcvILLpEBJ1uTq8"
})(Mapa)
