import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
`;

export const Cart = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;
  position: relative;
  background: none;
  border: 0;
  &:hover {
    opacity: 0.7;
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
