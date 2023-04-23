import ProductHuntLogo from "src/images/product-hunt-logo.png";
import TwitterLogo from "src/images/twitter_logo.png";
import PerceptLogo from 'src/images/PerceptLogo.png'

export const getReviewSourceImage = (source:ReviewSource) => {
  switch (source) {
    case ReviewSource.PRODUCTHUNT:
      return ProductHuntLogo;
    case ReviewSource.TWITTER:
      return TwitterLogo;
    case ReviewSource.PERCEPT:
      return PerceptLogo;

  }

}
export enum ReviewSource {
  PRODUCTHUNT = 'producthunt',
  TWITTER = 'twitter',
  FACEBOOK = 'facebook',
  LINKEDIN = 'linkedin',
  PERCEPT = 'percept',
  GOOGLE = 'google',
}
