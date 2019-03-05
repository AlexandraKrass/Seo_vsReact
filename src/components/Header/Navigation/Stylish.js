import styled from 'styled-components';

export const YlList = styled.ul `
    list-style: none;
    margin: 0;
    display: block;
    background-color: #121212;
    font-size: 14px;
    position: absolute;
    z-index: 100;
    top: 50px;
    right: 0;
    width: 240px;
    padding: 10px 0;
`;

export const YlListAtr = styled.a `
    display: block;
    padding: 5px 12px;
    color: white;
    text-decoration: none;
    text-align: left;
 `

 export default { YlList, YlListAtr }