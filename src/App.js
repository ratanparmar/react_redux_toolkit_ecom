import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Cart from './components/Cart';
import Navigation from './components/Navigation';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Navigation/>}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
