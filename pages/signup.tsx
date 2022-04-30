import AuthForm from "../components/AuthForm";

const SignupPage = () => {
  return <AuthForm mode="signup" />;
};

SignupPage.pageType = "auth";

export default SignupPage;
