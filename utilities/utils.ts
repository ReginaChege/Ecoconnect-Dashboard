// export const PATHS={
//   GET_ORDERS: '/api/order/',
//   GET_PRODUCT:'/api/products/',
//   GET_MESSAGE:'/api/message/',
//   GET_USERS:'/api/users/',
//   GET_IMAGE:'/api/image/'
// }
// export const fetch_api = async(path, method='GET',body=null)=>{
  
 
//  const response =  fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${path}`,{
//   method: method
// })
//     .then(response => response.json())
//     .then(result => (result))
//     .catch(error => console.log('error', error));

//     return response

// }




export const getOrder= async()=>{
  const url ='api/getOrder'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.order
  }
}

export const getClient= async()=>{
  const url ='api/getClient'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.client
  }
}

export const getMessage= async()=>{
  const url ='api/getMessage'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.message
  }
}

export const getProduct= async()=>{
  const url ='api/getProducts'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.product
  }
}

export const postProduct= async()=>{
  const url ='api/postProducts'
  try{
      const response = await fetch(url)
      const result = await response.json();
      return result;
  }
  catch(error:any){
      return error.product
  }
}

export const deleteProduct= async()=>{
  fetch(`/api/products/`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('Product deleted successfully.');
      } else {
        console.error('Failed to delete the product.');
      }
    })
    .catch((error) => {
      console.error('Error deleting the product:', error);
    });

}

export const deleteClient= async(id:number)=>{
  fetch(`http://127.0.0.1:8000/api/api/users/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.status === 204) {
        console.log('User deleted successfully.');
      } else {
        console.error('Failed to delete the user.');
      }
    })
    .catch((error) => {
      console.error('Error deleting the user:', error);
    });
}

export const addProduct= async()=>{
  fetch(`/api/products/`, {
    method: 'PUT',
  })
    .then((response) => {
      if (response.status === 200) {
        console.log('Product added successfully.');
      } else {
        console.error('Failed to add the product.');
      }
    })
    .catch((error) => {
      console.error('Error add the product:', error);
    });

}