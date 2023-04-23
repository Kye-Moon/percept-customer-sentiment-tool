import {HexColorInput, HexColorPicker} from "react-colorful";

interface CreateEmbeddingCustomisationsSectionProps {
  backgroundColor: string
  setBackgroundColor: (color: string) => void
  cardColour: string
  setCardColor: (color: string) => void
  textColour: string
  setTextColor: (color: string) => void
}

export const CreateEmbeddingCustomisationsSection = ({
                                                       backgroundColor,
                                                       setBackgroundColor,
                                                       cardColour,
                                                       setCardColor,
                                                       textColour,
                                                       setTextColor
                                                     }: CreateEmbeddingCustomisationsSectionProps) => {
  return (
    <>
      <div className={' mt-8'}>
        <h3 className={'text-2xl font-bold py-6'}> Customisations</h3>
      </div>
      <div className={'row-span-3 flex space-x-12'}>
        <div className={' '}>
          <h1 className={'font-semibold text-lg py-2'}>Background Colour</h1>
          <div className={'flex flex-col place-items-center space-y-2'}>
            <HexColorPicker color={backgroundColor} onChange={setBackgroundColor}/>
            <HexColorInput className={'bg-base-100 rounded-lg px-2 font-bold border'} color={backgroundColor}
                           onChange={setBackgroundColor} prefixed/>
          </div>
        </div>
        <div className={''}>
          <h1 className={'font-semibold text-lg py-2'}>Card Colour</h1>
          <div className={'flex flex-col place-items-center space-y-2'}>
            <HexColorPicker color={cardColour} onChange={setCardColor}/>
            <HexColorInput className={'bg-base-100 rounded-lg px-2 font-bold border'} color={cardColour}
                           onChange={setCardColor} prefixed/>
          </div>
        </div>

        <div className={''}>
          <h1 className={'font-semibold text-lg py-2'}>Text Colour</h1>
          <div className={'flex flex-col place-items-center space-y-2'}>
            <HexColorPicker color={textColour} onChange={setTextColor}/>
            <HexColorInput className={'bg-base-100 rounded-lg px-2 font-bold border'} color={textColour}
                           onChange={setTextColor} prefixed/>
          </div>
        </div>
      </div>
    </>
  )
}
