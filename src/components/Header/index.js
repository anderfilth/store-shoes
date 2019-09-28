import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';

import * as CartActions from '../../store/modules/cart/actions';

import { Container, Cart, Bagde } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.products.reduce((totalSum, product) => {
      return totalSum + product.amount;
    }, 0)
  );

  const dispatch = useDispatch();
  function toggleCart() {
    dispatch(CartActions.toggleShowCart(true));
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Storeshoes" />
      </Link>

      <Cart onClick={() => toggleCart()}>
        <MdShoppingBasket size={40} color="#333" />
        <Bagde>{cartSize}</Bagde>
      </Cart>
    </Container>
  );
}
