import { tournamentUrl, tournamentByIdUrl } from "../../constants/endpoints";
import { Tournament } from "../models/tournament.model";
import Repository from "@/config/api/repository";

const repository = Repository.getInstance();

export async function getTournaments(): Promise<Tournament[]> {
  const response = (await repository.get(tournamentUrl)) as {
    data: Tournament[];
  };
  return response.data;
}

export async function getTournament(id: string): Promise<Tournament> {
  const response = (await repository.get(tournamentByIdUrl(id))) as Tournament;
  return response;
}

export async function createTournament(payload): Promise<void> {
  await repository.post(tournamentUrl, payload);
}
export async function updateTournament(
  id: string,
  payload: Tournament
): Promise<void> {
  await repository.put(tournamentByIdUrl(id), payload);
}

export async function deleteTournament(id: string): Promise<void> {
  await repository.delete(tournamentByIdUrl(id));
}
