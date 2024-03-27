import { useState } from "react"

export default function Bgchanger(){
    const [color,setcolor]=useState("olive")
    return(
        <>
        <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3">
                <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-transparent rounded-full">
                    <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"red"}}>Red</button>
                    <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"green"}}>Green</button>
                    <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"yellow"}}>Yellow</button>
                    <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"blue"}}>Blue</button>
                    <button onClick={()=>setcolor("white")} className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"white"}}>White</button>
                    <button onClick={()=>setcolor("purple")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"purple"}}>purple</button>
                    <button onClick={()=>setcolor("black")} className="outline-none px-4 py-1 rounded-full shadow-xl text-white" style={{backgroundColor:"black"}}>Black</button>
                    <button onClick={()=>setcolor("pink")} className="outline-none px-4 py-1 rounded-full shadow-xl text-black" style={{backgroundColor:"pink"}}>Pink</button>
                </div>
            </div>
        </div>
        </>
    )
}