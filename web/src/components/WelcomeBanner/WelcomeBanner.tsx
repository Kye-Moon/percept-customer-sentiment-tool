import WelcomeBannerArrows from "../../images/svgs/WelcomeBannerArrows.svg"

const WelcomeBanner = () => {
  return (
    <div className="relative bg-white p-4 sm:p-6 rounded-3xl overflow-hidden mb-8">

      {/* Background illustration */}
      <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
        <WelcomeBannerArrows/>
      </div>
      {/* Content */}
      <div className="relative text-black">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Good afternoon, here’s is some of the best reviews we found  👍</h1>
      </div>
    </div>
  )
}

export default WelcomeBanner
