import api from "./api";

export function getNotes() {
  return api.get("/notes");
}

export function createNote(data) {
  return api.post("/notes", data);
}
