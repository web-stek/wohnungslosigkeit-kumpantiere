import React from "react";

import Image from "next/image";

import AutorImage from "../../images/pictures/marisa.jpg";
import Image1 from "../../images/pictures/pexels-the-humantra-13517455.jpg";

export default function HomeGesucht() {
  const number = "0784009188";
  const num = `${number.substring(0, 3)} ${number.substring(
    3,
    6
  )} ${number.substring(6, number.length)}`;

  return (
    <div>
      <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-1 lg:max-w-none">
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <div className="flex-shrink-0">
            <Image
              className="h-50 w-full object-cover"
              src={Image1}
              alt="zugedeckter Hund schläft auf einer Matratze auf der Strasse"
            />
            <div className="text-xs p-2 text-end">Photo by The Humantra</div>
          </div>
          <div className="flex-1 bg-th-background-secondary p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-lg capitalize font-medium text-th-accent-medium">
                Gesucht
              </p>
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold">
                  Ich bin auf der Suche nach...
                </p>
                <ul className="text-base list-disc ml-5 p-2">
                  <li>
                    wohnungslosen Tierhhaltenden, welche bereit sind bei einem
                    gemeinsamen Spaziergang über ihren Alltag mit ihrem Tier /
                    ihren Tieren auf der Gasse zu erzählen
                  </li>
                  <li>
                    Institutionen, welche Tiere in ihren Räumlichkeiten zulassen
                  </li>
                </ul>
                <p className="text-base mt-5">
                  Bei Interesse schreibt mir eine SMS.
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href="#">
                  <span className="sr-only">Marisa Geiser-Krummenacher</span>
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={AutorImage}
                    alt="Bild Marisa"
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium">Marisa Geiser-Krummenacher</p>
                <div className="flex space-x-1 text-sm text-ocean-600">
                  <span>
                    <a href={`tel:${num}`}>{num}</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
