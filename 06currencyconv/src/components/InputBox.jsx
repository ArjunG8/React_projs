import React, { useId } from "react";
import { currencyCountry } from "../constants/currencyCountry";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    // Get Country Code
    const countryCode = currencyCountry[selectCurrency] || "US";

    // Flag URL
    const flagUrl = `https://flagsapi.com/${countryCode}/flat/64.png`;

    return (
        <div
            className={`bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-5 flex justify-between items-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] ${className}`}
        >
            {/* Left Section */}
            <div className="flex flex-col w-1/2">
                <label
                    htmlFor={amountInputId}
                    className="text-gray-500 text-sm font-medium mb-2"
                >
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-2xl font-bold"
                    type="number"
                    placeholder="Enter Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) =>
                        onAmountChange && onAmountChange(e.target.value)
                    }
                />
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-center">

                <p className="text-gray-500 text-sm font-medium mb-2">
                    Currency
                </p>

                <img
                    src={flagUrl}
                    alt={selectCurrency}
                    className="w-14 h-10 rounded-md shadow-md mb-2 transition-transform duration-300 hover:scale-110"
                />

                <select
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e) =>
                        onCurrencyChange && onCurrencyChange(e.target.value)
                    }
                    className="bg-gray-100 rounded-lg px-3 py-2 outline-none cursor-pointer hover:bg-blue-100 transition-all duration-300"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;