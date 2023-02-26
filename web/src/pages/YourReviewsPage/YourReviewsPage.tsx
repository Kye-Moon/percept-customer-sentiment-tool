import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const YourReviewsPage = () => {
  return (
    <>
      <MetaTags title="YourReviews" description="YourReviews page" />

      <h1>YourReviewsPage</h1>
      <p>
        Find me in <code>./web/src/pages/YourReviewsPage/YourReviewsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>yourReviews</code>, link to me with `
        <Link to={routes.yourReviews()}>YourReviews</Link>`
      </p>
    </>
  )
}

export default YourReviewsPage
