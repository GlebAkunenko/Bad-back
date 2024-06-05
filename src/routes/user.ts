import { Request, Response } from "express"
import { validate } from "class-validator";
import { User } from "../entity/User"
import { db } from "../data-source";
import {constraintToString} from "class-validator/types/validation/ValidationUtils";

// register routes
export const getUsers = async (req: Request, res: Response) => {
    const users = await db.getRepository(User).find()
    res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
    const results = await db.getRepository(User).findOneBy({
        id: req.params.id,
    })
    return res.send(results)
}

export const addUser = async (req: Request, res: Response) => {
    const { email, username } = req.body;

    let user = new User();
    user.email = email;
    user.username = username;

    // Валидация
    const errors = await validate(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }

    try {
        const userRepository = db.getRepository(User);
        await userRepository.save(user);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send("Error saving user");
    }
}
