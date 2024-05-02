import { useState } from "react"

 

function App() {
  const [va, setVa]=useState(0)
  const [vb, setVb]=useState(0)
  const [vc, setVc]=useState(0)
  const [ia, setia]=useState(0)
  const [ib, setib]=useState(0)
  const [ic, setic]=useState(0)
  const [result, setResult] = useState("hello bro chandu radhe radhe radhe shyam");

  async function handleSubmit(event){
    event.preventDefault();
    console.log(va, vb, vc, ia, ic, ib);
    const res = await fetch("http://localhost:5000/predict");
    const data = res.json().result[0];
    // data = 5;
    switch(data){
      case 0:
        setResult("LG Fault");
        break;
      case 1:
        setResult("LLLG Fault");
        break;
      case 2:
        setResult("LLG Fault");
        break;
      case 3:
        setResult("LLL Fault");
        break;
      case 4:
        setResult("LL Fault");
        break;
      case 5:
        setResult("No Fault");
        break;
      default:
        setResult("Please try after some time")
    }
  }

  return (
    <div className="bg-[rgb(15,23,42)] h-screen text-slate-300">
      <h1 className="font-mullish font-bold text-2xl text-center pt-5">Fault Detection in power lines using Machine Learning Algorithms</h1>
      <form onSubmit={handleSubmit} className="flex flex-row justify-center items-center">
        <div class="m-5 p-5 flex flex-col flex-wrap ">
          <div class="p-2">
            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-first-name">
              Enter Voltage V1
            </label>
            <input type="number" onChange={(e) => setVa(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name"   />
          </div>
          <div class="p-2">
            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-last-name">
              Enter Voltage V2
            </label>
            <input type="number" onChange={(e) => setVb(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
          <div class="p-2">
            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-last-name">
              Enter Voltage V3
            </label>
            <input type="number" onChange={(e) => setVc(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
        </div>
        <div class="m-5 p-5 flex flex-col flex-wrap">
          <div class="p-2">
            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-first-name">
              Enter Current I1
            </label>
            <input type="number" onChange={(e) => setia(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name"   />
          </div>
          <div class="p-2">
            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-last-name">
              Enter Current I2
            </label>
            <input type="number" onChange={(e) => setib(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
          <div class="p-2">
            <label class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2" for="grid-last-name">
              Enter Current I3
            </label>
            <input type="number" onChange={(e) => setic(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
        </div>
      </form>
      <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 btn bg-sky-500/50 p-3 rounded-lg block font-bold text-center mx-auto" type="submit">Submit</button>
      <h1 className="block font-semibold text-center mx-auto m-3 p-3">{result}</h1>
      
    </div>
  )
}

export default App
