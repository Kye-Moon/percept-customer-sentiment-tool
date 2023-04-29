import {db} from "src/lib/db";

export const checkUserOwnsCampaign = async (campaignId: number, userId: string) => {
  const campaign = await db.campaign.findUnique({
    where: { id: campaignId },
  })

  if (campaign.userId !== userId) {
    throw new Error('Not authorized')
  }else {
    return true
  }
}
