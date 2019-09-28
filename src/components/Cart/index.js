import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdClose,
  MdShoppingBasket,
} from 'react-icons/md';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductTable,
  Total,
  Bagde,
  EmptyProduct,
  CellTotal,
} from './styles';

export default function Cart() {
  const isOpen = useSelector(state => state.cart.isOpen);

  const total = useSelector(state =>
    formatPrice(
      state.cart.products.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const installmentAmount = useSelector(state => {
    return state.cart.products.reduce((greaterInstallment, product) => {
      return Math.max(greaterInstallment, product.installments);
    }, 0);
  });

  const installmentValueTotal = useSelector(state =>
    formatPrice(
      state.cart.products.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0) / installmentAmount
    )
  );

  const cart = useSelector(state =>
    state.cart.products.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function toggleCart() {
    dispatch(CartActions.toggleShowCart(false));
  }

  const cartSize = useSelector(state =>
    state.cart.products.reduce((totalSum, product) => {
      return totalSum + product.amount;
    }, 0)
  );

  return (
    <Container isOpen={isOpen}>
      <div>
        <button type="button" onClick={() => toggleCart()}>
          <MdClose size={20} color="#fff" />
        </button>
      </div>
      <header>
        <div>
          <MdShoppingBasket size={40} color="#fff" />
          <Bagde>{cartSize}</Bagde>
        </div>
        <h1>Sacola</h1>
      </header>
      {cart.length === 0 && (
        <EmptyProduct>
          <p>O carrinho está vazio</p>
        </EmptyProduct>
      )}
      {cart.length > 0 && (
        <ProductTable>
          <tbody>
            {cart.map(product => (
              <tr>
                <td>
                  <img src={product.image} alt={product.title} />
                </td>
                <td>
                  <strong>{product.title}</strong>
                  <span>{product.style}</span>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrement(product)}>
                      <MdRemoveCircleOutline size={20} color="#fff" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => increment(product)}>
                      <MdAddCircleOutline size={20} color="#fff" />
                    </button>
                  </div>
                </td>
                <td>
                  <CellTotal>
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }
                      >
                        <MdClose size={20} color="#fff" />
                      </button>
                    </div>
                    <div>
                      <strong>{product.subtotal}</strong>
                    </div>
                  </CellTotal>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
      )}

      <Total>
        <span>TOTAL</span>
        <div>
          <strong>{total}</strong>
          {installmentAmount > 0 && (
            <span>
              Ou {installmentAmount} x de {installmentValueTotal}
            </span>
          )}
        </div>
      </Total>
      <footer>
        <button type="button">Comprar</button>
      </footer>
    </Container>
  );
}
