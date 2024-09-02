import { useEffect, useState } from 'react'
import { Route, BrowserRouter} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import ProductList from './components/ProductList/ProductList'
import Footer from './components/Footer/Footer'
import ListProdDetail from './components/ListProdDetail/ListProdDetail'

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/">
          <div className="app">
            <Header/>
              <div className="contaniner flex">
                <Aside />
                <ProductList/>
              </div>
            <Footer/>
          </div>
        </Route>

        <Route path="/:id">
          <ListProdDetail/>
        </Route>
    </BrowserRouter>
  )
}

export default App
