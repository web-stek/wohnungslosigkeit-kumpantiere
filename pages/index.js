import React from "react";
import Image from "next/image";

import Logo from "../images/logos/Logo_wohnungslosigkeit_kumpantiere.png";

import HomeGesucht from "./home/HomeGesucht";
import HomeMeinProjekt from "./home/HomeMeinProjekt";
import HomeUberMich from "./home/HomeUberMich";
import HomeMethode from "./home/HomeMethode";
import HomeQuelle from "./home/HomeQuelle";

export default function Home() {
  return (
    <div className="antialiased font-sans h-full w-full bg-th-background text-th-primary-dark">
      <header>
      <a href="#main" className="skip">Zum Hauptinhalt springen</a>
      </header>
      <main id="main">
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 bg-th-background">
          <div className="grid grid-cols-12">
            <div className="col-span-4 place-items-strat text-left">
              <div className="grid justify-items-end mb-20">
                <div>
                  <div className="text-lg font-semibold italic">
                    "Egal, wie wenig Geld und Besitz du hast: Einen Hund zu
                    haben macht dich reich.”
                  </div>
                  <div className="text-right"> ― Louis Sabin</div>
                </div>
              </div>
            </div>
            <div className="col-span-8 place-items-end text-right">
              <div className="grid justify-items-end mb-20">
                <Image src={Logo} width={300} height={100} alt="Logo" />
              </div>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-left pb-20">
              <div className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                <HomeGesucht />
              </div>
            </div>
            <div className="text-left pb-20">
              <h2 className="text-3xl tracking-tight font-bold text-th-accent-medium sm:text-4xl">
                Mein Projekt
              </h2>
              <div className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                <HomeMeinProjekt />
              </div>
            </div>
            <div className="text-left pb-20">
              <h2 className="text-3xl tracking-tight font-bold text-th-accent-medium sm:text-4xl">
                Über mich
              </h2>
              <div className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                <HomeUberMich />
              </div>
            </div>
            <div className="text-left pb-20">
              <h2 className="text-3xl tracking-tight font-bold text-th-accent-medium sm:text-4xl">
                Methodischer Zugang und theoretische Vorüberlegungen
              </h2>
              <div className="mt-3 max-w-2xl mx-auto text-xl sm:mt-4">
                <HomeMethode />
              </div>
            </div>
            <div className="text-left pb-20">
              <h2 className="text-3xl tracking-tight font-bold text-th-accent-medium sm:text-3xl">
                Quellen
              </h2>
              <div className="mt-3 max-w-2xl mx-auto text-sm sm:mt-4">
                <HomeQuelle />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center lg:text-left">
        <div className="text-gray-700 text-center p-4">
          made with 🎔 by{" "}
          <a
            className="text-ocean-600"
            target="_blank"
            href="https://www.web-stek.ch/"
          >
            web|stek
          </a>{" "}
          © {new Date().getFullYear()} Copyright
        </div>
      </footer>
    </div>
  );
}
