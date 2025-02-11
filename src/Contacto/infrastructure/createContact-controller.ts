import { Request, Response } from "express";

import { PostContact } from "../aplication/CreateContact";

export class CreateContactController {
  constructor(private readonly postContact: PostContact) {}

  async createContact(req: Request, res: Response) {
    const Nombre = req.body.Nombre;
    const Email = req.body.Email;
    const Telefono = req.body.Telefono;
    const Mensaje = req.body.Mensaje;

    const resultado = await this.postContact.createContact(
      Nombre,
      Email,
      Telefono,
      Mensaje

    );
    console.log("controller", resultado.Nombre);
    res
      .status(200)
      .send(
        `La solicitud ${resultado.Nombre} fue éxitoso`
      );
  }
}
