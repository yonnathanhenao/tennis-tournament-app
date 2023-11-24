import { apiConfig } from "@/config/api/api.config";

export const tournamentUrl = apiConfig.basePath.concat("/tournament");

export const tournamentByIdUrl = (id: string) =>
  apiConfig.basePath.concat(`/tournament/${id}`);
