import React from "react";

import Image from "next/image";

import Image1 from "../../images/pictures/Foto_mit_Loki.jpg";

export default function HomeUberMich() {
  return (
    <div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <Image
              className="h-96 w-full object-cover object-center"
              src={Image1}
              alt="Marisa und Hund"
            />
          </div>
        </div>
      </div>
      <div className="text-xs p-2 text-end mb-5 text-slate-800">
        Photo by Marisco
      </div>

      <p className="mt-2 text-slate-800">
        Mein Name ist Marisa Geiser-Krummenacher. Ich lebe gemeinsam mit meinem
        Mann, zwei Katzen und einem Hund in der Region Basel.
      </p>
      <p className="mt-2 text-slate-800">
        Nach einer kaufmännischen Grundausbildung auf einer Bank absolvierte ich
        ein Bachelorstudium in Sozialer Arbeit und ein Masterstudium in Frieden,
        Entwicklung, Sicherheit und internationaler Konflikttransformation.
        Dafür zog es mich in Auslandeinsätze nach Honduras und in die
        sahraouischen Flüchtlingslager in Algerien. In der Schweiz arbeitete ich
        in diversen Felder der Sozialen Arbeit zum Thema Flucht, Migration,
        Berufsbildung, betrieblicher Sozialberatung, Gesundheitsförderung und
        Prävention sowie Sozialraumplanung.
      </p>
      <p className="mt-2 text-slate-800">
        Aufgrund meiner engen Beziehung zu Tieren absolvierte ich an der
        Universität Basel den CAS in tiergestützter Therapie und arbeitete in
        einem Pflegeheim in der tiergestützten Aktivierung. Während dieser Zeit
        entdeckte ich die Wichtigkeit der Berücksichtigung und Anerkennung der
        Mensch-Tier-Beziehung in der Sozialen Arbeit. Somit entstand meine Idee
        für mein Doktorats Vorhaben.
      </p>
    </div>
  );
}
