import styled, { css } from 'styled-components';
import sizes from '../sizes';

export interface FadeEffectTypes {
  fade: boolean;
}

const fadeIn = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const fadeEffect = css<FadeEffectTypes>`
  ${fadeIn}
  ${({ fade }) => (fade ? `animation: fadein 1s;` : `visibility: hidden;`)}
`;

export const Slider = styled.div`
  width: 100%;
  height: 120vw;
  position: relative;
  margin-bottom: 16px;
  overflow: hidden;
  ${[sizes.up('sm')]} {
    height: 50vw;
    margin-bottom: -31px;
  }
  ${[sizes.up('md')]} {
    margin-bottom: -118px;
  }
  ${[sizes.up('lg')]} {
    margin-bottom: -90px;
  }
  ${[sizes.up('xl')]} {
    margin-bottom: -136px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Picture = styled.picture`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  ${fadeEffect}
`;

export const Background = styled.img`
  width: 100%;
  display: block;
`;

export const Content = styled.div`
  width: 100%;
  bottom: 26px;
  padding: 0 16px;
  position: absolute;
  box-sizing: border-box;
  z-index: 3;
  ${[sizes.up('sm')]} {
    bottom: 95px;
    padding: 0 24px;
  }
  ${[sizes.up('md')]} {
    bottom: 194px;
    padding: 0 60px;
  }
  ${[sizes.up('lg')]} {
    bottom: 174px;
    padding: 0 80px;
  }
  ${[sizes.up('xl')]} {
    bottom: 240px;
    padding: 0 100px;
  }
`;

export const Title = styled.span<FadeEffectTypes>`
  font-size: 28px;
  line-height: 28px;
  font-family: sans-serif;
  ${fadeEffect}
  ${[sizes.up('sm')]} {
    font-size: 36px;
    line-height: 36px;
  }
  ${[sizes.up('lg')]} {
    font-size: 48px;
    line-height: 48px;
  }
`;

export const Quote = styled.div`
  width: 100%;
  margin-top: 16px;
  line-height: normal;
  ${fadeEffect}
  ${[sizes.up('sm')]} {
    width: 350px;
    margin-top: 8px;
    font-size: 12px;
  }
  ${[sizes.up('md')]} {
    width: 410px;
    margin-top: 16px;
    font-size: 14px;
    line-height: 16px;
  }
  ${[sizes.up('lg')]} {
    width: 460px;
    font-size: 16px;
  }
  ${[sizes.up('xl')]} {
    width: 520px;
    font-size: 18px;
    margin-top: 24px;
  }
`;

export const Buttons = styled.div`
  height: 32px;
  display: flex;
  margin-top: 16px;
  ${[sizes.up('md')]} {
    height: 36px;
  }
  ${[sizes.up('lg')]} {
    height: 40px;
  }
  ${[sizes.up('xl')]} {
    margin-top: 24px;
    height: 48px;
  }
`;

export const Play = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: rgba(86, 92, 103, 0.4);
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background: rgba(86, 92, 103, 0.8);
  }
  img {
    height: 14px;
    margin-right: 8px;
  }
  ${[sizes.up('sm')]} {
    width: 174px;
    border-radius: 4px;
    font-size: 12px;
  }
  ${[sizes.up('md')]} {
    width: 214px;
    font-size: 14px;
    img {
      height: 16px;
    }
  }
  ${[sizes.up('lg')]} {
    width: 242px;
    font-size: 16px;
    img {
      height: 18px;
    }
  }
  ${[sizes.up('xl')]} {
    width: 270px;
    height: 100%;
    font-size: 18px;
    img {
      height: 22px;
      margin-right: 16px;
    }
  }
`;

export const Next = styled.div`
  display: none;
  ${[sizes.up('sm')]} {
    width: 40px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
    border-radius: 4px;
    background: rgba(86, 92, 103, 0.25);
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background: rgba(86, 92, 103, 0.7);
    }
    img {
      height: 16px;
    }
  }
  ${[sizes.up('md')]} {
    width: 44px;
  }
  ${[sizes.up('lg')]} {
    width: 48px;
    img {
      height: 22px;
    }
  }
  ${[sizes.up('xl')]} {
    width: 56px;
    margin-left: 16px;
    border-radius: 8px;
    img {
      height: 26px;
    }
  }
`;

export const Shade = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 3%, #161616 98%);
  z-index: 2;
`;

export const Lines = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  box-sizing: border-box;
  bottom: 6px;
  padding: 0 16px;
  z-index: 2;
  ${[sizes.up('sm')]} {
    bottom: 71px;
    padding: 0 24px;
  }
  ${[sizes.up('md')]} {
    bottom: 150px;
    padding: 0 60px;
  }
  ${[sizes.up('lg')]} {
    bottom: 130px;
    padding: 0 80px;
  }
  ${[sizes.up('xl')]} {
    bottom: 196px;
    padding: 0 100px;
  }
`;

export const Line = styled.div<FadeEffectTypes>`
  height: 4px;
  position: relative;
  border-radius: 2px;
  width: calc(100% / 8);
  background: rgba(86, 92, 103, 0.4);
  ${fadeIn}
  ${({ fade }) =>
    fade &&
    `
    background: white;
    animation: fadein 1s;
  `}
  ${[sizes.up('sm')]} {
    border-radius: 8px;
  }
`;
