import { Link } from "react-router"; // Menggunakan "react-router-dom" untuk routing
import logo from "../assets/logos.svg";
import pic from "../assets/picRight.svg";
import Background from "../components/Background";

const MainPage = () => {
  return (
    <Background>
      {/* Navigation */}
      <nav className="flex px-32 pt-10">
        <div className="flex justify-between items-center w-full">
          <Link className="flex flex-row items-center">
            <img src={logo} alt="mainLogo" width={150} />
            <h1 className="text-[#003633] font-bold text-4xl ml-2 tracking-widest">
              FairShare
            </h1>
          </Link>

          <Link
            to="/login"
            className="bg-white border-[#02A79D] border-2 py-2 px-6 rounded-lg shadow-2xl font-bold text-lg tracking-wide"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex items-center justify-between px-56 h-[80vh]">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold tracking-widest text-[#003633] leading-tight">
            Fair Splitting, <br />
            Happy Sharing.
          </h1>
          <p className="mt-10 text-lg text-[#003633] leading-relaxed font-extrabold tracking-widest">
            FairShare simplifies shared expenses for any occasion. Whether
            it&apos;s splitting dinner bills, group trips, or monthly
            subscriptions, we ensure every contribution is transparent and fair.
          </p>
          <Link
            to="/signup"
            className="mt-14 inline-block bg-[#02A79D] text-white py-3 px-6 rounded-md text-lg tracking-widest shadow-xl hover:bg-[#028D85] transition"
          >
            Get Started
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src={pic} alt="Illustration" className="w-[750px]" />
        </div>
      </div>
    </Background>
  );
};

export default MainPage;
