import Background from "./Background";
import SwiperSlider from "./SwiperSlider";

import { login } from "../data/assets";
import PropTypes from "prop-types";

const AuthContainer = ({ children }) => {
  return (
    <Background>
      <div className="flex items-center justify-center h-screen">
        {/* Container utama dengan flex */}
        <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden w-full px-20">
          {/* Bagian kiri: Gambar */}
          <div className="w-1/2 min-h-24">
            <SwiperSlider images={login} />
          </div>

          {/* Bagian kanan: Formulir */}
          <div className="w-1/2 p-10 ml-10 text-[#003633]">{children}</div>
        </div>
      </div>
    </Background>
  );
};

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContainer;
