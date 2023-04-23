import {EmbeddingStyle} from "src/components/CreateReviewEmbedding/CreateReviewEmbedding";
import React, {SetStateAction} from "react";

interface CreateEmbeddingStylesSectionProps {
  setEmbeddingStyle: React.Dispatch<SetStateAction<EmbeddingStyle>>
  embeddingStyle: EmbeddingStyle
}

export const CreateEmbeddingStylesSection = ({setEmbeddingStyle, embeddingStyle}:CreateEmbeddingStylesSectionProps) => {
  return (
    <>
      <div className={' mt-8'}>
        <h3 className={'text-2xl font-bold py-6'}> Style</h3>
      </div>
      <div className={'row-span-1 flex space-x-12'}>
        <div>
          <input type="radio" name="radio-1" className="radio" onClick={()=>{setEmbeddingStyle(EmbeddingStyle.TiledCarousel)}} checked={embeddingStyle == EmbeddingStyle.TiledCarousel} />
          <label>Tiled Carousel</label>
        </div>
        <div>
          <input type="radio" name="radio-1" className="radio" onClick={()=>{setEmbeddingStyle(EmbeddingStyle.MasonryScroll)}} checked={embeddingStyle == EmbeddingStyle.MasonryScroll} />
          <label> Masonry Scroll</label>
        </div>
        <div>
          <input type="radio" name="radio-1" className="radio" onClick={()=>{setEmbeddingStyle(EmbeddingStyle.Tiled)}} checked={embeddingStyle == EmbeddingStyle.Tiled} />
          <label> Tiled</label>
        </div>
      </div>
    </>
  )
}
