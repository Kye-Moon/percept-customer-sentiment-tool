import type { FindReviewsWallQuery, FindReviewsWallQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import {useState} from "react";
import DisplayReviewCard from "src/components/Cards/DisplayReviewCard";

export const QUERY = gql`
  query FindReviewsWallQuery {
    filteredReviews(filter: ONWALL) {
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
}: CellFailureProps<FindReviewsWallQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({filteredRecommendedMentions}: CellSuccessProps<FindReviewsWallQuery, FindReviewsWallQueryVariables>) => {
  const [reviews, setReviews] = useState(filteredRecommendedMentions)
  return (
    <div>
      {reviews.map((mention) => {
        return (
          <div key={mention.id} className={'mb-4 break-inside-avoid'}>
            <DisplayReviewCard
              id={mention.id}
              body={mention.body}
              date={mention.createAt}
              profileUrl={mention.profileImageUrl}
              source={mention.mentionSource}
              username={mention.username}
             />
          </div>
        )
      })
      }
    </div>
  )
}
