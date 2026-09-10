"use client"
import { useState } from "react";
import InputBox from "./components/inputBox";
import Graph from "./components/graph";

export type INTRESTPAYOUT=  "quarterly"|
        "half yearly"|
        "yearly"|
        "atmaturity"

       export  type INITIALSTATE={
             depositAmount:number,
            rate_of_return:number,
            intrestPayout:INTRESTPAYOUT
            ,timePeriod:number
        }

        const initialState:INITIALSTATE={
            depositAmount:1000,
            rate_of_return:5,
            intrestPayout:'yearly'
            ,timePeriod:3
        }

export default function Home() {
  const [form,setForm]=useState(initialState)
  const [finalResult,setFinalResult]=useState(initialState)

  return (
<div className="mx-auto p-5  flex items-center justify-center h-screen w-full max-w-7xl">
  <main className="flex bg-white gap-8 ">
    {/* input  */}
      <InputBox setFinalResult={setFinalResult} form={form} setForm={setForm}/>

    {/* graph */}
    <Graph form={finalResult}/>
  </main>
</div>
  );
}
