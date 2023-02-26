import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import HeroHome from "src/pages/HomePage/partials/HeroHome";
import FeaturesHome from "src/pages/HomePage/partials/FeaturesHome";
import FeaturesBlocks from "src/pages/HomePage/partials/FeaturesBlocks";
import FeaturesWorld from "src/pages/HomePage/partials/FeaturesWorld";
import News from "src/pages/HomePage/partials/News";
import Cta from "src/pages/HomePage/partials/Cta";
import Footer from "src/pages/HomePage/partials/Footer";
import Header from "src/pages/HomePage/partials/Header";


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />


        <main className="grow">


          <HeroHome />
          <FeaturesHome />
          <FeaturesBlocks />
          <FeaturesWorld />
          <News />
          <Cta />

        </main>

          Site footer
        <Footer />

      </div>
    </>
  )
}

export default HomePage
