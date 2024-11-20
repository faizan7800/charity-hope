import React, { useEffect, useState } from 'react'

const Donate = () => {
    const [activeButton, setActiveButton] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const handleButtonClick = (buttonValue) => {
        setActiveButton(buttonValue);
        setInputValue(buttonValue);
    };

    const handleInputChange = (event) => {
        const numericValue = event.target.value.replace(/\D/g, '');
        setInputValue(numericValue);
        setActiveButton(null);
    };

    useEffect(()=>{
        setInputValue('5');
        setActiveButton(5)
    },[])
    let submitValue = inputValue ? `Donate $${inputValue}` : `Donate`;
    return (
        <div className='container mx-auto px-0 lg:px-4 py-6 md:py-6 md:pt-4 rounded-lg border-2 border-orange-500 border-t-orange-600 mt-8 mb-8 w-[96%] md:w-[70%]'>
           <h1 className='text-xl md:text-2xl lg:text-3xl font-bold leading-tight bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent text-center pb-2'>Donation Form</h1>
            <form className='flex flex-col justify-center items-start flex-wrap px-4 w-full'>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-3'>
                    <input type="text" placeholder='Name *' className='border border-orange-500  p-4 rounded placeholder:text-orange-300 outline-none text-orange-500 font-semibold' required/>
                    <input type="text" placeholder='Address *' className='border border-orange-500  p-4 rounded placeholder:text-orange-300 outline-none text-orange-500 font-semibold' required/>
                   
                </div>

                <div className=' my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3'>
                <input type="text" placeholder='Email *' className='border border-orange-500  p-4 rounded placeholder:text-orange-300 outline-none text-orange-500 font-semibold' required/>
                <input type="text" placeholder='Phone Number *' className='border border-orange-500  p-4 rounded placeholder:text-orange-300 outline-none text-orange-500 font-semibold' required/>
                <input type="text" placeholder='Country *' className='border border-orange-500  p-4 rounded placeholder:text-orange-300 outline-none text-orange-500 font-semibold md:col-span-2 lg:col-span-1' required/>
                </div>
                <div className='mb-3 grid grid-cols-1 w-full gap-3'>
                <p className='text-orange-500 font-bold text-xl md:text-2xl mb-0'>Select Type to Donate:</p>
                    <div className="space-y-4 mx-4 grid grid-cols-2 md:grid-cols-4">
                        <div className="flex items-center mt-4">
                            <input
                                type="radio"
                                id="option1"
                                name="option"
                                value="option1"
                                checked={selectedOption === 'option1'}
                                onChange={handleRadioChange}
                                className="hidden peer "
                            />
                            <label
                                htmlFor="option1"
                                className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-orange-500 peer-checked:border-transparent peer-hover:bg-orange-300 transition-all duration-300"
                            >
                            </label>
                            <label htmlFor="option1" className="ml-2 text-gray-700">Kids Education</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="option2"
                                name="option"
                                value="option2"
                                checked={selectedOption === 'option2'}
                                onChange={handleRadioChange}
                                className="hidden peer"
                            />
                            <label
                                htmlFor="option2"
                                className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-orange-500 peer-checked:border-transparent peer-hover:bg-orange-300 transition-all duration-300"
                            >
                            </label>
                            <label htmlFor="option2" className="ml-2 text-gray-700">Pure Water</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="option3"
                                name="option"
                                value="option3"
                                checked={selectedOption === 'option3'}
                                onChange={handleRadioChange}
                                className="hidden peer"
                            />
                            <label
                                htmlFor="option3"
                                className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-orange-500 peer-checked:border-transparent peer-hover:bg-orange-300 transition-all duration-300"
                            >
                            </label>
                            <label htmlFor="option3" className="ml-2 text-gray-700">Healthy Food</label>
                        </div>

                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="option4"
                                name="option"
                                value="option4"
                                checked={selectedOption === 'option4'}
                                onChange={handleRadioChange}
                                className="hidden peer"
                            />
                            <label
                                htmlFor="option4"
                                className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 peer-checked:bg-orange-500 peer-checked:border-transparent peer-hover:bg-orange-300 transition-all duration-300"
                            >
                            </label>
                            <label htmlFor="option4" className="ml-2 text-gray-700">Medical Care</label>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-3'>
               <div className='flex justify-center gap-2 md:gap-8 items-center p-2 border border-orange-500 rounded bg-orange-500/10 md:col-span-2'>
                        <p className='text-orange-500 font-bold text-xl'>Donate</p>
                        <button
                            className={`border border-orange-500 rounded-full w-10 h-10 md:w-10 md:h-10 font-bold text-xl hover:bg-orange-500 hover:text-slate-50 transition-all duration-300 ${activeButton === 5 ? 'bg-orange-500 text-slate-50' : 'text-orange-500 bg-slate-50'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleButtonClick(5); }}
                        >
                            5
                        </button>
                        <button
                            className={`border border-orange-500 rounded-full w-10 h-10 font-bold text-xl hover:bg-orange-500 hover:text-slate-50 transition-all duration-300 ${activeButton === 10 ? 'bg-orange-500 text-slate-50' : 'text-orange-500 bg-slate-50'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleButtonClick(10) }}
                        >
                            10
                        </button>
                        <button
                            className={`border border-orange-500 rounded-full w-10 h-10  font-bold text-xl  hover:bg-orange-500 hover:text-slate-50 transition-all duration-300 ${activeButton === 15 ? 'bg-orange-500 text-slate-50' : 'text-orange-500 bg-slate-50'
                                }`}
                            onClick={(e) => { e.preventDefault(); handleButtonClick(15) }}
                        >
                            15
                        </button>
                        <input
                            type="text"
                            className="w-[20%] p-2 rounded text-orange-500 font-bold outline outline-orange-500"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                <input type="submit" value={submitValue} className='bg-orange-500 text-slate-50 p-2 rounded-lg font-bold text-xl cursor-pointer hover:bg-orange-600 md:col-span-1'/>
                
                </div>
            </form>
        </div>
    )
}

export default Donate