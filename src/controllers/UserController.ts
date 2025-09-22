import type { Request, Response } from 'express'; 
import EmailService from '../services/EmailService.js';

const users = [
    { name: 'Julia', email: 'jujubinha123@gmail.com'},
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({ 
            to: {name: 'Jubis', email: 'jujubinha123@gmail.com'},
           message: {subject: 'Bem-vindo ao sistema', body: 'Aplicação oficial com ts!' }
        });

        return res.send();
    }


}