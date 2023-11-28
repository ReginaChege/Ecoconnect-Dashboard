// import { fetch_api, PATHS } from "@utilities/utils";
// import { useEffect, useState } from "react";



// const useGetClient = () => {

//     const [client, setClient] = useState(null);
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         setLoading(true)
//         fetch_api(PATHS.GET_USERS)
//             .then(res => {
//                 console.log('Fetched client', res);
//                 if (res && res.length) setClient(res);
//             })
//            .catch((err)=>{
//             console.log(err)
//            })
//             .finally(()=>{
//                 setLoading(false)
//             })
//     }, []);


//     return {orders: client,loading};



// }

// export default useGetClient;

// import { fetch_api, PATHS } from "@utilities/utils";
// import { useEffect, useState } from "react";


// // useGetClient.js
// export const useGetClient = () => {
//     const [client, setClient] = useState(null);
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         setLoading(true)
//         fetch_api(PATHS.GET_USERS)
//             .then(res => {
//                 console.log('Fetched client', res);
//                 if (res && res.length) setClient(res);
//             })
//            .catch((err)=>{
//             console.log(err)
//            })
//             .finally(()=>{
//                 setLoading(false)
//             })
//     }, []);

//     return { client, loading };
// }


// import {BASE_URL} from "@utilities/utils";


'use client'
import { useEffect, useState } from "react";
import { getClient } from "@utilities/utils";

interface ClientData {
  id:string,
  username:string,
  email:number,
  date_joined:number,
}

  const useGetClient = ()=>{
    const [client, setClient] = useState<ClientData[]>([]);
    useEffect(()=>{
      (async()=>{
        const clients = await getClient();
        setClient(clients);
        console.log('clients:', clients);
      })();
    },[])
    return {client}

    
  }
  export default useGetClient;



 