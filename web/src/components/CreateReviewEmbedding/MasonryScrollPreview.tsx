import PerceptLogo from "src/images/PerceptLogo.png";
import {MasonryScrollFakeReviews} from "src/resources/MasonryScrollFakeReviews";

interface MasonryScrollPreviewProps {
  backgroundColor: string
  cardColor: string
  textColor: string
  numberOfCards: number
}

export const MasonryScrollPreview = ({cardColor, textColor, numberOfCards}: MasonryScrollPreviewProps) => {

  function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <div className="gap-4 p-8 columns-1 md:columns-2 lg:columns-3">
        {MasonryScrollFakeReviews.map((review) => {
          return (
            <div className="mb-4 break-inside-avoid">
              <div className="card bg-base-100 shadow-xl" style={{background:cardColor}}>
                <div className="card-body">
                  <div className="flex  space-x-4  ">
                    <div>
                      <img src={PerceptLogo} className ="rounded-box w-full w-12 h-12" alt="..."/>
                    </div>
                    <div>
                      <h2 className="font-bold text-lg" style={{color:textColor}}>Stephen Smith</h2>
                      <p className="text-sm opacity-50" style={{color:textColor}}>CEO @ percept</p>
                    </div>
                  </div>
                  <div className="overflow-y-clip py-4 ">
                    <p className="text-md font-semibold overflow-y-clip" style={{color:textColor}}>
                      {review}
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
