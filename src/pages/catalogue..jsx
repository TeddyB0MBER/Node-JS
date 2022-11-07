import './catalogue.css';
import Product from "../components/product";
import {useEffect, useState } from 'react';
import DataService from '../services/dataService';

function Catalogue () {
  let [products, setProducts ] = useState([]);


  const loadCatalog = () => {
    let service = new DataService();
    let product = service.getCatalog(); //getCatalog retrieves data from a source 
    setProducts(product);
  };

//exec when the component is displayed
// => is arrow functions
useEffect( () => {
  loadCatalog();
}, []);

    return (
    <div>
        <h1> Goodies</h1>
        <h4>We have {products.length} products</h4>
        {products.map(  product =>        
         <Product data={product}/>
         )}
    </div>
    );
}

export default Catalogue;

//export default function Catalogue () {
  //  return (
   //     <div>
    //        <h1> Catalogue</h1>
      //  </div>
       // );
    // }