
import React from 'react';
import styled from 'styled-components';
import { YlList, YlListAtr } from './Stylish';

const YlListv1 = styled(YlList)`
    border: 1px solid;
    top: 44px;
    left: 10px;
    padding: 6px 0;
`

const YlNavBtn = styled.button `
    display: block;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    background-color: transparent;
    border-radius: 70%;  
    position: absolute;
    left: 150px;
`;

 class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showList: false};

        this.dropDownList = this.dropDownList.bind(this);
      }
      
    dropDownList = () => {
        const doesShow = this.state.showList;
        this.setState({ showList: !doesShow } );
    }

    render() {
        return (
                <YlNavBtn  onClick={this.dropDownList}>
                    { this.state.showList ?                     
                    <YlListv1 >
                         <li><YlListAtr href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/W9cb78c8d154d_4e5b_83e1_5ab7e90f8a87/page/Learning" target="_blank" rel="noopener  noreferrer">Agile Academy Learning</YlListAtr></li>
                         <li><YlListAtr href="https://bigdatauniversity.com/" target="_blank" rel="noopener noreferrer">Big Data University</YlListAtr></li>
                         <li><YlListAtr href="https://w3-connections.ibm.com/wikis/home?lang=en-us#!/wiki/Language%20Learning%20Portfolio/page/Business%20English" target="_blank" rel="noopener  noreferrer">English Skills</YlListAtr></li>
                         <li><YlListAtr href="http://learn.atlanta.ibm.com/la/pages/hbr.html" target="_blank" rel="noopener noreferrer">Harvard Business Articles</YlListAtr></li>
                         <li><YlListAtr href="https://w3.ibm.com/hr/careersmart/html/home.html" target="_blank" rel="noopener noreferrer">IBM CareerSmart</YlListAtr></li>
                         <li><YlListAtr href="https://yourlearning.ibm.com/#programs-resources/jobrole" target="_blank" rel="noopener noreferrer">Job Roles</YlListAtr></li>
                         <li><YlListAtr href="http://learn.atlanta.ibm.com/cmp/" target="_blank" rel="noopener noreferrer" >Client Management Professions</YlListAtr></li>
                         <li><YlListAtr href="http://developer-academy.w3ibm.mybluemix.net/" target="_blank" rel="noopener noreferrer" >Developer Academy</YlListAtr></li>
                         <li><YlListAtr href="http://gts-learn.w3bmix.ibm.com/#/learning/home" target="_blank" rel="noopener noreferrer" >GTS Expertise Edvisor</YlListAtr></li>
                         <li><YlListAtr href="https://w3.ibm.com/services/practitionerportal" target="_blank" rel="noopener noreferrer" >Lighthouse for Consultants</YlListAtr></li>
                         <li><YlListAtr href="http://calmedia.atlanta.ibm.com/om_academy/" target="_blank" rel="noopener noreferrer" >Offering Manager</YlListAtr></li>
                         <li><YlListAtr href="https://learning.atlanta.ibm.com/hr/pe.nsf/pages/app#/home" target="_blank" rel="noopener noreferrer" >PE Offerings</YlListAtr></li>
                         <li><YlListAtr href="http://university.atlanta.ibm.com/pm/" target="_blank" rel="noopener noreferrer" >PM University</YlListAtr></li>
                         <li><YlListAtr href="https://learn.atlanta.ibm.com/la/" target="_blank" rel="noopener noreferrer">Leadership Academy</YlListAtr></li>
                         <li><YlListAtr href="https://yourlearning.w3bmix.ibm.com/#programs-resources/featured" target="_blank" rel="noopener noreferrer">Learning Resources</YlListAtr></li>
                         <li><YlListAtr href="https://new2blue.w3bmix.ibm.com/enroll-now" target="_blank" rel="noopener noreferrer">New2Blue</YlListAtr></li>
                         <li><YlListAtr href="https://whitewater.ibm.com/links/safari-for-ibm" target="_blank" rel="noopener noreferrer">Safari Online Pilot</YlListAtr></li>
                         <li><YlListAtr href="https://learning.atlanta.ibm.com/sales/learning.nsf/pages/welcome" target="_blank" rel="noopener noreferrer">Sales and Industry Learning</YlListAtr></li>
                         <li><YlListAtr href="https://superzero.w3ibm.mybluemix.net" target="_blank" rel="noopener noreferrer">SuperZero Learning Help</YlListAtr></li>
                         <li><YlListAtr href="https://w3.ibm.com/ibm/thinkacademy/" target="_blank" rel="noopener noreferrer">THINK Academy</YlListAtr></li>
                         <li><YlListAtr href="https://tle.w3bmix.ibm.com/" target="_blank" rel="noopener noreferrer">TLE</YlListAtr></li>
                         <li><YlListAtr href="https://www.watson-academy.info/" target="_blank" rel="noopener noreferrer">Watson Academy</YlListAtr></li>           
                         <li><YlListAtr href="https://www.watson-academy.info/" target="_blank" rel="noopener noreferrer">Watson Academy</YlListAtr></li>           
                       </YlListv1> 
                   : null } 
                </YlNavBtn>
        )   
    }
 }
 export default Nav;