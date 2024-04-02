import { Contact } from "./contact";

export interface CreateContact {
  addContact(
    Nombre: string,
    Email: string,
    Telefono: string,
    Mensaje: string
  ): Promise<Contact | null>;
}
