import React, { Component } from "react";
//COMPONENTS
import Container from "../../components/Container";
import Iframe from 'react-iframe';
import "../Acting/style.css";
import { importNamespaceSpecifier } from "@babel/types";

class Acting extends Component {
    state = {
    }

    render() {
        return (
            <Container>
                <h1>Actor - Demo Reel</h1>
                {/* <p><a href="https://vimeo.com/228125963">Kyle Merryman - Demo Reel</a> from <a href="https://vimeo.com/kylemerryman">Kyle Merryman</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */}
                {/* <Iframe src="https://player.vimeo.com/video/228125963" style={{zIndex:'10'}} width="100%" height="auto" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></Iframe> */}
                {/* <Iframe src="https://www.youtube.com/watch?v=hII2oU4pRwM" /> */}
                <div padding="56.25% 0 0 0" position="relative">
                    <iframe src="https://player.vimeo.com/video/228125963" position="relative" top="0" left="0" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
            </Container>
        )
    }

}

export default Acting;