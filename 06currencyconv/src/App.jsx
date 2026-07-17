import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState("");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (amount === "" || !currencyInfo[to]) return;

    setConvertedAmount(
      (Number(amount) * currencyInfo[to]).toFixed(2)
    );
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex justify-center items-center relative px-4"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-lg">
        <div className="fade-in glow card-hover bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-6">

          {/* Heading */}
          <h1 className=" text-4xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            💱 Currency Converter
          </h1>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From */}
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            {/* Swap Button */}
            <div className="relative flex justify-center my-5">
              <button
                type="button"
                onClick={swap}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full w-14 h-14 text-2xl shadow-xl hover:rotate-180 hover:scale-110 transition-all duration-500"
              >
                ⇅
              </button>
            </div>

            {/* To */}
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Convert {from.toUpperCase()} → {to.toUpperCase()}
            </button>

            {/* Result */}
            {convertedAmount !== "" && (
              <div className="mt-6 text-center text-white">
                <p className="text-lg font-medium">
                  {amount} {from.toUpperCase()}
                </p>

                <p className="text-4xl my-2">⬇️</p>

                <p className="text-3xl font-bold text-green-300">
                  {convertedAmount} {to.toUpperCase()}
                </p>

                <p className="mt-2 text-sm text-gray-200">
                  1 {from.toUpperCase()} ={" "}
                  {currencyInfo[to]?.toFixed(4)} {to.toUpperCase()}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
