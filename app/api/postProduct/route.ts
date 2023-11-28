// impo
// fetch('/api/products', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(product),
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         console.log('Product added successfully.');
//       } else {
//         console.error('Failed to add the product.');
//       }
//     })
//     .catch((error) => {
//       console.error('Error adding the product:', error);
//     });
// };



// import { BASE_URL } from "@/config";

// export async function POST() {
//     try{
//         if(!BASE_URL){
//             return new Response('Base url not found', {
//                 status:404,
//                 statusText:'Failed'
//             })
//         }
//         const response=await fetch(`${BASE_URL}/api/product/`)
//         const result=await response.json();
//         console.log(result);
        
//         return new Response(JSON.stringify(result),{
//             status:200,
//             statusText:'Success'
//         })

//     }
//     catch(error:any){
//         return new Response(error.message,{
//             status:500,
//             statusText:'Failed'
//         })
//     }
    
// }



import { BASE_URL } from "@/config";

export async function POST(request: Request) {
  try {
    if (!BASE_URL) {
      return new Response("Base url not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const posts = await request.json().then(async (response) => {
      const result = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      const post = await result.json();

      return post;
    });

    return new Response(JSON.stringify(posts), {
      status: 201,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}
