import { Request, Response } from 'express'
import { User } from "../contracts/user.contract";

class UserController {

    index(req: Request, res: Response) {
        res.send([{id: 1, name: 'Guto', email: 'teste@gmail.com'}]);
    }

}

export default new UserController();