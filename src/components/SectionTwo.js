import React, { Component } from 'react';
import axios from 'axios';

export class SectionTwo extends Component {
    state = {
        content: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/pages/2')
            .then(res => this.setState({
                content: res.data.content.rendered,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper paddings">
                        <div className="small-h">приветствие</div>
                        <blockquote dangerouslySetInnerHTML={{ __html: this.state.content }}></blockquote>
                    </div>
                    <div className="fon-green">
                    </div>
                    <div className="fon-greeer">
                    </div>
                    <div className="vertical-line _50">
                    </div>
                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SectionTwo