import {act} from "react-dom/test-utils";
import {MockedProvider} from "@apollo/client/testing";
import {screen, waitFor} from "@testing-library/react";
import {render} from '@redwoodjs/testing/web'
import {CAMPAIGN_INITIAL_VALUES} from "src/graphql/query";
import {CampaignFormSection} from "src/components/CampaignForm/CampaignFormSection/CreateCampaignSection";
import {CreateEditAction} from "src/interfaces";
import {useLazyQuery} from "@apollo/client";

const mocks = [
  {
    request: {
      query: CAMPAIGN_INITIAL_VALUES,
      variables: {
        id: 1
      }
    },
    result: {
      data: {
        campaign: {
          id: 1,
          description: "Campaign 1 description",
          landingPageSlug: "campaign-1",
          status: "DRAFT",
          title: "Campaign 1",
          campaignLandingPage: {
            LogoUrl: "d",
            PageTitle: "d",
            campaignSlug: "d",
            pageMessage: "d",
            questionOne: "d",
            questionTwo: "d",
            questionThree: "d",
            questionFour: "d",
          },
          integrations: {
            id: 2,
            companyTwitterHandle: "d",
            productHuntPostUrl: "d",
            productHuntReviewsUrl: "d",
            twitterCompanyName: "d",
          }
        }
      }
    }
  }
]

const queryResult = {
    campaign: {
      id: 1,
      description: "Campaign 1 description",
      landingPageSlug: "campaign-1",
      status: "DRAFT",
      title: "Campaign 1",
      campaignLandingPage: {
        LogoUrl: "d",
        PageTitle: "d",
        campaignSlug: "d",
        pageMessage: "d",
        questionOne: "d",
        questionTwo: "d",
        questionThree: "d",
        questionFour: "d",
      },
      integrations: {
        id: 2,
        companyTwitterHandle: "d",
        productHuntPostUrl: "d",
        productHuntReviewsUrl: "d",
        twitterCompanyName: "d",
      }
    }
  }
const mockUseLazyQuery = jest.fn(() => {
  return [jest.fn(), {data: queryResult}]
})

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useLazyQuery: mockUseLazyQuery
}))


it('renders successfully when action is edit', async () => {
  render(
    <CampaignFormSection campaignId={1} action={CreateEditAction.EDIT}/>
  )

  await waitFor(() => {
    expect(screen.getByPlaceholderText(/stephen_abrams123/i)).toBeVisible()
  })
  await act(() => new Promise(resolve => setTimeout(resolve, 0)));

  await waitFor(() => {
    expect(screen.getByText(/Campaign 1/i)).toBeVisible()
  })
  expect(mockUseLazyQuery).toHaveBeenCalledWith(CAMPAIGN_INITIAL_VALUES, {variables: {id: 1}})



  screen.logTestingPlaygroundURL()
})
