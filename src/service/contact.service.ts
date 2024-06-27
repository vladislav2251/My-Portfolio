import HTTP from "axios";
import telegramConfig from "@/config/telegram";

export class contactService {
     
     async sendContact(fullMessage: string) {

          await HTTP.get(`https://api.telegram.org/bot${telegramConfig.telegram_token}/sendMessage?chat_id=${telegramConfig.telegram_bot_chat_id}&text=${fullMessage}`, {withCredentials: true, responseType: "json"});

     };
};

export default new contactService();