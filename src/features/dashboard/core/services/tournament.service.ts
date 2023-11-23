import { apiConfig } from "@/config/api/api.config";
import {
  createTournamentUrl,
  deleteTournamentUrl,
} from "../../constants/endpoints";
import { Tournament } from "../models/tournament";

export async function createTournament(payload): Promise<Tournament> {
  try {
    const response: Tournament = await fetch(createTournamentUrl, {
      headers: apiConfig.headers,
      method: "POST",
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function getTournaments(): Promise<Tournament[]> {
  try {
    const response: Tournament[] = await fetch(createTournamentUrl, {
      headers: apiConfig.headers,
      method: "GET",
    }).then((res) => res.json());
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}

export async function deleteTournament(id: string): Promise<Tournament> {
  try {
    const response: Tournament = await fetch(deleteTournamentUrl(id), {
      headers: apiConfig.headers,
      method: "DELETE",
    }).then((res) => res.json());
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
