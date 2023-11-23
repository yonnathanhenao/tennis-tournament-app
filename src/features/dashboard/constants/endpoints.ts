import { apiConfig } from "@/config/api/api.config";

export const createTournamentUrl: string =
  apiConfig.basePath.concat("/tournament");

export const deleteTournamentUrl = (id: string) =>
  apiConfig.basePath.concat(`/tournament/${id}`);
