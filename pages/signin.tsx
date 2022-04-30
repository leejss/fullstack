import AuthForm from "../components/AuthForm";

const SigninPage = () => {
  return <AuthForm mode="signin" />;
};

// Set Layout
SigninPage.pageType = "auth";

export default SigninPage;
