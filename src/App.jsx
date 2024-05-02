import { useState } from "react";

function App() {
  const [va, setVa] = useState(0);
  const [vb, setVb] = useState(0);
  const [vc, setVc] = useState(0);
  const [ia, setia] = useState(0);
  const [ib, setib] = useState(0);
  const [ic, setic] = useState(0);
  const [result, setResult] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(va, vb, vc, ia, ic, ib);

    const inputData = {
      Va: va,
      Vb: vb,
      Vc: vc,
      Ia: ia,
      Ib: ib,
      Ic: ic,
    };

    const res = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.result) {
        const resultData = data.result[0];
        switch (resultData) {
          case 0:
            setResult("LG Fault: Line-to-Ground Fault - Points to a short circuit or fault between a transmission line and ground.");
            break;
          case 1:
            setResult("LLLG Fault: Multiple Line-to-Line and Line-to-Ground Faults - Denotes a complex scenario with multiple faults involving transmission lines and ground.");
            break;
          case 2:
            setResult("LLG Fault: Line-to-Line and Line-to-Ground Fault - Indicates a combination of faults involving both transmission lines and ground.");
            break;
          case 3:
            setResult("LLL Fault: Triple Line-to-Line Fault - Suggests multiple short circuits or faults between transmission lines.");
            break;
          case 4:
            setResult(
              "LL Fault: Line-to-Line Fault - Indicates a short circuit or fault between two transmission lines."
            );
            break;
          case 5:
            setResult("No Fault is detected");
            break;
          default:
            setResult("Please try after some time");
        }
      } else {
        setResult("Error in fetching result");
      }
    } else {
      setResult("Error in fetching result");
    }
  }

  return (
    <div className="bg-[rgb(15,23,42)] h-screen text-slate-300">
      <h1 className="font-mullish font-bold text-2xl text-center pt-5">
        Fault Detection in power lines using Machine Learning Algorithms
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-row justify-center items-center">
          <div class="m-5 p-5 flex flex-col flex-wrap ">
            <div class="p-2">
              <label
                class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Enter Voltage V1
              </label>
              <input
                onChange={(e) => setVa(e.target.value)}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
              />
            </div>
            <div class="p-2">
              <label
                class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Enter Voltage V2
              </label>
              <input
                onChange={(e) => setVb(e.target.value)}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
              />
            </div>
            <div class="p-2">
              <label
                class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Enter Voltage V3
              </label>
              <input
                onChange={(e) => setVc(e.target.value)}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
              />
            </div>
          </div>
          <div class="m-5 p-5 flex flex-col flex-wrap">
            <div class="p-2">
              <label
                class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Enter Current I1
              </label>
              <input
                onChange={(e) => setia(e.target.value)}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-first-name"
              />
            </div>
            <div class="p-2">
              <label
                class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Enter Current I2
              </label>
              <input
                onChange={(e) => setib(e.target.value)}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
              />
            </div>
            <div class="p-2">
              <label
                class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Enter Current I3
              </label>
              <input
                onChange={(e) => setic(e.target.value)}
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
              />
            </div>
          </div>
        </div>
        <button
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 btn bg-sky-500/50 p-3 rounded-lg block font-bold text-center mx-auto"
          type="submit"
        >
          Submit
        </button>
      </form>
      <h1 className="block font-semibold text-center mx-auto m-3 p-3">
        {result}
      </h1>
    </div>
  );
}

export default App;
