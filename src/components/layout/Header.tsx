import React from 'react';
import SearchIcon from '../../assets/search.svg';
import {
  Menu,
  DesktopNav,
  Wrapper,
  Logo,
  Link,
  Search,
  Span,
  SignIn,
  SignUp,
  Nav,
  Burger,
  Line,
} from './HeaderStyles';

const Header = () => (
  <Menu>
    <DesktopNav>
      <Wrapper>
        <Logo to='/'>dunno</Logo>
        <Link to='/series'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/my-list'>My List</Link>
        <Link to='/search'>
          <Search src={SearchIcon} />
          <Span>Search</Span>
        </Link>
      </Wrapper>
      <Wrapper>
        <SignIn to='/signin'>Sign In</SignIn>
        <SignUp to='/signup'>Sign Up</SignUp>
      </Wrapper>
    </DesktopNav>

    <Nav>
      <Logo to='/'>dunno</Logo>
      <Wrapper>
        <Link to='/search'>
          <Search src={SearchIcon} />
        </Link>
        <Burger>
          <Line></Line>
          <Line></Line>
          <Line></Line>
        </Burger>
      </Wrapper>
    </Nav>
  </Menu>
);

export default Header;
