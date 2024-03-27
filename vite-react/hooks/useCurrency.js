import { useEffect,useState } from "react";

export default function useCurrency(currency){
    const[data,setdata]=useState()
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((resp)=>resp.json)
        .then((resp)=>setdata(resp[currency]))
    },[currency])
    console.log(data);
    return data
}