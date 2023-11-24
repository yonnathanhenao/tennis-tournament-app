import { apiConfig } from "@/config/api/api.config";
import { tournamentUrl, tournamentByIdUrl } from "../../constants/endpoints";
import { Tournament } from "../models/tournament";

export async function createTournament(payload): Promise<void> {
  const response = await fetch(tournamentUrl, {
    headers: apiConfig.headers,
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => res.json());

  return response;
}
export async function updateTournament(
  id: string,
  payload: Tournament
): Promise<void> {
  const response = await fetch(tournamentByIdUrl(id), {
    headers: apiConfig.headers,
    method: "PUT",
    body: JSON.stringify(payload),
  }).then((res) => res.json());

  return response;
}

export async function getTournaments(): Promise<Tournament[]> {
  const response = await fetch(tournamentUrl, {
    headers: apiConfig.headers,
    method: "GET",
  }).then((res) => res.json());
  return response.data;
}

export async function getTournament(id: string): Promise<Tournament> {
  const response = await fetch(tournamentByIdUrl(id), {
    headers: apiConfig.headers,
    method: "GET",
  }).then((res) => res.json());
  return response;
}

export async function deleteTournament(id: string): Promise<void> {
  console.log("id", id);
  const response = await fetch(tournamentByIdUrl(id), {
    headers: apiConfig.headers,
    method: "DELETE",
  }).then((res) => res.json());
  return response;
}
