import MainContentWrapper from "../../ui/MainContentWrapper";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div className="bg-mainColor">
      <MainContentWrapper>
        <Header />
        <main>{children}</main>
        <Footer
          title="Contact Info"
          size="text-[3rem]"
          color="text-black"
          fontWeight="font-bold"
        />
      </MainContentWrapper>
    </div>
  );
}

export default Layout;
