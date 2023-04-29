import {db} from "src/lib/db";
import {Overwrite, UndefinedRoles} from "../../../../.redwood/types/includes/all-currentUser";

export const userOwnsCampaign = async (currentUser:  Overwrite<UndefinedRoles, Record<string, unknown> & {roles?: string[]}>, campaignId: number) => {
  const campaign = await db.campaign.findFirst({
    where: {
      id: campaignId,
      userId: currentUser?.sub,
    }
  })
  if (!campaign) {
    throw new Error('User does not have access to this campaign')
  }else {
    return !!campaign
  }
}
