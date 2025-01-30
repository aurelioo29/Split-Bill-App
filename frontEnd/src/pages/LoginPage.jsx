import Background from "../components/Background";
import assets from "../data/assets";

const LoginPage = () => {
  return (
    <Background>
      <div className="flex items-center justify-center h-screen ">
        <div className="flex flex-row items-center bg-amber-500 p-10 rounded-lg">
          <img src={assets.login[0]} alt="" width={800} />

          <h1>Testing</h1>
        </div>
      </div>
    </Background>
  );
};

export default LoginPage;
