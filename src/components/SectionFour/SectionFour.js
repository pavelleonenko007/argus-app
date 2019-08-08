import React, { Component } from 'react';
import axios from 'axios';
import playarrow from '../../img/play-arrow.svg';
import ImageForFour from './ImageForFour/ImageForFour';

export class SectionFour extends Component {
    state = {
        service: [],
        isLoaded: false
    }

    
    componentDidMount() {
        axios.get('http://a0325522.xsph.ru/wp-json/wp/v2/services?services_cat=3')
            .then(res => this.setState({
                service: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    render() {
        const { service, isLoaded } = this.state;
        if (isLoaded) {
            return (
                <div className="section">
                    <div className="wrapper">
                        <div className="row-3x w-row">
                            <div data-w-id="1c787311-19c1-b63f-a17d-e59fbdcbfb8e" className="col-3x left _4-img w-col w-col-6">
                                <div data-w-id="e6fd66f0-e564-714d-18de-531c8d39e954" className="_4-imgis">
                                    <ImageForFour image={ service[0].featured_media } />
                                    <ImageForFour image={ service[0].featured_media } />
                                    <ImageForFour image={ service[0].featured_media } />
                                    <ImageForFour image={ service[0].featured_media } />
                                    <ImageForFour image={ service[0].featured_media } />
                                </div>
                                <div className="line-gens">
                                    <div className="green-line">
                                    </div>
                                    <div className="green-line">
                                    </div>
                                    <div className="green-line">
                                    </div>
                                </div>
                            </div>
                            <div className="col-3x left w-clearfix w-col w-col-6">
                                <div className="small-h">услуги</div>
                                <h2>{ service[0].title.rendered }</h2>
                                <div className="pclass" dangerouslySetInnerHTML={{ __html: service[0].content.rendered }}></div>
                                <a href="#" className="link w-inline-block" data-ix="line-arrow">
                                    <div>Узнать подробнее</div>
                                    <div className="before-txt-link">
                                        <div className="fon-arrow">
                                            <img src={playarrow} alt="" className="arrow-line" />
                                            <div className="line-arrow">
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="vertical-line">
                        </div>
                        <div className="vertical-line-25">
                        </div>
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

export default SectionFour
