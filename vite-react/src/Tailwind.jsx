export default function Tailwind({username,btntext="visit me"}){
    return(
        <>
        <h1 className='bg-green-500 text-blue-950 p-4 w-30'>Tailwind Text</h1>
        <h2>{username}</h2>
        <button>{btntext}</button>
        </>
    )
}