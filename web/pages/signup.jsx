import Back from "components/forms/Back";
import Main from "components/layout/Main";
import { SignupForm } from "components/pages/signup";
import Head from "next/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>
      <Main>
        <SignupForm />
        <Back />
      </Main>
    </>
  );
};

export default Signup;