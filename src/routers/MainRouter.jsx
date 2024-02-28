import React from 'react';
import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/Home';
import { Personal } from '../components/Personal';
import { NotFound } from '../components/NotFound';


export const MainRouter = () => {
  return (
    <createBrowserRouter>
      <Routes>
        <Route
          path="/"
          loader={async ({ req }) => {
            const url = 'https://api.fbi.gov/wanted/v1/list';
            const res = await fetch(url,
              {
                method: "GET",
                signal: req.signal,
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json;charset=UTF-8"
                }
              }
            );
            const data = await res.json();
            console.log('router data: ', data)
          }}
          element={<Home />}
        />
        <Route
          path='/person/:id' 
          element={<Personal />}
        />
        <Route 
        path='*' 
        element={<NotFound />}/>
      </Routes>
    </createBrowserRouter>

  )
}
