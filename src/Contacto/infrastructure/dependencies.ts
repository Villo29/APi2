import { PostContact } from "../aplication/CreateContact";
import { GetAllContact } from "../aplication/GetAllContactUseCase";
import { CreateContactController } from "./createContact-controller";
import { InMemoryContactRepository } from "./createContactrepository";
import { ContactController } from "./contact-controller";
import { AddContactRepository } from "./contact-repository";

const contactRepository = new InMemoryContactRepository();
const getAllContactUseCase = new GetAllContact(contactRepository);
const contactController = new ContactController(getAllContactUseCase);

export { getAllContactUseCase, contactController };

const contactRepositor = new AddContactRepository();
const createContact = new PostContact(contactRepositor);
const PostContactController = new CreateContactController(createContact);

export { createContact, PostContactController };