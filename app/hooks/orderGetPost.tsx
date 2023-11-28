import { getItems } from "@utilities/utils";
import { useEffect,useState } from "react";

interface OrderData{
    id:number;
    quantity:number;
    status:string;
    total_amount_order:string;
    total_price:string;
}

const orderGetPosts=()=>{
    const [order, orderPosts]=useState<OrderData[]>([]);
    useEffect(()=>{
      (async()=>{
        const order=await getItems();
        orderPosts(order);        
      })();
    },[])
    return {order}
  
  
}
export default orderGetPosts;