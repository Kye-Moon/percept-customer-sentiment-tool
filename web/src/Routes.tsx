// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import {Router, Route, Set, Private} from '@redwoodjs/router'
import HomePage from "src/pages/HomePage/HomePage";
import NewMentionsPage from './pages/NewMentionsPage/NewMentionsPage';
import YourReviewsPage from './pages/YourReviewsPage/YourReviewsPage';
import AppLayout from "src/layouts/AppLayout/AppLayout";
import homePage from "src/pages/HomePage/HomePage";

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home"/>
      <Private unauthenticated={"home"}>
      <Route path="/create-campaign" page={CreateCampaignPage} name="createCampaign" />
      <Route path="/dashboard" page={DashboardPage} name="dashboard"/>

      <Set wrap={AppLayout}>
        <Route path="/your-reviews" page={YourReviewsPage} name="yourReviews"/>
        <Route path="/new-mentions" page={NewMentionsPage} name="newMentions"/>

      </Set>
      </Private>
      <Route notfound page={NotFoundPage}/>
    </Router>
  )
}

export default Routes
