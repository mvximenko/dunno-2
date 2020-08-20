import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import PlayIcon from '../assets/play.svg';
import NextIcon from '../assets/next.svg';
import { URL, titles } from '../config';
import {
  Slider,
  Wrapper,
  Picture,
  Background,
  Content,
  Title,
  Quote,
  Buttons,
  Play,
  Next,
  Shade,
  Lines,
  Line,
} from './HomeStyles';

const Home = () => {
  const [state, setState] = useState({ slide: 0, loaded: false });
  const { slide, loaded } = state;
  const { title, quote, endpoint } = titles[slide];

  const nextTitle = useCallback(() => {
    slide === titles.length - 1
      ? setState({ slide: 0, loaded: false })
      : setState({ slide: slide + 1, loaded: false });
  }, [slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTitle();
    }, 8000);
    return () => clearInterval(interval);
  }, [slide, nextTitle]);

  return (
    <Slider>
      <Wrapper>
        <Picture fade={loaded} onLoad={() => setState({ slide, loaded: true })}>
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
          <Link to='/'>
            <Title fade={loaded}>{title}</Title>
          </Link>
          <Quote fade={loaded}>{quote}</Quote>
          <Buttons>
            <Play>
              <img src={PlayIcon} alt='Watch Trailer' />
              Watch Trailer
            </Play>
            <Next onClick={nextTitle}>
              <img src={NextIcon} alt='Next Slide' />
            </Next>
          </Buttons>
        </Content>
        <Shade></Shade>
      </Wrapper>
      <Lines>
        {titles.map((title, index) => (
          <Line key={index} fade={loaded && slide === index}></Line>
        ))}
      </Lines>
    </Slider>
  );
};

export default Home;
