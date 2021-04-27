import Countries from "../components/Countries";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Logo />
      <h1> Accueil</h1>
      <Countries />
    </div>
  );
};

export default Home;
