 import './product.css'
 import QuantityPicker from './quantityPicker';
 function Product ( props ){

    function test(){ 
        console.log("hello world");
    }
    return (
        <div className="productLink">
            <img src={'/images/' + props.data.image} alt=''></img> 
            <div className='prices'>
            <h4> {props.data.title}</h4>
            <label> <i>{props.data.price}</i> </label>
           </div>
            <QuantityPicker/>
            <button className='btn-dark' onClick={test}> Add </button>
        </div>
    );

 }
 export default Product;
 