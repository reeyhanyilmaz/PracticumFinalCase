import type { NextPage } from "next";
import PageHead from "../components/PageHead";
import Banner from "../features/banner/Banner";
import Modals from "../features/modals/ModalComponent";

const Home: NextPage = () => {
  return (
    <div className="app justify-center items-center">
      <PageHead />
      <Banner />
      <Modals />
    </div>
  );
};

export default Home;
