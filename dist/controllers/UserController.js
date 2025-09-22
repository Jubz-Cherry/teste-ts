import EmailService from '../services/EmailService.js';
const users = [
    { name: 'Julia', email: 'jujubinha123@gmail.com' },
];
export default {
    async index(req, res) {
        return res.json(users);
    },
    async create(req, res) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { name: 'Jubis', email: 'jujubinha123@gmail.com' },
            message: { subject: 'Bem-vindo ao sistema', body: 'Aplicação oficial com ts!' }
        });
        return res.send();
    }
};
//# sourceMappingURL=UserController.js.map