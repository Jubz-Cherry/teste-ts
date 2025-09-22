interface ImailTo {
    name: string;
    email: string;
}
interface ImailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}
interface IMessageDTO {
    to: ImailTo;
    message: ImailMessage;
}
interface IEmailService {
    sendMail(request: IMessageDTO): void;
}
declare class EmailService implements IEmailService {
    sendMail({ to, message }: IMessageDTO): void;
}
export default EmailService;
//# sourceMappingURL=EmailService.d.ts.map