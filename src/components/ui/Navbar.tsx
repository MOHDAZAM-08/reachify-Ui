import logo from "../../assets/Reachify (32).png";

export function Navbar() {
  return (
    <div className="container flex items-center px-10 py-4 w-full">
      <div className="flex justify-between w-full items-center">
        {/* Left Side - Logo and Brand Name */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
          <p className="font-semibold text-lg">Loomify</p>
        </div>

        {/* Right Side - Greeting and Profile Image */}
        <div className="flex items-center gap-2">
          <p className="font-semibold text-lg whitespace-nowrap">Hi, Anny</p>
          <div className="h-16 w-16">
          <img
            src="https://img.freepik.com/free-vector/man-profile-account-picture_24908-81754.jpg?t=st=1738946452~exp=1738950052~hmac=510be33af448b0a5d3394bd1af53887986f4572a3dee510c804bab3a3dfb6cca&w=740"
            alt="User Avatar"
            className="h-full w-full object-contain rounded-full"
          />
           </div>
        </div>
      </div>
    </div>
  );
}
