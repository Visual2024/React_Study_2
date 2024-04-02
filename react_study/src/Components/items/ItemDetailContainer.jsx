import { useEffect, useState } from 'react'
import { pedirDatos } from '../../Helpers/pedirDatos';


export const ItemDetailContainer = ({itemId}) => {
  const [item, setItem] = useState(null);
  
  useEffect(()=>{
    pedirDatos(itemId)
      .then(()=> {
        setItem(res)
      })    
  },[itemId])


  return (
    <div>
      {item && <ItemDetailContainer item={item} />}
    </div>
  )
}

