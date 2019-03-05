import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header.v2';

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

class Slimline2 extends React.Component {
  render() {
    return (
      <React.Fragment>
          <Header />
          <H1Text> Slimline Banner Test </H1Text>
      </React.Fragment>
    );
  }
}

export default Slimline2;