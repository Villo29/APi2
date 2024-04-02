import { Contact } from "../domain/contact";
import { ContactRepository } from "../domain/contact-repository";

export class GetAllContact {
  constructor(private readonly contactRepository: ContactRepository) {}
  async execute(): Promise<Contact[]> {
    const Contact = await this.contactRepository.getAll();
    return Contact;
  }
}
