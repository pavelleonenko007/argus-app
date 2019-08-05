import React from 'react';
import playarrow from '../../../img/play-arrow.svg';
import dontknow from '../../../img/90782.jpg';

function SlideItem(props) {
    return (
        <div className="w-slide">
            <div className="div-in-slide">
                <div className="col-in-slider _1 w-clearfix">
                    <div className="h2 slider-h">{props.title}</div>
                    <div className="p-class">{props.desc}</div>
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
                <div className="col-in-slider _4-img">
                    <div className="div-block-32">
                        <div className="_4-imgis">
                            <img src={dontknow} alt="" className="glitch__img" />
                            <img src={dontknow} alt="" className="glitch__img" />
                            <img src={dontknow} alt="" className="glitch__img" />
                            <img src={dontknow} alt="" className="glitch__img" />
                            <img src={dontknow} alt="" className="glitch__img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlideItem;