"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { validateForm } from "@/utils/form";
import { IFormState } from "../constants/types";
import { Tournament, TournamentDto } from "../core/models/tournament";
import {
  createTournament,
  deleteTournament,
  getTournament,
  getTournaments,
  updateTournament,
} from "../core/services/tournament.service";

export async function fetchTournaments(): Promise<Tournament[]> {
  try {
    const tournaments = await getTournaments();
    revalidatePath("/tournaments");
    return tournaments;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchTournament(id: string): Promise<Tournament | null> {
  try {
    const tournament = await getTournament(id);
    revalidatePath(`/tournaments/${id}`);
    return tournament;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function handleCreateTournament(
  _,
  formData
): Promise<IFormState | undefined> {
  let success = false;
  const payload = Object.fromEntries(formData);
  const invalidFields = validateForm(payload);
  if (Object.keys(invalidFields).length > 0) {
    return { formError: invalidFields };
  }
  try {
    await createTournament(payload);
    success = true;
  } catch (error) {
    console.error(error);
    return {
      error: "Ocurrió un error al crear el torneo",
    };
  } finally {
    if (success) {
      redirect("/tournaments");
    }
  }
}

export async function handleUpdateTournament(
  currentState,
  formData
): Promise<IFormState | undefined> {
  let success = false;
  const { id } = currentState;
  const payload = Object.fromEntries(formData);
  const invalidFields = validateForm(new TournamentDto(payload));
  if (Object.keys(invalidFields).length > 0) {
    return { ...currentState, formError: invalidFields };
  }
  try {
    await updateTournament(id, payload);
    success = true;
  } catch (error) {
    console.error(error);
    return {
      ...currentState,
      error: "Ocurrió un error al crear el torneo",
    };
  } finally {
    if (success) {
      redirect("/tournaments");
    }
  }
}

export const handleDeleteTournament = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    revalidatePath("/tournaments");
    return await deleteTournament(id);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete product!");
  }
};
