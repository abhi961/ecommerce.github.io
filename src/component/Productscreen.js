import React from 'react';
import { Link } from 'react-router-dom';
import Data from './Data';

 function ProductScreen (props) {
   console.log(props.match.params.id);
   const product= Data.products.find(x => x._id === props.match.params.id);
     
   return(
     <>
     <div className="back-link">
       <Link className="Back-link" to='/'>Back to results</Link>
     </div>
       <div className="details">
         <div className="details-image">
           <img src={product.image} alt="product"></img>
         </div>
         <div className="details-info">
           <ul>
        <li><h4>{product.name}</h4>
        </li>
        <li>
          {product.rating} starts ({product.numReviews} Reviews)
        </li>
        <li>
         Price: <b>&#8377;{product.price}</b>
        </li>
            <li>
              Description:
              <div> 
                {product.description}
              </div>
            </li>
           </ul>
         </div>
         <div className="details-action">
           <ul>
             <li>Price:
               {product.price}
               </li>
             <li>Status:
               {product.status}
             </li>
             <li>Qty:<select>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
             </select>
            </li>
            <li>
             <button className="button">Add to card</button>
             </li>
           </ul>
         </div>
       </div>
     </>
     )
   
 }
 export default ProductScreen;