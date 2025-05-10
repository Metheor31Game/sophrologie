"use client";
import { useState } from "react";

export default function ContactPage() {
  const [contactType, setContactType] = useState(""); // Gère le type de contact sélectionné

  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold text-marron-doux mb-4">Contact</h1>
      <p className="text-lg mb-6 text-marron-doux">
        Prenez rendez-vous ou posez vos questions.
      </p>

      {/* Carte de visite */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-vert-fonce">Raji Elmasri</h2>
        <p className="text-vert-fonce">Sophrologue certifié</p>
        <p className="text-vert-fonce mt-2">
          7 esplanade du muretain, 31600 Muret
        </p>
        <p className="text-vert-fonce">Tél: 06 61 19 88 50</p>
        <p className="text-vert-fonce">Email: raji.elmasri@gmail.com</p>
      </div>
      {/* Carte Google Maps */}
      <div className="w-full max-w-2xl mx-auto mb-6 rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Localisation du cabinet"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.039483381842!2d1.3138313654881735!3d43.4388913498842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aec9a79fc067a3%3A0xf7467b0c03f93ee0!2s7%20Esp.%20du%20Muretain%2C%2031600%20Muret!5e0!3m2!1sfr!2sfr!4v1745570738494!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Horaires */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 w-full max-w-md mx-auto mb-6">
        <h2 className="text-xl font-semibold text-marron-doux mb-4">
          Horaires d&apos;ouverture
        </h2>
        <table className="w-full text-left border-collapse">
          <tbody>
            {[
              ["Lundi", "Fermé", "Fermé"],
              ["Mardi", "Fermé", "Fermé"],
              ["Mercredi", "Fermé", "Fermé"],
              ["Jeudi", "Fermé", "Fermé"],
              ["Vendredi", "8h", "20h"],
              ["Samedi", "Fermé", "Fermé"],
              ["Dimanche", "Fermé", "Fermé"],
            ].map(([jour, matin, apresMidi]) => (
              <tr key={jour} className="border-t border-vert-clair">
                <td className="py-2 font-medium text-vert-fonce">{jour}</td>
                <td className="py-2 text-vert-fonce">{matin}</td>
                <td className="py-2 text-vert-fonce">{apresMidi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-beige-sable shadow-md rounded-xl p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-marron-doux mb-4">
          Contactez-moi
        </h2>

        {/* Sélecteur du type de contact */}
        <label className="block text-marron-doux font-medium mb-2">
          Vous souhaitez :
        </label>
        <select
          className="w-full p-2 border border-gray-300 rounded-md"
          value={contactType}
          onChange={(e) => setContactType(e.target.value)}
        >
          <option value="">Choisir une option</option>
          <option value="rendez-vous">Prendre rendez-vous</option>
          <option value="question">Poser une question</option>
        </select>

        {/* Champs affichés selon le choix */}
        {(contactType === "rendez-vous" || contactType === "question") && (
          <div className="mt-4">
            {/* Nom */}
            <label className="block text-marron-doux font-medium mb-2">
              Nom :
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Votre nom"
            />

            {/* Prénom */}
            <label className="block text-marron-doux font-medium mt-4 mb-2">
              Prénom :
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Votre prénom"
            />

            {/* Numéro de téléphone */}
            <label className="block text-marron-doux font-medium mt-4 mb-2">
              Téléphone :
            </label>
            <input
              type="tel"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Votre numéro de téléphone"
            />

            {/* Adresse e-mail */}
            <label className="block text-marron-doux font-medium mt-4 mb-2">
              E-mail :
            </label>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Votre adresse e-mail"
            />

            {contactType === "rendez-vous" && (
              <>
                {/* Date et heure du rendez-vous */}
                <label className="block text-marron-doux font-medium mt-4 mb-2">
                  Date souhaitée :
                </label>
                <input
                  type="date"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />

                <label className="block text-marron-doux font-medium mt-4 mb-2">
                  Heure souhaitée :
                </label>
                <input
                  type="time"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />

                {/* Message optionnel */}
                <label className="block text-marron-doux font-medium mt-4 mb-2">
                  Message :
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  // rows="3"
                  placeholder="Ajoutez des précisions si nécessaire..."
                ></textarea>
              </>
            )}

            {contactType === "question" && (
              <>
                {/* Question du visiteur */}
                <label className="block text-marron-doux font-medium mt-4 mb-2">
                  Votre question :
                </label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  // rows="3"
                  placeholder="Posez votre question ici..."
                ></textarea>
              </>
            )}
          </div>
        )}

        {/* Bouton d'envoi */}
        {contactType && (
          <button className="mt-6 w-full bg-vert-fonce text-white py-2 rounded-md hover:bg-vert-clair transition">
            Envoyer
          </button>
        )}
      </div>
    </div>
  );
}
