import React from 'react';
import { connect } from 'react-redux';
//styles
import img from '../../../assets/yl-mark.svg';
import styled from 'styled-components';

const YlLogo = styled.a `
    position: relative;
    display: block;
    float: left;
    width: 146px;
    height: 44px;
    background-repeat: no-repeat;
    background-position: 0 0;
    text-decoration: none;
    color: #fff;
`
  
const YlLogoText = styled.span`
    position: absolute;
    display: block;
    top: 12px;
    left: 45px;
`

class Logo extends React.Component{
    render () {
        return (
            <React.Fragment>
                <YlLogo href={this.props.domainYl} target="_blank" rel="noopener noreferrer">
                    <img alt='logotype' src={img}/>
                    <YlLogoText>Your Learning</YlLogoText>
                </YlLogo>
            </React.Fragment>
        )}
}

const mapStateToProps = state => {
    return {
        domainYl: state.configInfo["DOMAIN_YL"]
    };
};

export default connect(mapStateToProps)(Logo);