import PerceptLogo from "src/images/PerceptLogo.png";
interface TiledCarouselPreviewProps {
  backgroundColor: string
  cardColor: string
  textColor: string
  numberOfCards: number
}
export const TiledCarouselPreview = ({cardColor,textColor, numberOfCards}:TiledCarouselPreviewProps) => {
  return (
    <>
      <div className=" carousel carousel-start rounded-box flex justify-center space-x-6">
        {Array.from(Array(numberOfCards)).map((_, index) => {
          return (
              <div className={'carousel-item'}>
                <div className={"card w-96 shadow-sm  overflow-y-clip"} style={{background:cardColor}}>
                  <div className="card-body space-y-6 h-1/2">
                    <div className="flex  space-x-4  ">
                      <div>
                        <img src={PerceptLogo} className ="rounded-box w-full w-12 h-12" alt="..."/>
                      </div>
                      <div>
                        <h2 className="font-bold text-lg" style={{color:textColor}}>Stephen Smith</h2>
                        <p className="text-sm text-gray-500" style={{color:textColor}}>CEO @ percept</p>
                      </div>
                    </div>
                    <div className="overflow-y-clip  ">
                      <p className="text-md font-semibold overflow-y-clip" style={{color:textColor}}>
                        I've used @Superhuman for just 5 hours since my onboarding with their team and my life is officially changed. I have never gotten pond to
                      </p>
                    </div>
                  </div>
                </div>
              </div>

          )
        })}
      </div>
    </>
  )
}
