import { SetStateAction } from "react"
import { INITIALSTATE, INTRESTPAYOUT } from "../page"
    const intrestPayout={
        "quarterly":4,
        "half yearly":2,
        "yearly":1,
        "atmaturity":0
    }

export const calFD=(form:INITIALSTATE,t:number=form.timePeriod)=>{
// Formula: \(M = P + (\frac{P \times r \times t}{100})\)M: Maturity AmountP: Principal (deposit amount)r: Annual interest rate (in percentage)t: Tenure in years (or days/365

    const p=form.depositAmount
     const r=form.rate_of_return/100
     const n= intrestPayout[form.intrestPayout]
     const A=p*Math.pow((1+(r/n)),n*t)

    return {amount:A.toFixed(2),compoundIntrest:(A-p).toFixed(2)}
}
const InputBox=({setFinalResult,form,setForm}:{form:INITIALSTATE,setForm:React.Dispatch<SetStateAction<INITIALSTATE>>,setFinalResult:React.Dispatch<SetStateAction<INITIALSTATE>>})=>{



    return <div className="max-w-3xl w-full min-w-xl p-5">
        <h1 className="text-4xl text-[#b38e72] ">FD Calculator</h1>
                <p className="text-xs text-zinc-400">Estimate How much your fixed deposit investment  will grow over time</p>

            <div>
            <div className="mt-2 text-[#a5968f] w-full">
                <div className="flex  justify-between">
                <h2 >Deposit Amount</h2>
                <input value={form.depositAmount}
                onChange={(e)=>{setForm(p=>({...p,depositAmount:Number(e.target.value)}))}} className="w-18" type="number" placeholder="deposit amount"/>
                </div>
                <input onChange={(e)=>{setForm(p=>({...p,depositAmount:Number(e.target.value)}))}} className="w-full accent-[#e6cdba]" value={form.depositAmount} min={10000} max={5000000} type="range"/>
                <div className="flex text-xs mt-2 justify-between">
                    <span>10000</span>
                    <span>2445000</span>
                    <span>50000000</span>
                </div>
            </div>
            <div className="mt-2 text-[#a5968f]  w-full">
                <div className="flex  justify-between">
                <h2>Rate of Return (%)</h2>
                <input
                value={form.rate_of_return}
                onChange={(e)=>{setForm(p=>({...p,rate_of_return:Number(e.target.value)}))}} className="w-18" type="number" placeholder="rate of return" />
                </div>
                <input   onChange={(e)=>{setForm(p=>({...p,rate_of_return:Number(e.target.value)}))}}  className="w-full accent-[#e6cdba]" value={form.rate_of_return} min={5} max={30} type="range"/>
                <div className="flex text-xs mt-2 justify-between">
                    <span>5%</span>
                    <span>17%</span>
                    <span>30%</span>
                </div>
            </div>


                <div className=" gap-3 flex text-[#a5968f] justify-between mt-2">
                    <div>
                <h1 >Intrest Payout</h1>
                    <p className="text-xs text-zinc-400 ">comulative rate of intrest</p>
                    </div>
                        <div className="flex justify-between gap-8">
                            {(Object.keys(intrestPayout) as INTRESTPAYOUT[]).map((item)=>{
                                return <button key={item} onClick={()=>setForm(p=>({...p,intrestPayout:item}))} className={`border p-2 rounded-xl text-xs ${form.intrestPayout==item?"bg-[#b38e72] text-white":"bg-[#ebebeb] text-[#b38e72]"}`}>{item}</button>
                            })}
                        </div>
                </div>
                  <div className="mt-4 text-[#a5968f] w-full">
                <div className="flex  justify-between">
                <h2>Time Period (Years)</h2>
                <input
                    value={form.timePeriod}
                onChange={(e)=>{setForm(p=>({...p,timePeriod:Number(e.target.value)}))}}
                className="w-18 " type="number" placeholder="deposit amount"/>
                </div>
                <input value={form.timePeriod} onChange={(e)=>{setForm(p=>({...p,timePeriod:Number(e.target.value)}))}}  className="w-full accent-[#e6cdba]  " min={1} max={50} type="range"/>
                <div className="flex text-xs mt-2 justify-between">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                </div>
            </div>

            </div>
            <button className="border-none text-white bg-[#b38e72] p-2 mt-5 rounded-full" onClick={()=>{calFD(form);setFinalResult(form)}}>Calculate</button>

    </div>
}
export default InputBox