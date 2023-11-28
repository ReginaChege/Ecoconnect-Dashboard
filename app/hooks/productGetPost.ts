// import { getItems } from "@utilities/utils";
import { useEffect,useState } from "react";


interface OrderData{
    name:string;
    company_name:string;
    price:number;
    image_url:string;
    quantity:number;
    description:string;
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