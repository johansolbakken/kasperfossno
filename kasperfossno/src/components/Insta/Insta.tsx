export const Insta = () => {
  return (
    <div className="flex flex-col-reverse bg-dark-blue text-white font-medium md:flex-row">
      <div className="w-full">
        <img
          className="w-full h-full"
          src="https://www.rikstoto.no/imagevault/publishedmedia/zlm6esqvrrrzup3x9cyz/Kasper_Foss_-2-.jpg"
        />
      </div>
      <div className="p-7 md:p-16 flex align-center justify-center h-full">
        <div>
          <div className="text-3xl">Kasper tilbyr ...</div>
          <div className="text-xl font-normal p-2">
            <ul className="list-disc">
              <li className="p-2">
                Innslag på forskjellige eventer, alt i fra julebord, til
                kick-offs og andre arrangementer i karakter.
              </li>
              <li className="p-2">Kommentering av en konkurranse.</li>
              <li className="p-2">
                Å snakke om en aktuelle begivenhet i karakter.
              </li>
              <li className="p-2">Å være konferansier for kvelden.</li>
              <li className="p-2">
                Videohilsener der du kan påvirke form og innhold.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
