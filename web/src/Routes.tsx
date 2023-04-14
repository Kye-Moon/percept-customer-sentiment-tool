// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import {Private, Route, Router, Set} from '@redwoodjs/router'
import HomePage from "src/pages/HomePage/HomePage";
import CampaignPage from "src/pages/CampaignPage/CampaignPage";
import YourReviewsPage from './pages/YourReviewsPage/YourReviewsPage';
import AppLayout from "src/layouts/AppLayout/AppLayout";
import CampaignLandingPageTemplate from "src/pages/CampaignLandingPageTemplate/CampaignLandingPageTemplate";

import {useAuth} from './auth'


const Routes = () => {
  return (
    <Router useAuth={useAuth}>

      <Route path="/" page={HomePage} name="home"/>
      <Private unauthenticated={"home"}>
        <Route path="/leave-review/{id:string}" page={CampaignLandingPageTemplate} name="campaignLandingPageTemplate"/>
        <Route path="/create-campaign" page={CreateCampaignPage} name="createCampaign"/>
        <Route path="/dashboard" page={DashboardPage} name="dashboard"/>
        <Set wrap={AppLayout}>
          <Route path="/your-reviews" page={YourReviewsPage} name="yourReviews"/>
          <Route path="/campaign/{id:Int}" page={CampaignPage} name="campaign"/>
        </Set>
      </Private>
      <Route notfound page={NotFoundPage}/>
    </Router>
  )
}

export default Routes
