import {MetaTags} from '@redwoodjs/web'

import Header from "src/pages/HomePage/Header";


const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <div className="flex flex-col min-h-screen overflow-hidden">

        {/*  Site header */}
        <Header />
        <main className="grow">


          {/*<HeroHome />*/}
          {/*<FeaturesHome />*/}
          {/*<FeaturesBlocks />*/}
          {/*<FeaturesWorld />*/}
          {/*<News />*/}
          {/*<Cta />*/}

        </main>

      </div>
    </>
  )
}

export default HomePage
