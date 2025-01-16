import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FavoritesProvider from './context/FavoritesContext.jsx'
import { Provider } from 'react-redux'
import { store } from './rtk query/store.js'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </Provider>
)
