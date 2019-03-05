import React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import User from './User/User';
import Navigation from './Navigation/Navigation';

const StyleHeader = styled.header`
    background-color: #152935;
    display: block;
    position: relative;
    height: 50px;
    font-size: 16px;
    font-family: "IBMPlexSans-Regular", Helvetica, Arial, Verdana, Sans-serif;
    line-height: 20px;
   
`;

export default class Header extends React.Component {
    render() {
        return (
            <StyleHeader>
                <Logo />
                <Navigation />
                <User userImg = {'userv2'}/> 
            </StyleHeader>
        )   
    }
 }