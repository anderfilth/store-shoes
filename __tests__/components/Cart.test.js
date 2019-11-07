/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import CartComponent from '~/components/Cart';
// import * as CartActions from '~/store/modules/cart/actions';

jest.mock('react-redux');

describe('Test cart component - redux', () => {
  it('Deve testar a quantidade no header do componente', () => {
    useSelector.mockImplementation(cb =>
      cb({
        cart: {
          isOpen: false,
          products: [
            {
              id: 0,
              sku: 8552515751438644,
              title: 'Camisa Nike Corinthians I',
              description: '14/15 s/nº',
              availableSizes: ['S', 'G', 'GG', 'GGG'],
              style: 'Branco com listras pretas',
              price: 229.9,
              installments: 9,
              currencyId: 'BRL',
              currencyFormat: 'R$',
              isFreeShipping: true,
              amount: 2,
              image:
                'https://static.netshoes.com.br/produtos/camisa-corinthians-i-1920-sn-estadio-nike-masculina/28/HZM-1536-028/HZM-1536-028_detalhe1.jpg?resize=280:280',
            },
          ],
        },
      })
    );

    const { getByTestId } = render(<CartComponent />);

    expect(getByTestId('cart-header-badge')).toHaveTextContent('2');
  });

  it('Deve exibir carrinho vazio quando não tem itens', () => {
    useSelector.mockImplementation(cb =>
      cb({
        cart: {
          isOpen: false,
          products: [],
        },
      })
    );

    const { getByTestId, getByText } = render(<CartComponent />);

    expect(getByTestId('cart-article-empty-products')).toContainElement(
      getByText('O carrinho está vazio')
    );
  });

  it('Deve exibir os itens no carrinho', () => {
    useSelector.mockImplementation(cb =>
      cb({
        cart: {
          isOpen: false,
          products: [
            {
              id: 0,
              sku: 8552515751438644,
              title: 'Camisa Nike Corinthians I',
              description: '14/15 s/nº',
              availableSizes: ['S', 'G', 'GG', 'GGG'],
              style: 'Branco com listras pretas',
              price: 229.9,
              installments: 9,
              currencyId: 'BRL',
              currencyFormat: 'R$',
              isFreeShipping: true,
              amount: 2,
              priceFormatted: 'R$ 229.90',
              image:
                'https://static.netshoes.com.br/produtos/camisa-corinthians-i-1920-sn-estadio-nike-masculina/28/HZM-1536-028/HZM-1536-028_detalhe1.jpg?resize=280:280',
            },
          ],
        },
      })
    );

    const { getByTestId } = render(<CartComponent />);

    expect(getByTestId('cart-article-empty-products')).not.toHaveTextContent(
      'O carrinho está vazio'
    );

    const productTable = getByTestId('cart-article-product-table');

    expect(productTable).toHaveTextContent('Camisa Nike Corinthians I');
    expect(productTable).toHaveTextContent('Branco com listras pretas');
    expect(productTable).toHaveTextContent('R$ 229.90');
    expect(productTable).toHaveTextContent('R$459.80');
  });

  it('Deve testar o total no carrinho', () => {
    useSelector.mockImplementation(cb =>
      cb({
        cart: {
          isOpen: false,
          products: [
            {
              id: 0,
              sku: 8552515751438644,
              title: 'Camisa Nike Corinthians I',
              description: '14/15 s/nº',
              availableSizes: ['S', 'G', 'GG', 'GGG'],
              style: 'Branco com listras pretas',
              price: 229.9,
              installments: 9,
              currencyId: 'BRL',
              currencyFormat: 'R$',
              isFreeShipping: true,
              amount: 2,
              image:
                'https://static.netshoes.com.br/produtos/camisa-corinthians-i-1920-sn-estadio-nike-masculina/28/HZM-1536-028/HZM-1536-028_detalhe1.jpg?resize=280:280',
            },
          ],
        },
      })
    );

    const { getByTestId } = render(<CartComponent />);

    const totalElement = getByTestId('cart-article-total');

    expect(totalElement).toHaveTextContent('R$459.80');
    expect(totalElement).toHaveTextContent('9 x de R$51.09');
  });
});
