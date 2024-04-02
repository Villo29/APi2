import { Contact } from "./contact";

export interface ContactRepository {
  getAll(): Promise<Contact[]>;
}
