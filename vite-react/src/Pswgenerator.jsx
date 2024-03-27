import { useCallback, useEffect, useState, useRef } from "react"

export default function Pswgenerator(){
    const [length,setlength]=useState(6)
    const [Number,setnumber]=useState(false)
    const [charall,setcharall]=useState(false)
    const[password,setpassword]=useState("")

    //use Refhook

    const passwordref =useRef(null)
    const copyclipboard=useCallback(()=>{
        passwordref.current?.select()
        passwordref.current?.setSelectionRange(0,10)
        window.navigator.clipboard.writeText(password)
    },[password])
    const passwordgenerator = useCallback(()=>{

        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(Number)str+="0123456789"
        if(charall)str+="!@#$%^&*/()[]"

        for (let i = 0; i < length; i++) {
            let char =Math.floor(Math.random()*str.length+1)
            pass+=str.charAt(char)
        }
        setpassword(pass)
    },[length,Number,charall,setpassword])
    useEffect(()=>{
        passwordgenerator()
    },[length,Number,charall,passwordgenerator])
    return(
        <>
        <div className=" mx-auto shadow-md px-5 my-5 text-orange-500 bg-zinc-800 w-[30%]">
             <h1 className="text-3xl text-white text-center font-semibold">password generator</h1>
            <div className="flex shadow-sm rounded-full overflow-hidden mb-4 py-5">
                <input type="text" value={password} className="outline-none w-full py-2 px-4" placeholder="password" readOnly ref={passwordref}/>
                <button className=" outline-none bg-lime-500 text-white px-3 shrink-0 py-1"onClick={copyclipboard}>Copy</button>
            </div>
            <div className="flex gap-x-3 text-sm flex-row">
                <div className="flex items-center gap-x-1">
                    <input type="range" min={4} max={10} value={length} className=" cursor-pointer"  onChange={(e)=>{setlength(e.target.value)}}/>
                    <label> length :{length}</label>
                </div>
                <div className="flex items-center gap-x-1">
                <input type='checkbox' defaultChecked={Number} id="numberip" onChange={()=>{setnumber((prev)=>!prev)}}/>
                <label htmlFor="numbrip">Numbers</label>
                </div>
                <div className="flex items-center gap-x-2">
                <input type='checkbox' defaultChecked={charall} id="charip" onChange={()=>{setnumber((prev)=>!prev)}}/>
                <label htmlFor="charip">charcters</label>
                </div>
            </div>   
        </div>
        </>
    )
}



//oxZHLevo uuoBRwwZ uuoBRwwZ