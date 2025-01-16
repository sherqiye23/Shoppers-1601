import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ROUtes from './routers/router'
const routerr = createBrowserRouter(ROUtes)
function App() {
  return <RouterProvider router={routerr} />
}

export default App