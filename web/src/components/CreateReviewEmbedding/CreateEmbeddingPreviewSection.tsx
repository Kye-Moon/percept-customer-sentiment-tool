import {TiledCarouselPreview} from "src/components/CreateReviewEmbedding/TiledCarouselPreview";
import {MasonryScrollPreview} from "src/components/CreateReviewEmbedding/MasonryScrollPreview";
import {EmbeddingStyle} from "src/components/CreateReviewEmbedding/CreateReviewEmbedding";

interface CreateEmbeddingPreviewSectionProps {
  backgroundColor: string
  cardColor: string
  textColor: string
  embeddingStyle: string
}

export const CreateEmbeddingPreviewSection = ({
                                                backgroundColor,
                                                cardColor,
                                                textColor,
                                                embeddingStyle,
                                              }: CreateEmbeddingPreviewSectionProps) => {
  return (
    <>
      <div className={'my-12'}>
        <div className={' '}>
          <h3 className={'text-2xl font-bold py-6'}> Preview</h3>
        </div>

        <div className="mockup-window border border-base-300">
          <div className="border-t border-base-300">
            {embeddingStyle === EmbeddingStyle.TiledCarousel &&
              <div className={`h-96 w-full flex flex-col place-content-center over`}
                   style={{background: backgroundColor}}>
                <TiledCarouselPreview
                  numberOfCards={5}
                  backgroundColor={backgroundColor}
                  cardColor={cardColor}
                  textColor={textColor}
                />
              </div>
            }

            {embeddingStyle === EmbeddingStyle.MasonryScroll &&
              <div className={'h-[700px] overflow-y-scroll no-scrollbar'} style={{background: backgroundColor}}>
                <MasonryScrollPreview
                  numberOfCards={15}
                  backgroundColor={backgroundColor}
                  cardColor={cardColor}
                  textColor={textColor}/>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
