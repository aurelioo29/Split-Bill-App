import AuthContainer from "../components/AuthContainer";
import AuthForm from "../components/AuthForm";

const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthForm formType="login" />
    </AuthContainer>
  );
};

export default LoginPage;
