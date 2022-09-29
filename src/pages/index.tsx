import type { NextPage } from "next";
import PageHead from "../components/PageHead";
import Banner from "../features/banner/Banner";
import Modal from "../features/modal/Modal";

const Home: NextPage = () => {
  return (
    <div className="app justify-center items-center">
      <PageHead />
      <Banner />
      <Modal />
    </div>
  );
};

export default Home;
