import AuthContainer from "../components/AuthContainer";
import AuthForm from "../components/AuthForm";

const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthForm formType="register" />
    </AuthContainer>
  );
};

export default RegisterPage;
