import Header from './components/Header';
import Footer from './components/Footer';
import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  );
}

export default App;
