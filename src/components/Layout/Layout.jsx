import MainContentWrapper from "../../ui/MainContentWrapper";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout({ children }) {
  return (
    <div className="">
      <MainContentWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </MainContentWrapper>
    </div>
  );
}

export default Layout;
