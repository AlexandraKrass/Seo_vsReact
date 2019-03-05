import React from 'react';
import { connect } from 'react-redux';
//styles
import styled from 'styled-components';

const YlUser = styled.div `
    top: 0;
    position: absolute;
    right: 0;
    height: 44px;
    background-color: #000;
    font-size: 16px;
    font-family: "IBMPlexSans-Regular", Helvetica, Arial, Verdana, Sans-serif;
    line-height: 16px;
    color: #fff;
`
  
const YlUserName = styled.span `
    display: block;
    float: left;
    top: 15px;
    height: 24px;
    padding: 0;
    position: relative;
    right: 60px;
`

const YlUserBlockPhoto = styled.span `
    position: absolute;
    right: 0;
    width: 50px;
    height: 50px;
`

const UserImgv1 = styled.img `
    display: block;
    width: 24px;
    height: 24px;
    margin: 10px;
    overflow: hidden;
    border-radius: 50%;
`

const UserImgv2 = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 28px;
    height: 28px;
    overflow: hidden;
    border-radius: 70%;
`

class User extends React.Component{
    render () {

        let letShow
        if (this.props.showNameUser === true) {
            letShow = <YlUserName> {this.props.name} {this.props.surname}  </YlUserName>  
        } else {
            letShow = null
        }
        //  проверка для фото "https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg"
        let userSlimline
        
            if(this.props.userImg === 'userv1') {
                userSlimline = <UserImgv1 src={this.props.profilePhoto} onError={(e)=>{e.target.onerror = null; e.target.src=this.props.defaultProfilePhoto}}/>
            }else if ( this.props.userImg === 'userv2') {
                userSlimline = <UserImgv2 src={this.props.profilePhoto} onError={(e)=>{e.target.onerror = null; e.target.src=this.props.defaultProfilePhoto}}/>
            }else {
                userSlimline = null
            }

      return (
        <React.Fragment >
            <YlUser>
                {letShow}
                    <YlUserBlockPhoto>
                        {userSlimline}
                    </YlUserBlockPhoto>
            </YlUser>
        </React.Fragment>
    )}
}

const mapStateToProps = state => {
    return {
        name: state.userInfo.firstName,
        surname: state.userInfo.lastName,
        profilePhoto: state.configInfo["PROFILE_PHOTO_URL_INTERNAL"],
        defaultProfilePhoto: state.configInfo["DEFAULT_PROFILE_PHOTO"]
    };
};

export default connect(mapStateToProps) (User);