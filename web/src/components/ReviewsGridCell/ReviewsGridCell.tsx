import type {FindReviewsGridQuery, FindReviewsGridQueryVariables} from 'types/graphql'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import UsersTilesCard from "src/components/Cards/UsersTilesCard";
import {useState} from "react";

export const QUERY = gql`
  query FindReviewsGridQuery {
    recommendedMentions {
      body
      createAt
      externalReference
      id
      mentionSource
      profileImageUrl
      userDescription
      username
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<FindReviewsGridQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({recommendedMentions}: CellSuccessProps<FindReviewsGridQuery, FindReviewsGridQueryVariables>) => {
  const [reviews, setReviews] = useState(recommendedMentions)

  const saveReviewToWall = (id:number) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }
  const favouriteReview = (id:number) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }
  const deleteReview = (id:number) => {
    setReviews(reviews.filter((review) => review.id !== id))
  }
  return (
    <div>
      {reviews.map((mention) => {
        return (
          <div key={mention.id} className={'mb-4 break-inside-avoid'}>
            <UsersTilesCard
              id={mention.id}
              body={mention.body}
              date={mention.createAt}
              profileUrl={mention.profileImageUrl}
              source={mention.mentionSource}
              username={mention.username}
              deleteReview={deleteReview}
              favouriteReview={favouriteReview}
              saveReviewToWall={saveReviewToWall}/>
          </div>
        )
      })
      }
    </div>
  )

}
