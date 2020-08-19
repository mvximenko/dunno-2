import React, { useState, useEffect } from 'react';
import PlayIcon from '../assets/play.svg';
import NextIcon from '../assets/next.svg';
import { URL, titles } from '../config';
import {
  Background,
  Picture,
  Quote,
  Title,
  Buttons,
  Play,
  Next,
  Content,
  Shade,
  Slider,
  Wrapper,
} from './HomeStyles';

const Home = () => {
  const [num, setNumber] = useState(0);
  const { title, quote, endpoint } = titles[num];

  return (
    <Slider>
      <Wrapper>
        <Picture>
          <source
            media='(max-width: 767px) and (orientation: portrait)'
            srcSet={`${URL}320x384/${endpoint}, ${URL}640x768/${endpoint} 2x`}
          />
          <source
            media='(max-width: 767px) and (orientation: landscape)'
            srcSet={`${URL}720x873/${endpoint}, ${URL}1440x1746/${endpoint} 2x`}
          />
          <source
            media='(max-width: 1023px) and (min-width: 768px)'
            srcSet={`${URL}768x384/${endpoint}, ${URL}1536x768/${endpoint} 2x`}
          />
          <source
            media='(max-width: 1365px) and (min-width: 1024px)'
            srcSet={`${URL}1024x512/${endpoint}, ${URL}2048x1024/${endpoint} 2x`}
          />
          <source
            media='(max-width: 1439px) and (min-width: 1366px)'
            srcSet={`${URL}1366x683/${endpoint}, ${URL}2560x1280/${endpoint} 2x`}
          />
          <source
            media='(max-width: 1919px) and (min-width: 1440px)'
            srcSet={`${URL}1920x960/${endpoint}, ${URL}2560x1280/${endpoint} 2x`}
          />
          <source
            media='(min-width: 1920px)'
            srcSet={`${URL}1920x960/${endpoint}, ${URL}2560x1280/${endpoint} 2x`}
          />
          <Background src={`${URL}1920x960/${endpoint}`} alt={title} />
        </Picture>
        <Content>
          <Title to='/'>{title}</Title>
          <Quote>{quote}</Quote>
          <Buttons>
            <Play>
              <img src={PlayIcon} />
              Watch Trailer
            </Play>
            <Next>
              <img src={NextIcon} />
            </Next>
          </Buttons>
        </Content>
        <Shade></Shade>
      </Wrapper>
    </Slider>
  );
};

export default Home;
