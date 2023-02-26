// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import {Router, Route, Set} from '@redwoodjs/router'
import HomePage from "src/pages/HomePage/HomePage";
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import NewMentionsPage from './pages/NewMentionsPage/NewMentionsPage';
import YourReviewsPage from './pages/YourReviewsPage/YourReviewsPage';
import AppLayout from "src/layouts/AppLayout/AppLayout";

const Routes = () => {
  return (
    <Router>
      <Set wrap={AppLayout}>
        <Route path="/your-reviews" page={YourReviewsPage} name="yourReviews"/>
        <Route path="/favourites" page={FavouritesPage} name="favourites"/>
        <Route path="/new-mentions" page={NewMentionsPage} name="newMentions"/>
        <Route path="/dashboard" page={DashboardPage} name="dashboard"/>
        <Route path="/" page={HomePage} name="home"/>
      </Set>
      <Route notfound page={NotFoundPage}/>
    </Router>
  )
}

export default Routes
