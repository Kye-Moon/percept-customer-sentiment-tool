import type {CampaignReview, FindReviewsGridQuery, FindReviewsGridQueryVariables} from 'types/graphql'
import {ReviewStatus} from "types/graphql";
import type {CellFailureProps, CellSuccessProps} from '@redwoodjs/web'
import {useMutation} from "@redwoodjs/web";
import ReviewCard from "src/components/Cards/ReviewCard";
import {useEffect, useState} from "react";
import {useParams} from "@redwoodjs/router";
import {UPDATE_REVIEW} from "src/graphql/mutations";

export const beforeQuery = (props) => {
  return {
    variables: props,
    fetchPolicy: 'no-cache'
  }
}
export const QUERY = gql`
  query FindReviewsGridQuery($campaignId: Int!) {
    campaignReviews(campaignId: $campaignId) {
      review {
        body
        createAt
        externalReference
        id
        mentionSource
        status
        profileImageUrl
        userDescription
        username
      }
    }
  }
`

export const Loading = () => {
  return (
    <div>
      <div className={'flex flex-col break-inside-avoid py-12 place-items-center justify-center'}>

      </div>
    </div>
  )
}

export const Empty = () => {
  return (
    <>
      <div>
        <h1 className={'text-accent font-semibold text-2xl'}>You dont have any reviews yet</h1>
      </div>
    </>
  )
}

export const Failure = ({error}: CellFailureProps<FindReviewsGridQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({campaignReviews}: CellSuccessProps<FindReviewsGridQuery, FindReviewsGridQueryVariables>) => {
  const {tab} = useParams()

  const [newReviews, setNewReviews] = useState<CampaignReview[]>(campaignReviews.filter((mention) => mention.review.status === "NEW") as CampaignReview[])
  const [recommendedReviews, setRecommendedReviews] = useState<CampaignReview[]>(campaignReviews.filter((mention) => mention.review.status === "RECCOMENDED") as CampaignReview[])
  const [favouriteReviews, setFavouriteReviews] = useState<CampaignReview[]>(campaignReviews.filter((mention) => mention.review.status === "FAVORITE") as CampaignReview[])
  const [archivedReviews, setArchivedReviews] = useState<CampaignReview[]>(campaignReviews.filter((mention) => mention.review.status === "ARCHIVED") as CampaignReview[])

  const [displayedReviews, setDisplayedReviews] = useState(newReviews)

  const [reviewUpdate] = useMutation(UPDATE_REVIEW)

  const updateReviewsGridCellReviewsState = (campaignReview: CampaignReview, newStatus: ReviewStatus) => {
    switch (campaignReview.review.status) {
      case "NEW":
        console.log("new")
        addReviewToState(campaignReview, newStatus)
        setDisplayedReviews(displayedReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        setNewReviews(newReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        break;
      case "RECCOMENDED":
        console.log("reccomended")
        addReviewToState(campaignReview, newStatus)
        setDisplayedReviews(displayedReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        setRecommendedReviews(recommendedReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        break;
      case "FAVORITE":
        console.log("favorite")
        addReviewToState(campaignReview, newStatus)
        setDisplayedReviews(displayedReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        setFavouriteReviews(favouriteReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        break;
      case "ARCHIVED":
        console.log("archived")
        addReviewToState(campaignReview, newStatus)
        setDisplayedReviews(displayedReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        setArchivedReviews(archivedReviews.filter((mention) => mention.review.id !== campaignReview.review.id))
        break;
    }
  }

  const addReviewToState = (campaignReview: CampaignReview, newStatus: ReviewStatus) => {
    switch (newStatus) {
      case "NEW":
        campaignReview.review.status = newStatus
        setNewReviews([...newReviews, campaignReview])
        break;
      case "RECCOMENDED":
        campaignReview.review.status = newStatus
        setRecommendedReviews([...recommendedReviews, campaignReview])
        break;
      case "FAVORITE":
        campaignReview.review.status = newStatus
        setFavouriteReviews([...favouriteReviews, campaignReview])
        break;
      case "ARCHIVED":
        campaignReview.review.status = newStatus
        setArchivedReviews([...archivedReviews, campaignReview])
        break;
    }
  }

  useEffect(() => {
    switch (tab) {
      case "new":
        setDisplayedReviews(newReviews)
        break;
      case "recommended":
        setDisplayedReviews(recommendedReviews)
        break;
      case "favourites":
        setDisplayedReviews(favouriteReviews)
        break;
      case "archived":
        setDisplayedReviews(archivedReviews)
        break;
    }
  }, [tab])

  const reviewUpdateHandler = (campaignReview: CampaignReview, newStatus: ReviewStatus) => {
    updateReviewsGridCellReviewsState(campaignReview, newStatus)
    reviewUpdate({
      variables: {
        id: campaignReview.review.id,
        input: {
          status: newStatus
        }
      }
    }).then(r => console.log(r))
  }

  return (
    <div>
      {displayedReviews.map((campaignReview) => {
        return (
          <div key={campaignReview.id} className={'mb-6 gap-6 break-inside-avoid'}>
            <ReviewCard
              tab={tab}
              campaignReview={campaignReview}
              reviewUpdateHandler={reviewUpdateHandler}
            />
          </div>
        )
      })
      }
    </div>
  )

}
