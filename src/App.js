import './App.css';
// import { Form, Images } from './components/Form';
// import { Imagenes } from './components/Functions';
import { Personal } from './components/Personal';
import { NotFound } from './components/NotFound';
import  { Home } from './components/Home';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route
        index
        element={<Home />}
      />
      <Route
        path='/person/:id'
        element={<Personal />}
      />
      <Route
        path='*'
        element={<NotFound />} 
      />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
