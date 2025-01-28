import { create } from "zustand";
import { TOpportunity } from "../services";

interface IBookmarkCampaign {
  savedCampaigns: string[];
  addCampaigns: (isSaved: TOpportunity[] | string) => void;
  unBookmark: (id: string) => void;
}

export const useCampaignBookmark = create<IBookmarkCampaign>((set) => ({
  savedCampaigns: JSON.parse(localStorage.getItem("savedCampaigns") || "[]"),
  addCampaigns: (campaigns: TOpportunity[] | string) =>
    set((state) => {
      if (typeof campaigns === "string")
        return {
          savedCampaigns: [...state.savedCampaigns, campaigns],
        };

      const filterCampaigns = campaigns.filter((data) =>
        state.savedCampaigns.includes(data.id),
      );
      return {
        savedCampaigns: filterCampaigns.map((data) => data.id),
      };
    }),
  unBookmark: (id: string) => {
    set((state) => {
      return {
        savedCampaigns: state.savedCampaigns.filter((data) => data !== id),
      };
    });
  },
}));

// Listening to all changes, fires synchronously on every change
useCampaignBookmark.subscribe((data) => {
  localStorage.setItem("savedCampaigns", JSON.stringify(data.savedCampaigns));
});
