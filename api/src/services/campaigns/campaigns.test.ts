import {campaigns, createCampaign, updateCampaign} from './campaigns'
import {createCampaignIntegration} from "src/services/campaignIntegrations/campaignIntegrations";
import {standard} from "src/services/campaigns/campaigns.scenarios";
import {createCampaignLandingPage} from "src/services/campaignLandingPages/campaignLandingPages";
import {db} from "src/lib/db";


jest.mock('src/services/campaignIntegrations/campaignIntegrations', () => ({
  sendIntegrationRequest: jest.fn(),
  createCampaignIntegration: jest.fn(),
}))

jest.mock("src/services/campaignLandingPages/campaignLandingPages", () => ({
  createCampaignLandingPage: jest.fn(),
}))

describe('campaigns', () => {
  scenario('standard', 'returns all campaigns', async (scenario) => {
    const result = await campaigns()

    expect(result.length).toEqual(Object.keys(scenario.campaign).length)
  })

  it("createCampaign calls createCampaignIntegration and createCampaignLandingPage with correct inputs", async () => {
    mockCurrentUser({id: 123, name: 'Rob', sub: "123"})
    const campaignInput = {
      title: "test title", description: "test description",
      integrations: {productHuntReviewsUrl: "test"},
      landingPageDetails: {
        title: "test title",
        message: "test message",
        questions: ["test question"],
        landingPageSlug: "test",
        logoImageUrl: "test url",
      },
    }

    const result = await createCampaign({
      input: campaignInput
    })

    expect(result.title).toEqual("test title")
    expect(createCampaignIntegration).toHaveBeenCalledWith({
      input: {
        campaignId: result.id,
        productHuntReviewsUrl: "test",
      }
    })
    expect(createCampaignLandingPage).toHaveBeenCalledWith({
      input: {
        campaignId: result.id,
        campaignSlug: "test",
        pageTitle: "test title",
        pageMessage: "test message",
        questions: ["test question"],
        logoUrl: "test url",
      }
    })
  })

  it("createCampaign calls createCampaignIntegration", async () => {
    mockCurrentUser({id: 123, name: 'Rob', sub: "123"})
    const campaignInput = {
      title: "test title", description: "test description",
      integrations: {},
      landingPageDetails: {
        title: "test title",
        message: "test message",
        questions: ["test question"],
        landingPageSlug: "test",
        logoImageUrl: "test url",
      },
    }

    const result = await createCampaign({
      input: campaignInput
    })

    expect(result.title).toEqual("test title")
    expect(createCampaignIntegration).not.toHaveBeenCalled()
    expect(createCampaignLandingPage).toHaveBeenCalledTimes(1)
  })

  it("updateCampaign can update campaign Integrations", async () => {
    mockCurrentUser({id: 123, name: 'Rob', sub: "123"})
    const campaignInput = {
      title: "test title", description: "test description",
      integrations: {},
      landingPageDetails: {
        title: "test title",
        message: "test message",
        questions: ["test question"],
        landingPageSlug: "test",
        logoImageUrl: "test url",
      },
    }

    const result = await createCampaign({
      input: campaignInput
    })

    expect(result.title).toEqual("test title")
    expect(createCampaignIntegration).not.toHaveBeenCalled()
    expect(createCampaignLandingPage).toHaveBeenCalledTimes(1)

    const updatedCampaign = await updateCampaign({
      id: result.id,
      input: {
        integrations: {productHuntReviewsUrl: "test"},
      }
    })
    expect(updatedCampaign.integrations[0].productHuntReviewsUrl).toEqual("test")
  })

  it("updateCampaign can update campaign landing page details", async () => {
    mockCurrentUser({id: 123, name: 'Rob', sub: "123"})
    const campaignInput = {
      title: "test title", description: "test description",
      integrations: {},
      landingPageDetails: {
        title: "test title",
        landingPageSlug: "test",
      },
    }

    const result = await createCampaign({
      input: campaignInput
    })

    expect(result.title).toEqual("test title")
    expect(createCampaignLandingPage).toHaveBeenCalledTimes(1)

    const updatedCampaign = await updateCampaign({
      id: result.id,
      input: {
        landingPageDetails: {
          title:"updated title",
          landingPageSlug: "test updated",
          message: "test message updated",
        },
      }
    })
    console.log(updatedCampaign)
    const landingPage = await db.campaignLandingPage.findUniqueOrThrow({
      where: {campaignId: result.id}
    })
    expect(landingPage.PageTitle).toEqual("updated title")
    expect(landingPage.pageMessage).toEqual("test message updated")
    expect(landingPage.campaignSlug).toEqual("test updated")

  })

  it("updateCampaign can update campaign details", async () => {
    mockCurrentUser({id: 123, name: 'Rob', sub: "123"})
    const campaignInput = {
      title: "test title", description: "test description",
      integrations: {},
      landingPageDetails: {
        title: "test title",
        message: "test message",
        questions: ["test question"],
        landingPageSlug: "test",
        logoImageUrl: "test url",
      },
    }

    const result = await createCampaign({
      input: campaignInput
    })

    expect(result.title).toEqual("test title")
    expect(createCampaignIntegration).not.toHaveBeenCalled()
    expect(createCampaignLandingPage).toHaveBeenCalledTimes(1)
  })
})
