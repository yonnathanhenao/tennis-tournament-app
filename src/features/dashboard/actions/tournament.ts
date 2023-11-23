import { validateForm } from "@/utils/form";
import {
  createTournament,
  deleteTournament,
  getTournaments,
} from "../core/services/tournament.service";
import { Tournament } from "../core/models/tournament";

export async function saveTournament(_, formData) {
  const payload = Object.fromEntries(formData);
  try {
    const invalidFields = validateForm(payload);
    if (Object.keys(invalidFields).length > 0) {
      return { invalidFields };
    }

    await createTournament(payload);
  } catch (error) {
    return error;
  }
}

export async function fetchTournaments(): Promise<Tournament[]> {
  try {
    return await getTournaments();
  } catch (error) {
    console.log("error", error);
    return [];
  }
}

export const handleDeleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    return await deleteTournament(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }
};
