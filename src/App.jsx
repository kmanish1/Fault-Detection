import { useState } from "react"

 

function App() {
  const [va, setVa]=useState(0)
  const [vb, setVb]=useState(0)
  const [vc, setVc]=useState(0)
  const [ia, setia]=useState(0)
  const [ib, setib]=useState(0)
  const [ic, setic]=useState(0)
  const [result, setResult] = useState("");

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
    <div className="bg-gray-600 flex flex-col justify-center items-center h-screen">
      <h1>Fault Detection in power lines using Machine Learning Algorithms</h1>
      <form onSubmit={handleSubmit} className=" h-screen flex flex-row ">
        <div class="bg-red-200 border-red-600 border-8">
          <div class="">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Enter Voltage V1
            </label>
            <input type="number" onChange={(e) => setVa(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"   />
          </div>
          <div class="">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Enter Voltage V2
            </label>
            <input type="number" onChange={(e) => setVb(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
          <div class="">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Enter Voltage V3
            </label>
            <input type="number" onChange={(e) => setVc(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
        </div>
        <div class="bg-white border-red-200 border-8 ">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Enter Current I1
            </label>
            <input type="number" onChange={(e) => setia(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"   />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Enter Current I2
            </label>
            <input type="number" onChange={(e) => setib(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Enter Current I3
            </label>
            <input type="number" onChange={(e) => setic(e.target.value)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  )
}

export default App
