interface LoadingPulseDotsProps {
  numberOfDots: number
}
export const LoadingPulseDots = ({numberOfDots}:LoadingPulseDotsProps) => {

  return (
    <>
      {
        [...Array(numberOfDots)].map((_, index) => {
          return (
            <span className="relative flex h-8 w-8" key={index}>
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/50 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-8 w-8 bg-primary/50"></span>
            </span>
          )
        })

      }
    </>
  )
}
