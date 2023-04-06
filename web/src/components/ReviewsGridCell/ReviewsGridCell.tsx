import type {FindReviewsGridQuery, FindReviewsGridQueryVariables} from 'types/graphql'
import type {CellSuccessProps, CellFailureProps} from '@redwoodjs/web'
import ReviewCard from "src/components/Cards/ReviewCard";
import {useEffect, useState} from "react";
import {useMutation} from "@redwoodjs/web";
import {ADD_TO_WALL, ARCHIVE, FAVOURITE} from "src/graphql/mutations";

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache'
  }
}
export const QUERY = gql`
  query FindReviewsGridQuery($filter: QueryFilter) {
    filteredReviews(filter: $filter) {
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

export const Failure = ({error}: CellFailureProps<FindReviewsGridQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({filteredReviews}: CellSuccessProps<FindReviewsGridQuery, FindReviewsGridQueryVariables>) => {
  const [reviews, setReviews] = useState(filteredReviews)
  const [favouriteMutate] = useMutation(FAVOURITE)
  const [archiveMutate] = useMutation(ARCHIVE)
  const [addToWallMutate] = useMutation(ADD_TO_WALL)

  useEffect(()=>{
    setReviews(filteredReviews)
  },[filteredReviews])

  const saveReviewToWall = (id:number) => {
    setReviews(reviews.filter((review) => review.id !== id))
    addToWallMutate({variables: {id: id}}).then()
  }
  const favouriteReview = (id:number) => {
    setReviews(reviews.filter((review) => review.id !== id))
    favouriteMutate({variables: {id: id}}).then()
  }
  const deleteReview = (id:number) => {
    setReviews(reviews.filter((review) => review.id !== id))
    archiveMutate({variables: {id: id}}).then()
  }
  return (
    <div>
      {reviews.map((mention) => {
        return (
          <div key={mention.id} className={'mb-6 px-12 break-inside-avoid'}>
            <ReviewCard
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
