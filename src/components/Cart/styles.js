import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  height: 100%;
  background: #1b1a20;
  position: fixed;
  z-index: 1;
  top: 0;
  right: ${props => (props.isOpen ? '0' : '-850px')};
  overflow-x: hidden;
  width: 100%;
  max-width: 700px;
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    text-decoration: none;
    margin: 30px 0;
    div {
      display: flex;
      position: relative;
      align-items: center;
      margin-right: 25px;
    }
    h1 {
      color: #fff;
      text-transform: uppercase;
    }
  }
  footer {
    margin-top: 30px;
    button {
      background: #000;
      color: #fff;
      border: 0;
      width: 100%;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.2s;
      &:hover {
        background: #111;
        color: #ddd;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;
  margin: 15px 0;
  border-collapse: collapse;
  tbody tr {
    border-top: 2px #000 solid;
    border-bottom: 2px #000 solid;
  }
  tbody td {
    padding: 12px;
  }
  img {
    height: 100px;
  }
  strong {
    color: #fff;
    display: block;
  }
  span {
    display: block;
    margin-top: 5px;
    color: #999;
  }
  div {
    display: flex;
    align-items: center;
    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const CellTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end !important;
  strong {
    font-size: 1.2em;
    color: #ebbe00;
    margin-left: 5px;
  }
`;

export const EmptyProduct = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px #000 solid;
  border-bottom: 2px #000 solid;
  padding: 30px;
  margin: 15px 0;
  border-radius: 4px;
  p {
    color: #fff;
    font-size: 1.2em;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  span {
    color: #999;
    font-weight: bold;
  }
  strong {
    font-size: 28px;
    color: #ebbe00;
    margin-left: 5px;
  }
`;

export const Bagde = styled.span`
  background-color: #ebbe00;
  color: #333;
  font-size: 0.8em;
  font-weight: 700;
  height: 1.8em;
  line-height: 1.9;
  position: absolute;
  text-align: center;
  width: 1.8em;
  border-radius: 50%;
  right: -10%;
  bottom: -10%;
`;
