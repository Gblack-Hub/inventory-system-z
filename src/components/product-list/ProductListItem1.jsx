
 const ProductListItem1 = ({index, name, quantity}) =>
 {
     return (
         <>
             <tr key ={index}>
                 <td>{ ++index }</td>
                 <td>{ name }</td>
                 <td>{ quantity }</td>
                <td> <button className="btn btn-danger">Delete</button></td>
             </tr> 
         </>
     )
 }

 export default ProductListItem1;