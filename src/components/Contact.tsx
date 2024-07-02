import { FormEvent, useState } from "react";
import Section from "./Section";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
      async () => {
        setEnviado(true);
        await delay(5000);
        setEnviado(false);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <Section
      id="contact"
      animation={false}
      bgColor="black"
      textColor="lavender"
    >
      <div className="p-8">
        <h2 className="mb-8 text-center text-3xl font-bold">{t("contact")}</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="font-bold">
              {t("name")}
            </label>
            <input
              className="rounded-lg bg-brand-blue p-2 text-brand-white placeholder-brand-white/60"
              id="name"
              placeholder="Nicolás Carnevale"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-bold">
              Email
            </label>
            <input
              className="rounded-lg bg-brand-blue p-2 text-brand-white placeholder-brand-white/60"
              id="email"
              type="email"
              placeholder="ncarnevaledata@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="font-bold">
              {t("yourMessage")}
            </label>
            <textarea
              className="h-32 rounded-lg bg-brand-blue p-2 text-brand-white placeholder-brand-white/60"
              id="message"
              placeholder={t("messagePlaceholder")}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={`${enviado ? "bg-brand-green" : "bg-brand-white"} rounded-lg px-10 py-3 text-brand-black transition-colors duration-300 hover:bg-brand-darkblue hover:text-brand-orange`}
          >
            {enviado ? t("sendMessage") : t("messageSent")}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
