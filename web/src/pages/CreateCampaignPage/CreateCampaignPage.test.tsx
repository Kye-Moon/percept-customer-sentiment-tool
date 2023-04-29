import {render} from '@redwoodjs/testing/web'
import "@testing-library/jest-dom";
import {waitFor, screen} from "@testing-library/react";
import {MockedProvider} from "@apollo/client/testing";
import {CAMPAIGN_INITIAL_VALUES} from "src/graphql/query";

import CreateCampaignPage from './CreateCampaignPage'
import {act} from "react-dom/test-utils";
import {useForm, FormProvider} from "react-hook-form";

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

describe('CreateCampaignPage', () => {
  it('renders successfully when action is create', () => {
    expect(() => {
      render(<CreateCampaignPage id={1} action={"create"}/>)
    }).not.toThrow()
  })

  it('renders successfully when action is edit', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreateCampaignPage id={1} action={"edit"}/>
      </MockedProvider>
    )
    await act(() => new Promise(resolve => setTimeout(resolve, 0)));

    await waitFor(() => {
      expect(screen.getByPlaceholderText(/stephen_abrams123/i)).toBeVisible()
    })


    screen.logTestingPlaygroundURL()
    expect(screen.getByRole("phModalToggle")).not.toBeChecked()
  })
})




