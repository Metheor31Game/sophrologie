"use client";

import "./globals.css";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { Menu, X } from "lucide-react";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="bg-blanc-casse text-foreground font-chill relative">
        {/* 🔹 Image de fond qui reste fixe en arrière-plan */}
        <div
          className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
          style={{ backgroundImage: "url('/images/foret.jpeg')" }}
        ></div>

        <nav className="fixed top-0 left-0 w-full bg-white p-4 shadow-md flex justify-between items-center z-10">
          <div className="text-lg font-bold text-vert-fonce">
            {/* À finir : police + taille + centré */}
            <span className="text-2l">Raji Elmasri</span> <br /> <span className="">Sophrologue</span>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-vert-fonce hover:text-marron-doux">
              Accueil
            </Link>
            <Link
              href="/sophrologie"
              className="text-vert-fonce hover:text-marron-doux"
            >
              La Sophrologie
            </Link>
            <Link
              href="/seance"
              className="text-vert-fonce hover:text-marron-doux"
            >
              Déroulement d&apos;une séance
            </Link>
            <Link
              href="/sophrologue"
              className="text-vert-fonce hover:text-marron-doux"
            >
              Qui suis-je ?
            </Link>
            <Link
              href="/contact"
              className="text-vert-fonce hover:text-marron-doux"
            >
              Contact
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden fixed top-[72px] left-0 w-full flex flex-col items-center bg-white p-4 space-y-4 z-20">
            <Link
              href="/"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/sophrologie"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              La Sophrologie
            </Link>
            <Link
              href="/seance"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Déroulement d&apos;une séance
            </Link>
            <Link
              href="/sophrologue"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Qui suis-je ?
            </Link>
            <Link
              href="/contact"
              className="text-vert-fonce hover:text-marron-doux"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}

        <main className="p-6 max-w-4xl mx-auto pt-20">{children}</main>
      </body>
    </html>
  );
}