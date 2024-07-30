import { useSelector } from "react-redux";

const About = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      <img src={currentUser.avatar} alt="" />
    </div>
  );
};

export default About;
