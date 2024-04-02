import { createPool } from "../../mysql";
import { CreateContact } from "../domain/CreateContact";
import { Contact } from "../domain/contact";


export class AddContactRepository implements CreateContact {
  async addContact(

    Nombre: string,
    Email: string,
    Telefono: string,
    Mensaje: string
  ): Promise<Contact | null> {
    const connection = await createPool();
    try {
      const query = `INSERT INTO Contacto (Nombre, Email, Telefono, Mensaje) VALUES (?, ?, ?, ?)`;
      const values = [
        Nombre,
        Email,
        Telefono,
        Mensaje
      ];
      await connection.query(query, values);

      const contact = new Contact(
        Nombre,
        Email,
        Telefono,
        Mensaje
      );

      return contact;
    } catch (error) {
      throw new Error(`No se pudo agregar el contacto: ${error}`);
    } finally {
      connection.end();
    }
  }
}
