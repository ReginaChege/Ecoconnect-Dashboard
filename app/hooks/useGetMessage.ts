import { getMessage } from "@utilities/utils";
import { useEffect, useState } from "react";

interface MessageData {
    body: string;
    sender: string;
    receiver: number;
    is_read: number;
    company_name: string;
    name:string;
  }

const useGetMessage = () => {

    const [message, setMessage] = useState<MessageData[]>([]);

    useEffect(()=>{
        (async()=>{
          const message = await getMessage();
          setMessage(message);
          console.log('message:', message);
        })();
      },[])
      return {message}
    }
export default useGetMessage;