import { Request, Response } from "express";

import { GetAllContact } from "../aplication/GetAllContactUseCase";

export class ContactController {
  constructor(private readonly getAllContactUseCase: GetAllContact) {}

  async getAllContact(req: Request, res: Response) {
    try {
      const contact = await this.getAllContactUseCase.execute();
      res.status(200).send(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to get contacto" });
    }
  }
}
