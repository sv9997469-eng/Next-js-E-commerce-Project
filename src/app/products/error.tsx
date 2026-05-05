"use client";

export default function ErrorPage({error,reset}){
  return (<>
  <div>
    <h1>Sonthing went wrong</h1>
    <p>{error.message}</p>
    <button className="px-4 py-2 rounded-md bg-primary text-white font-medium">Retry</button>
  </div>
  </>)
}