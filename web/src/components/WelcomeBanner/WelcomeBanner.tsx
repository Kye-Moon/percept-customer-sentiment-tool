import WelcomeBannerArrows from "../../images/svgs/WelcomeBannerArrows.svg"

const WelcomeBanner = () => {
  return (
    <div className="relative border p-4 sm:p-6 rounded-3xl overflow-hidden mb-8">
      {/* Content */}
      <div className="relative text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Good afternoon, here’s is some of the best reviews we found  👍</h1>
      </div>
    </div>
  )
}

export default WelcomeBanner
