import { render, cleanup, screen } from '@testing-library/react';
import App from './App';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import drodownContext from './context/dropdown/dropdownContext';

afterEach(cleanup);

describe('App', () => {
  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <drodownContext.Provider {...providerProps}>
        {ui}
      </drodownContext.Provider>,
      renderOptions
    );
  };

  it('renders App component', () => {
    const history = createMemoryHistory();

    const providerProps = {
      value: false,
    };

    customRender(
      <Router history={history}>
        <App />
      </Router>,
      { providerProps }
    );

    screen.debug();
  });
});
