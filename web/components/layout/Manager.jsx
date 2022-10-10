import Main from "./elements/Main";
import NavBar from "./elements/NavBar";
import Footer from "./elements/Footer";

const Manager = ({ children }) => {
  return (
    <>
      <NavBar bgColor="bg-red-200" accountManagement={true} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Manager;
