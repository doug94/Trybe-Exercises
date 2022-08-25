import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(combineReducers({ clickReducer }), initialState),
  } = {},
) => ({
  ...render(<Provider store={ store }>{component}</Provider>),
  store});

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
  test('the page should have a button and a text 5', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');
  
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
  test('the page should have a button and a text 1 after clicking the button', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    userEvent.click(buttonAdicionar);
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });
  test('the page should have a button and a text 11 after clicking the button with the custom initial state set as 10', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');

    userEvent.click(buttonAdicionar);
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});