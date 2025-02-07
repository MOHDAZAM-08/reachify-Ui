import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";

export function PanelHomePage() {
    const [activePanel, setActivePanel] = useState<"task" | "data">("task");

    return (
        <div className="mainContainer w-[85%] h-[450px] object-contain  p-6">


            {/* Charts Section */}
            <div className="flex w-full h-full gap-4">

                {/* Bar Chart */}
                <div className="flex flex-col  w-[60%] h-full object-contain  rounded-3xl  p-5 items-start justify-center gap-5">
                    
                <div className="mb-3 switchbutton bg-blue-200 inline-flex items-center justify-center gap-1 rounded-3xl ">
                    <div
                        className={`px-8 py-2 rounded-3xl cursor-pointer transition-all ${activePanel === "task" ? "bg-blue-700 text-white" : "bg-transparent text-gray-700"
                            }`}
                        onClick={() => setActivePanel("task")}
                    >
                        Task Panel
                    </div>
                    <div
                        className={`px-8 py-2 rounded-3xl cursor-pointer transition-all ${activePanel === "data" ? "bg-blue-700 text-white" : "bg-transparent text-gray-700"
                            }`}
                        onClick={() => setActivePanel("data")}
                    >
                        Data Panel
                    </div>
                </div>
                    <div className='flex flex-col gap-5 items-center justify-center'>
                        <div className="fisrt flex w-full justify-between gap-5">
                            <div className="bg-blue-100 aspect-square w-full flex items-center justify-between gap-5 flex-col py-14 rounded-3xl">
                                <h1 className="text-center font-normal text-2xl capitalize">initial Bulk video creation</h1>
                                <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-2 hover:bg-blue-800"><FaPlay />Start</button>
                            </div>
                            <div className="bg-blue-100 aspect-square w-full flex items-center justify-between gap-5 flex-col py-14 rounded-3xl">
                                <h1 className="text-center font-normal text-2xl capitalize">Abort  current task</h1>
                                <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-2 hover:bg-blue-800"><FaPlay />Stop</button>
                            </div>
                        </div>
                        <div className="bg-blue-100 h-20 w-full flex py-5 px-10 items-center gap-4 rounded-3xl justify-between">
                            <h1 className="text-center font-normal text-2xl capitalize">upload CSV to Start Task</h1>
                            <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-1 hover:bg-blue-800"><FiUpload />Upload</button>

                        </div>
                    </div>
                </div>

                {/* Pie Charts */}
                <div className="flex w-[40%] h-full gap-4">
                    <div className="flex flex-col gap-5 p-3 h-full rounded-3xl   items-center justify-center">
                        <div className="text-9xl border-gray-800  bg-white border-8 p-3 rounded-full">
                            <FaPlayCircle />
                        </div>
                        <h1 className="text-center font-normal text-2xl capitalize">Upload your pre-recorded video</h1>
                        <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-1 hover:bg-blue-800"><FiUpload />Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}