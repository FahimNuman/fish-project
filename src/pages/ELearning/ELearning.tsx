import Advertisement from "../../components/ELearning/Advertisement";
import Cards from "../../components/ELearning/Cards";
import EnrollCourse from "../../components/ELearning/EnrollCourse";
import Explore from "../../components/ELearning/Explore";
import HeroELearning from "../../components/ELearning/HeroELearning";
import Request from "../../components/ELearning/Request";

import Subscribe from "../../components/ELearning/Subscribe";

export default function ELearning() {
  return (
    <div className="max-w-layout mx-auto">
      <HeroELearning />
      <Cards />
      <Advertisement />
      <Explore />
      <Request />
      <Advertisement />
      {/* <EnrollCourse /> */}
      <Subscribe />
    </div>
  );
}