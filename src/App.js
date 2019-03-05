import React from 'react';
import styled from 'styled-components';
import image from './home-activities.png'

import Header from './components/Header/Header';

const H1Text= styled.h1`
    text-align: left;
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
`
const Button= styled.button`
    background-color: purple;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;
    position:relative;
`

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Header />
          <H1Text> Slimline Banner Test </H1Text>
          <img src={image} alt='Children'/>
          <Button> CONTINUE </Button>
      </React.Fragment>
    );
  }
}

export default App;