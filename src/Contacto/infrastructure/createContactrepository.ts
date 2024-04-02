import { createPool } from "../../mysql";
import { Contact } from "../domain/contact";
import { ContactRepository } from "../domain/contact-repository";

export class InMemoryContactRepository implements ContactRepository {
  async getAll(): Promise<Contact[]> {
    console.log("Entered InMemoryContactRepository getAll");
    const connection = await createPool();
    const result: any[] = await connection.query("SELECT * FROM Contacto");

    if (result.length === 0) {
      return [];
    }
    const contacto: any[] = result[0];
    console.log(`prueba ${JSON.stringify(contacto)}`);
    return contacto.map((contact) => {
      return new Contact(
        contact.Nombre,
        contact.Email,
        contact.Telefono,
        contact.Mensaje
      );
    });
  }
}
