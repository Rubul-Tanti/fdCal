import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { INITIALSTATE } from "../page"
import { calFD } from "./inputBox"

const Graph=({form}:{form:INITIALSTATE})=>{
    const cmd=calFD(form)
    const data=Array.from({length:form.timePeriod}).map((d,i)=>{
        const cmd=calFD(form,i)
        return {year:i,intrest:cmd.compoundIntrest,amount:cmd.amount}
    })
    return<div className="w-full bg-[#d1b39b] p-5">
            <header className="flex gap-14">
                <div>
                    <h3 className="text-sm">Maturity Amount</h3>
                    <p className="text-2xl font-semibold">{cmd.amount}</p>
                </div>
                <div>
                    <h3 className="text-sm">Intrest Earned</h3>
                    <p className="text-2xl font-semibold">{cmd.compoundIntrest}</p>
                </div>


            </header>
        <div className="bg-white p-4 mt-14 rounded-xl">

            <div className="flex gap-5"> <div className="text-black flex items-center gap-2 text-sm"><div className="h-2 w-2 bg-[#6b5c53]"></div>Selected Year</div>

            <div> <div className="text-black flex items-center gap-2 text-sm"><div className="h-2 w-2 bg-[#e6cdba]"></div>Other Year</div>

            </div>
            </div>

                <BarChart
                className="w-full mt-4"
      style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
      responsive
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <XAxis dataKey="year" niceTicks="snap125" />
      <YAxis width="auto" niceTicks="snap125" />
      <Bar fill="#e6cdba" dataKey="amount" className="rounded-lg text-[#e6cdba]" barSize={60}  />
    </BarChart>
        </div>
    </div>
}
export default Graph