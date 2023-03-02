export const FAVOURITE = gql`
  mutation FavouriteReviewMutation($id: Int!) {
    favouriteReview(id: $id){
      id
    }
  }
`

export const ADD_TO_WALL = gql`
  mutation AddReviewToWallMutation($id: Int!) {
    addReviewToWall(id: $id){
      id
    }
  }
`

export const ARCHIVE = gql`
  mutation ArchiveReviewMutation($id: Int!) {
    archiveReview(id: $id){
      id
    }
  }
`
