import logosmall from '../assets/Untitled design (49).png';

import { Navbar } from "@/components/ui/Navbar";
import { TbSmartHome } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiMobile3 } from "react-icons/ci";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { BarChartComponent } from "@/components/ui/BarChartComponent";
import { Pichart } from "@/components/ui/Pichart";


export function HomePage() {
  return (
    <div className="h-full bg-gray-100 flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex h-full overflow-hidden">
        {/* Sidebar */}
        <div className="sideNavbar w-[15%] h-full p-5 flex flex-col gap-8  items-center">
          {/* Main Navigation */}
          <div className="navWrapper w-14 rounded-full flex flex-col gap-6 items-center bg-blue-100 p-3">
            {[TbSmartHome, LuLayoutDashboard, CiMobile3].map((Icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center hover:bg-blue-700 hover:rounded-full h-12 w-12 hover:text-white text-gray-600 cursor-pointer transition-all duration-300"
              >
                <Icon className="text-3xl" />
              </div>
            ))}
          </div>

          {/* Settings & Notifications */}
          <div className="navWrapper w-14 rounded-full flex flex-col gap-6 items-center bg-blue-100 p-3">
            {[IoNotificationsOutline, IoSettingsOutline].map((Icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center hover:bg-blue-700 hover:rounded-full h-12 w-12 hover:text-white text-gray-600 cursor-pointer transition-all duration-300"
              >
                <Icon className="text-3xl" />
              </div>
            ))}
          </div>

          {/* Preview Section */}
          <div className="navWrapper w-14 rounded-full flex flex-col gap-6 items-center bg-blue-100 p-3">
            <div className="flex items-center justify-center hover:bg-blue-700 hover:rounded-full h-12 w-12 hover:text-white text-gray-600 cursor-pointer transition-all duration-300">
              <VscPreview className="text-3xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mainContainer w-[85%] h-[450px] object-contain  p-6">
          <h1 className="text-4xl font-bold mb-4">My Dashboard</h1>

          {/* Charts Section */}
          <div className="flex w-full h-full gap-4">
            {/* Bar Chart */}
            <div className="flex flex-col w-[60%] h-full object-contain bg-blue-200 rounded-3xl  p-5 items-start justify-center gap-4">
                <h1 className='text-start font-bold text-gray-700 text-2xl mt-2'>Bulk Looms sent (Monthly)</h1>
                <div className='flex items-center justify-center'>

              <BarChartComponent />
                </div>
            </div>

            {/* Pie Charts */}
            <div className="flex flex-col w-[40%] h-full gap-4">
              <div className="flex h-full bg-blue-200 rounded-3xl   items-center justify-center">
                <h1 className='text-nowrap font-semibold text-gray-700 text-2xl ml-5'>Limited Used</h1>
                <Pichart />
              </div>
              <div className="flex h-full bg-blue-200 rounded-3xl items-center justify-center">
             <h1 className='text-nowrap font-semibold text-gray-700 text-2xl ml-5'>Limited Used</h1>
                <Pichart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='flex items-center justify-center'>
        <p className='flex items-center text-xs'>Powered by 
            <img src={logosmall} alt="" className="h-10 w-10 object-contain" />Reachify
            </p>
      </footer>
    </div>
  );
}
