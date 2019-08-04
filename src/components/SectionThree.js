import React from 'react';
import playarrow from '../img/play-arrow.svg';
import subscription from '../img/subscription_monthly_m.jpg';

function SectionThree() {
    return(
        <div className="section">
        <div className="wrapper no-bottom-padding">
          <div className="row-3x w-row">
            <div className="col-3x left w-clearfix w-col w-col-6">
              <div className="small-h">услуги</div>
              <h2>Вступление в СРО</h2>
              <div className="pclass">Поможем в кратчайшие сроки и с минимальными затратами вступить в члены СРО и получить выписку о членстве. На протяжении всего членства в СРО мы предоставим Вам информационную и консультационную поддержку. Наши специалисты подготовят все необходимые документы и позаботятся обо всех нюансах Вашей вступления и членства в СРО.</div>
              <a href="/sro" className="link w-inline-block" data-ix="line-arrow">
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
            <div data-w-id="993aea3e-9b8b-d73b-c149-126b2f39bdad" className="col-3x right _4-img-right w-col w-col-6">
              <div className="_4-imgis">
                <img src={subscription} alt="" className="glitch__img" />
                <img src={subscription} alt="" className="glitch__img" />
                <img src={subscription} alt="" className="glitch__img" />
                <img src={subscription} alt="" className="glitch__img" />
                <img src={subscription} alt="" className="glitch__img" />
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
          </div>
          <div className="vertical-line">
          </div>
          <div className="vertical-line-25">
          </div>
          <div className="news w-clearfix">
            <div className="card-news w-clearfix">
              <h3>СРО стройка</h3>
              <div className="pclass">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
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
            <div className="card-news w-clearfix">
              <h3>СРО проектировщиков</h3>
              <div className="pclass">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
              <a href="/sro-project" className="link w-inline-block" data-ix="line-arrow">
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
            <div className="card-news w-clearfix">
              <h3>СРО изыскателей</h3>
              <div className="pclass">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
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
            <div className="card-news w-clearfix">
              <h3>СРО энергетиков</h3>
              <div className="pclass">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
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
        </div>
        <div className="fon-greeer">
        </div>
        <div className="vertical-line _50">
        </div>
      </div>
    );
}

export default SectionThree;