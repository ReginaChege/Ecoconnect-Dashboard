import { getItems } from "@utilities/utils";
import { useEffect,useState } from "react";

interface OrderData{
    sender:string;
    receiver:string;
    user:string;
    body:string;
}

const messageGetPosts=()=>{
    const [message, messagePosts]=useState<OrderData[]>([]);
    useEffect(()=>{
      (async()=>{
        const message=await getItems();
        messagePosts(message);        
      })();
    },[])
    return {message}
  
  
}
export default messageGetPosts;