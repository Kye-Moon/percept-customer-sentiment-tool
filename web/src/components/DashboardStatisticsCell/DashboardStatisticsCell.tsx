import type { DashboardStatisticsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query DashboardStatisticsQuery {
    dashboardStatistics {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
 // <div style={{ color: 'red' }}>Error: {error?.message}</div>
  <div className={'flex justify-between'}>
    <div className="stats ">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <div className="stat-title">Campaigns</div>
        <div className="stat-value text-primary">25.6K</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
               className="inline-block w-8 h-8 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div className="stat-title">Total Reviews</div>
        <div className="stat-value text-secondary">2.6M</div>
      </div>
      <div className="stat">
        <div className="stat-title">Positive Perception</div>
        <div className="stat-value">86%</div>
      </div>
    </div>
    <div className="flex">
      <div className="stat">
        <div className="stat-title">Current Plan</div>
        <div className="stat-value ">Free</div>
      </div>
      <div className="stat place-content-center">
        <div className="btn btn-outline btn-primary btn-md">Upgrade</div>
      </div>
    </div>
  </div>
)

export const Success = ({
  dashboardStatistics,
}: CellSuccessProps<DashboardStatisticsQuery>) => {
  return (
    <div>

    </div>
  )
}
