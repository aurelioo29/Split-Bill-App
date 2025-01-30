import Background from "../components/Background";
import errorAssets from "../assets/error.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <Background>
      <div className="flex items-center justify-center h-screen">
        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left max-w-4xl px-8">
          {/* Left Image */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <img src={errorAssets} alt="errorImage" />
          </div>

          {/* Right Text */}
          <div className="text-center ml-10 ">
            <h1 className="text-6xl font-bold tracking-widest text-[#003633] leading-tight">
              404
            </h1>
            <p className="mt-10 mb-20 text-lg text-[#003633] leading-relaxed font-extrabold tracking-widest">
              Oops! The page you are looking for does not exist.
            </p>
            <Link
              to={"/"}
              className="bg-[#003633] text-white border p-4 rounded-2xl drop-shadow-2xl border-none font-bold tracking-widest"
            >
              GO TO HOMEPAGE
            </Link>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default NotFound;
