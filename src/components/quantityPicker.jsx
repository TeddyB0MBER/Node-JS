
import './quantityPicker.css';
import{ useState} from 'react';

// use state tells rect to update the presentaqtion of a value should it change, hence the useState()
// useState(1) tells react to display and start the counter at 1
function QuantityPicker(){
    const [ quantity, setQuantity] = useState(1);

    function increase(){
        console.log(`increase Quantity`);
        let val = quantity + 1;
        setQuantity(val);
        }
        function decrease(){
            let val = quantity - 1;
            setQuantity(val);
            if ( val > 0 ) { setQuantity(val);
            } else if (val < 0 ||  val == 0) {
                console.log(`Invalid quantity`)
            }
        };
        

   return(
   <div className='qt-picker'> 
       <button  className="btn  btn-sm btn-dark"onClick={increase}>+</button>
       <label> {quantity} </label>
       <button className='btn btn-sm btn-dark' disabled={quantity ===1} onClick={decrease}>-</button>
   </div>
   );
}

export default QuantityPicker;