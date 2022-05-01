import { useEffect } from "react";

export default function ProductItem({product, num, itemToRemove}) {

  function handleDelete(itemIndex) {
    itemToRemove(--itemIndex)
  }

  //HOOK ALWAYS GETS FIRED
  // useEffect(() => {
  //   alert("Yaaay! welcome");
  // })
 
  //HOOK GETS FIRED JUST ONCE (WHEN THE COMPONENT MOUNTS ONLY)
  // useEffect(function(){
  //   alert("Yaaay! welcome");
  // }, []);

  //HOOK GETS FIRED WHENEVER THERE'S A CHANGE IN THE VALUE OF ITS DEPENDENCIES
  // useEffect(function(){
  //   alert("Yaaay! welcome");
  // }, [num])

  return (
    <tr>
      <td>{++num}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>
        {/* <button className="btn btn-success me-2">Edit</button> */}
        <button className="btn btn-danger" onClick={() => handleDelete(num)}>Delete</button>
      </td>
    </tr>
  )
}
