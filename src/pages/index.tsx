import type { NextPage } from "next";
import PageHead from "../components/PageHead";
import Banner from "../features/banner/Banner";
import Body from "../features/modal/Body";

const Home: NextPage = () => {
  return (
    <div className="app justify-center items-center">
      <PageHead />
      <Banner />
      <Body />
    </div>
  );
};

export default Home;
