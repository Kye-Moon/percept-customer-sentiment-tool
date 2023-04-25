import React, {useEffect, useState} from "react";
import {CreateEmbeddingPreviewSection} from "src/components/CreateReviewEmbedding/CreateEmbeddingPreviewSection";
import {CreateEmbeddingStylesSection} from "src/components/CreateReviewEmbedding/CreateEmbeddingStylesSection";
import {
  CreateEmbeddingCustomisationsSection
} from "src/components/CreateReviewEmbedding/CreateEmbeddingCustomisationsSection";

export enum EmbeddingStyle {
  TiledCarousel = 'TiledCarousel',
  MasonryScroll = 'MasonryScroll',
}

export enum EmbeddingStyleDefaultHeight {
  TiledCarousel = '288px',
  MasonryScroll = '800px',
}

const CreateReviewEmbedding = () => {
  const [backgroundColor, setBackgroundColor] = useState("#e8e8e8");
  const [cardColour, setCardColor] = useState("#ffffff");
  const [textColour, setTextColor] = useState("#1f1f1f");
  const [embeddingStyle,setEmbeddingStyle] = useState(EmbeddingStyle.TiledCarousel)

  const getEmbeddingCode = (backgroundColor,cardColor,textColor,embeddingStyle) => {
    const host = `http://127.0.0.1:3000/embed?`
    const params = new URLSearchParams({
      background: backgroundColor,
      card: cardColor,
      text: textColor,
      style: embeddingStyle,
      slug: "webwave"
    })
    return host + params.toString()
  }

  return (
    <div className={"grid  grid-cols-1 grid-rows-12 grid-flow-row "}>
      <div className={' '}>
        <h3 className={'text-2xl font-bold py-6'}> Embed Code</h3>
      </div>
      <div className="w-full p-4 bg-gray-800 rounded-xl text-white/75">
        <pre><code className={'text-primary'}>{"<iframe"}</code></pre>
        <pre><code className={'text-white/70 ml-4'}>{'width="100%"'}</code></pre>
        <pre><code className={'text-white/70  ml-4'}>{
          'height='+'"'+`${EmbeddingStyleDefaultHeight[embeddingStyle]}` +'"'
        }</code></pre>
        <pre className={"ml-4 text-accent/70"}><code>{"src="+'"'+`${getEmbeddingCode(backgroundColor,cardColour,textColour,embeddingStyle)}`+'"' +">"}</code></pre>
        <pre><code className={'text-primary'}>{"</iframe>"}</code></pre>
      </div>
      <CreateEmbeddingStylesSection
        setEmbeddingStyle={setEmbeddingStyle}
        embeddingStyle={embeddingStyle}
      />
      <CreateEmbeddingCustomisationsSection
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
        cardColour={cardColour}
        setCardColor={setCardColor}
        textColour={textColour}
        setTextColor={setTextColor}
      />

        <CreateEmbeddingPreviewSection
          embeddingStyle={embeddingStyle}
          backgroundColor={backgroundColor}
          cardColor={cardColour}
          textColor={textColour}
        />
    </div>
  )
}

export default CreateReviewEmbedding
