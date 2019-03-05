import React from 'react';
import styled from 'styled-components';

import list from '../../../assets/menu-icon.svg';
import search from '../../../assets/search.svg';
import { YlList, YlListAtr } from './Stylish';

const YlListBtn = styled.button `
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    padding: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 50px;
`
const YLSearch = styled.a `
    display: block;
    float: left;
    width: 50px;
    height: 50px;
    padding: 0;
    position: absolute;
    right: 100px;
`

const YlListImg = styled.img `
    width: 25px;
    height: 25px;
`

const YlZoom = styled.img `
    position: absolute;
    top: 25%;
    left: 25%;
    width: 25px;
    height: 25px;
`

export default class Navigation extends React.Component {
    state = {
        showList: false,
    };
      
    dropDownList = () => {
        const doesShow = this.state.showList;
        this.setState({ showList: !doesShow } );
    }

    render() {
        return (
        <React.Fragment>
            <YlListBtn onClick={this.dropDownList}>
                <YlListImg alt='menu' src={list}/>
                { this.state.showList ? 
                    <YlList>
                        <li><YlListAtr href="https://test.yourlearning.ibm.com#home/queue" target="_blank" rel="noopener noreferrer">Your Learning Home</YlListAtr></li>
                        <li><YlListAtr href="https://test.yourlearning.ibm.com#learning/queue" target="_blank" rel="noopener noreferrer">Your Learning</YlListAtr></li>
                        <li><YlListAtr href="https://test.yourlearning.ibm.com#channels" target="_blank" rel="noopener noreferrer">Your Channels</YlListAtr></li>
                        <li><YlListAtr href="https://test.yourlearning.ibm.com#badges" target="_blank" rel="noopener noreferrer">Your Badges</YlListAtr></li>
                        <li><YlListAtr href="https://test.yourlearning.ibm.com#programs-resources" target="_blank" rel="noopener noreferrer">Programs &amp; Resources</YlListAtr></li>
                        <li><YlListAtr href="https://test.yourlearning.ibm.com#roles-skills" target="_blank" rel="noopener noreferrer">Hot Roles &amp; Skills</YlListAtr></li>
                        <li><YlListAtr href="https://ec.w3bmix.ibm.com/" target="_blank" rel="noopener noreferrer">Event Central Home</YlListAtr></li>
                        <li><YlListAtr href="https://ec.w3bmix.ibm.com/manage.html" target="_blank" rel="noopener noreferrer">Create &amp; Manage Events</YlListAtr></li>
                        <li><YlListAtr href="https://ec.w3bmix.ibm.com/find.html" target="_blank" rel="noopener noreferrer">Find &amp; View Events</YlListAtr></li>
                        <li><YlListAtr href="https://learninghelp.atlanta.ibm.com/SuperZERO/eventc/index.html" target="_blank" rel="noopener noreferrer">Help</YlListAtr></li>
                    </YlList> 
                : null }
            </YlListBtn>
            <YLSearch href="https://test.yourlearning.ibm.com/#search" target="_blank" rel="noopener noreferrer">
                <YlZoom alt='zoom' src={search}/>
            </YLSearch>
        </React.Fragment>
    )}
}