import logosmall from '../assets/Untitled design (49).png';
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { FaPlayCircle } from "react-icons/fa";

import { Navbar } from "@/components/ui/Navbar";
import { TbSmartHome } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { BarChartComponent } from "@/components/ui/BarChartComponent";
import { Pichart } from "@/components/ui/Pichart";


export function HomePage() {
    const [activePanel, setActivePanel] = useState<"task" | "data">("task");
    const [activeSection, setActiveSection] = useState("home");

    return (
        <div className="h-full bg-gray-100 flex flex-col">
            {/* Top Navbar */}
            <Navbar />

            <div className="flex h-full overflow-hidden">
                {/* Sidebar */}
                <div className="sideNavbar w-1/5 sm:w-[15%] h-full p-5 flex flex-col gap-8 items-center bg-gray-100">
                    {/* Main Navigation */}
                    <div className="navWrapper w-14 rounded-full flex flex-col gap-6 items-center bg-blue-100 p-3">
                        {[{ icon: TbSmartHome, name: "home" },
                        { icon: LuLayoutDashboard, name: "dashboard" },
                        { icon: CiMobile3, name: "mobile" }].map(({ icon: Icon, name }, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveSection(name)}
                                className={`flex items-center justify-center h-12 w-12 rounded-full text-gray-600 cursor-pointer transition-all duration-300 
                ${activeSection === name ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"}`}
                            >
                                <Icon className="text-3xl" />
                            </div>
                        ))}
                    </div>

                    {/* Settings & Notifications */}
                    <div className="navWrapper w-14 rounded-full flex flex-col gap-6 items-center bg-blue-100 p-3">
                        {[{ icon: IoNotificationsOutline, name: "notifications" },
                        { icon: IoSettingsOutline, name: "settings" }].map(({ icon: Icon, name }, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveSection(name)}
                                className={`flex items-center justify-center h-12 w-12 rounded-full text-gray-600 cursor-pointer transition-all duration-300 
                ${activeSection === name ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"}`}
                            >
                                <Icon className="text-3xl" />
                            </div>
                        ))}
                    </div>

                    {/* Preview Section */}
                    <div className="navWrapper w-14 rounded-full flex flex-col gap-6 items-center bg-blue-100 p-3">
                        <div
                            onClick={() => setActiveSection("preview")}
                            className={`flex items-center justify-center h-12 w-12 rounded-full text-gray-600 cursor-pointer transition-all duration-300 
              ${activeSection === "preview" ? "bg-blue-700 text-white" : "hover:bg-blue-700 hover:text-white"}`}
                        >
                            <VscPreview className="text-3xl" />
                        </div>
                    </div>
                </div>

                                
                {activeSection === "home" &&
                    <div className="w-4/5  mb-10 sm:w-[85%] h-auto sm:h-[450px] object-contain  p-6">
                        <h1 className="text-4xl font-bold mb-4">My Dashboard</h1>

                        {/* Charts Section */}
                        <div className="flex flex-col sm:flex-row w-full h-full gap-4">
                            {/* Bar Chart */}
                            <div className="flex flex-col w-full sm:w-[60%] h-full object-contain bg-blue-200 rounded-3xl  p-5 items-start justify-center gap-4">
                                <h1 className='text-start font-bold text-gray-700 text-2xl mt-2'>Bulk Looms sent (Monthly)</h1>
                                <div className='flex items-center h-full w-full justify-center'>
                                    <BarChartComponent />
                                </div>
                            </div>

                            {/* Pie Charts */}
                            <div className="flex flex-col w-full sm:w-[40%] h-full gap-4">
                                <div className="flex flex-col sm:flex-row h-full bg-blue-200 rounded-3xl   items-center justify-center">
                                    <h1 className='text-nowrap font-semibold text-gray-700 text-2xl ml-5'>Limited Used</h1>
                                    <Pichart />
                                </div>
                                <div className="flex flex-col sm:flex-row h-full bg-blue-200 rounded-3xl items-center justify-center">
                                    <h1 className='text-nowrap font-semibold text-gray-700 text-2xl ml-5'>Limited Used</h1>
                                    <Pichart />
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {activeSection === "dashboard" &&
                    <div className="w-4/5 mb-10  sm:w-[85%] h-auto sm:h-[450px] object-contain  p-6">


                        {/* Charts Section */}
                        <div className="flex flex-col w-full h-full gap-4">

                            {/* Bar Chart */}
                            <div className="flex flex-col w-full  sm:w-[60%] h-full object-contain  rounded-3xl  p-5 items-start justify-center gap-5">

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
                                    <div className="fisrt flex flex-col sm:flex-row w-full justify-between gap-5">
                                        <div className="bg-blue-100 aspect-square w-full flex items-center justify-between gap-5 flex-col py-14 rounded-3xl">
                                            <h1 className="text-center font-normal text-2xl capitalize">initial Bulk video creation</h1>
                                            <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-2 hover:bg-blue-800"><FaPlay />Start</button>
                                        </div>
                                        <div className="bg-blue-100 aspect-square w-full flex items-center justify-between gap-5 flex-col py-14 rounded-3xl">
                                            <h1 className="text-center font-normal text-2xl capitalize">Abort  current task</h1>
                                            <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-2 hover:bg-blue-800"><FaPlay />Stop</button>
                                        </div>
                                    </div>
                                    <div className="bg-blue-100 h-auto sm:h-20 w-full flex flex-col sm:flex-row py-5 px-10 items-center gap-4 rounded-3xl justify-between">
                                        <h1 className="text-center font-normal text-2xl capitalize">upload CSV to Start Task</h1>
                                        <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-1 hover:bg-blue-800"><FiUpload />Upload</button>

                                    </div>
                                </div>
                            </div>

                            {/* Pie Charts */}
                            <div className="flex w-full sm:w-[40%] h-full gap-4">
                                <div className="flex flex-col gap-5 p-3 h-full rounded-3xl   items-center justify-center">
                                    <div className="text-9xl border-gray-800  bg-white border-8 p-3 rounded-full">
                                        <FaPlayCircle />
                                    </div>
                                    <h1 className="text-center font-normal text-2xl capitalize">Upload your pre-recorded video</h1>
                                    <button className="bg-blue-700 px-12 py-4 text-white rounded-3xl flex items-center gap-1 hover:bg-blue-800"><FiUpload />Upload</button>
                                </div>
                            </div>
                        </div>
                    </div>}

                {!["home", "dashboard", "about", "contact"].includes(activeSection) && (
                    <div className="mainContainer w-[85%] h-[450px] flex flex-col items-center justify-center bg-gray-100 rounded-2xl p-6">
                        <div className="flex flex-col items-center">
                            <span className="text-6xl">🚧</span>
                            <h1 className="text-3xl font-semibold text-gray-800 mt-4">Page Under Progress</h1>
                            <p className="text-gray-600 mt-2 text-center">
                                We're working on something amazing. Stay tuned!
                            </p>
                        </div>
                    </div>

                )}
            </div>
            <footer className='flex items-center justify-center'>
                <p className='flex items-center text-xs'>Powered by
                    <img src={logosmall} alt="" className="h-10 w-10 object-contain" />Reachify
                </p>
            </footer>
        </div>
    );
}
