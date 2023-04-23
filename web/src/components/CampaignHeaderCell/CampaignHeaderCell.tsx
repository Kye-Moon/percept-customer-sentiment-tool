import type {FindCampaignHeaderQuery, FindCampaignHeaderQueryVariables,} from 'types/graphql'
import type {CellFailureProps, CellSuccessProps} from '@redwoodjs/web'

export const QUERY = gql`
  query FindCampaignHeaderQuery($id: Int!) {
    campaign: campaign(id: $id) {
      id
      title
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
                          error,
                        }: CellFailureProps<FindCampaignHeaderQueryVariables>) => (
  <div style={{color: 'red'}}>Error: {error?.message}</div>
)

export const Success = ({campaign}: CellSuccessProps<FindCampaignHeaderQuery, FindCampaignHeaderQueryVariables>) => {


  return (
    <div className="sm:flex sm:justify-between sm:items-center mb-8 mt-8">

      {/* Left: Title */}
      <div className="mb-4 sm:mb-0 py-8 space-y-2 ">
        <h1 className="text-2xl md:text-6xl text-primary font-bold">{campaign.title}</h1>
        <h1 className="text-xl md:text-xl  font-bold">{campaign.description}</h1>
      </div>

      {/* Right: Actions */}
      <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
        {/* Add board button */}
      </div>
    </div>)
}
