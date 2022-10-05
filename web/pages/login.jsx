import Back from "components/forms/Back";
import Main from "components/layout/Main";
import { LoginForm } from "components/pages/login";
import Head from "next/head";

const Signup = () => {
  return (
    <>
      <Head>
        <title>Log in</title>
      </Head>
      <Main>
        <LoginForm />
        <Back />
      </Main>
    </>
  );
};

export default Signup;