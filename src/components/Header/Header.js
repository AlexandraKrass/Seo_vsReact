import React from 'react';
import styled from 'styled-components';

import Logo from './Logo/Logo';
import User from './User/User';
import Nav from './Navigation/Nav'

const StyleHeader = styled.header`
    background-color: #000;
    position: relative;
    height: 44px;
    font-size: 16px;
    font-family: "IBMPlexSans-Regular", Helvetica, Arial, Verdana, Sans-serif;
    line-height: 16px;
`;

  export default class Header extends React.Component {

    state = {
        showList: false,
    };
      
    dropDownList = () => {
        const doesShow = this.state.showList;
        this.setState({ showList: !doesShow } );
    }

    render() {
        return (
            <StyleHeader>
                <Logo />
                <Nav />
                <User showNameUser = {true} userImg = {'userv1'}/>
            </StyleHeader>
        )   
    }
 }
