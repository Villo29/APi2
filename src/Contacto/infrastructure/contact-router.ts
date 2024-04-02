import express from "express";

import { contactController } from "./dependencies";
import { PostContactController } from "./dependencies";

const ContactRouter = express.Router();
ContactRouter.get("/", contactController.getAllContact.bind(contactController));
ContactRouter.post("/", PostContactController.createContact.bind(PostContactController));

export { ContactRouter };
