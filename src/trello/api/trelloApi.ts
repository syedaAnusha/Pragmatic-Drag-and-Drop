//* Custom Import
import { mockData } from "@/mock-data";
import { trelloContent } from "@/interface/interfaces";

export const localTrelloBoardContent = async (): Promise<trelloContent> => {
  return mockData;
};
