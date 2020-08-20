import styled, { css } from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import sizes from '../../sizes';

export const Menu = styled.header`
  position: absolute;
  width: 100vw;
  height: 60px;
  top: 0;
  z-index: 10;
  ${[sizes.up('md')]} {
    height: 76px;
  }
  ${[sizes.up('xl')]} {
    height: 86px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(RouterLink)`
  font-size: 28px;
  font-weight: 600;
  font-family: sans-serif;
  ${[sizes.up('sm')]} {
    margin-right: 30px;
  }
  ${[sizes.up('md')]} {
    margin-right: 50px;
  }
  ${[sizes.up('lg')]} {
    font-size: 32px;
    margin-right: 70px;
  }
  ${[sizes.up('xl')]} {
    margin-right: 98px;
  }
`;

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  font-size: 12px;
  & + & {
    margin-left: 20px;
  }
  ${[sizes.up('md')]} {
    font-size: 14px;
    & + & {
      margin-left: 32px;
    }
  }
  ${[sizes.up('lg')]} {
    font-size: 16px;
  }
  ${[sizes.up('xl')]} {
    font-size: 18px;
    line-height: 20px;
    & + & {
      margin-left: 40px;
    }
  }
`;

export const Search = styled.img`
  width: 20px;
  height: 22px;
  margin-right: 12px;
`;

export const Span = styled.span`
  ${[sizes.down('md')]} {
    display: none;
  }
`;

const button = css`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-size: 12px;
  font-family: sans-serif;
  padding: 0 12px;
  border-radius: 4px;
  transition: opacity linear 0.1s;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  ${[sizes.up('md')]} {
    height: 32px;
    font-size: 14px;
    padding: 0 16px;
  }
  ${[sizes.up('xl')]} {
    height: 36px;
    font-size: 16px;
    padding: 0 24px;
    border-radius: 8px;
  }
`;

export const SignIn = styled(RouterLink)`
  background: #565c67;
  margin-right: 8px;
  ${button}
  ${[sizes.up('md')]} {
    margin-right: 12px;
  }
  ${[sizes.up('lg')]} {
    margin-right: 16px;
  }
  ${[sizes.up('xl')]} {
    margin-right: 24px;
  }
`;

export const SignUp = styled(RouterLink)`
  background: #feb52b;
  color: #111113;
  ${button}
`;

const navigation = css`
  position: absolute;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0 24px 0 16px;
  ${[sizes.up('sm')]} {
    padding: 0 24px;
  }
  ${[sizes.up('md')]} {
    padding: 0 60px;
  }
  ${[sizes.up('lg')]} {
    padding: 0 70px;
  }
  ${[sizes.up('xl')]} {
    padding: 0 100px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  ${navigation}
  ${[sizes.up('sm')]} {
    display: none;
  }
`;

export const DesktopNav = styled.div`
  display: none;
  ${navigation}
  ${[sizes.up('sm')]} {
    display: flex;
  }
`;

export const Burger = styled.div`
  cursor: pointer;
  margin-left: 24px;
  align-self: center;
  -ms-grid-row-align: center;
  ${[sizes.up('sm')]} {
    margin-left: 40px;
  }
`;

export const Line = styled.div`
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 3px;
  & + & {
    margin-top: 5px;
  }
`;
