import { Injectable } from '@angular/core';
import data from "../../assets/data/personal.json";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  switchContactWay (key:string, link:string):void {
    if (key.toLowerCase() === "telefone" || key.toLowerCase() === "whatsapp") {
      this.chatOnWhatsapp()
    } else if  (key.toLowerCase() === "email") {
      this.sendEmail()
    } else {
      window.open(link, "_blank")
    }
  }

  chatOnWhatsapp():void {
    let phoneNumber:any = data.contacts.find(info => info.name.toLowerCase() === "whatsapp");
    const defaultMessage = "Olá Danilo, estava dando uma olhada no seu portfólio e resolvi te contactar."
    let whatsappLink:string;
    if (this.isMobileDevice()) {
      whatsappLink = `https://wa.me/${phoneNumber.url}?text=${encodeURIComponent(defaultMessage)}`
      console.log("mobile")
    } else {
      whatsappLink = `https://web.whatsapp.com/send?phone=+${phoneNumber.url}`;
      console.log("desktop")
    }
    window.open(whatsappLink, "_blank")
  }

  isMobileDevice():boolean|number {
    const supportsTouch = 'ontouchstart' in window || navigator.maxTouchPoints;

    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'windows phone'];
    const isMobileUserAgent = mobileKeywords.some(keyword => userAgent.includes(keyword));

    return supportsTouch || isMobileUserAgent;
  }

  sendEmail(
    email:string="",
    subject:string="",
    body:string=""
  ):void {
    let request = `mailto:${email}`
    if (subject !== "") {
      request += `&subject=${encodeURIComponent(subject)}`;
    }
    if (body !== "") {
      request += `&body=${encodeURIComponent(body)}`;
    }
    window.open(request, '_blank')
  }
}
