'use client'
import { getOrder } from "@utilities/utils";
import { useEffect, useState } from "react";



// export const useGetOrders = () => {

//     const [orders, setOrders] = useState(null);
//     const [loading, setLoading] = useState(false)

//     useEffect(() => {
//         setLoading(true)
//         fetch(`${BASE_URL}/api/order`)
//             .then(res => {
//                 console.log('Fetched Orders', res);
//                 if (res && res.length) setOrders(res);
//             })
//            .catch((err)=>{
//             console.log(err)
//            })
//             .finally(()=>{
//                 setLoading(false)
//             })
//     }, []);


//     return {orders,loading};



// }

interface OrderData {
    id: string;
    quantity: string;
    status: string;
    total_price: number;
    total_amount_order: number;
    product: string;
    user: number;
  }
const useGetOrders = ()=>{
    const [order, setOrders] = useState<OrderData[]>([]);
    useEffect(()=>{
      (async()=>{
        const orders = await getOrder();
        setOrders(orders);
        console.log('orders:', orders);
      })();
    }, []);
    return {order,}
  }
  export default useGetOrders;