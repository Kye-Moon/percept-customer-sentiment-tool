import {createContext, useContext} from "react";


export const CampaignContext = createContext(undefined)

export function useCampaignContext() {
  return useContext(CampaignContext)
}
