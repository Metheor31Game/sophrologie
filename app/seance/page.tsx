export default function SeancePage() {
  return (
    <div className="text-lg bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-3xl font-bold text-marron-doux mb-6">
        Déroulement d&apos;une séance{" "}
      </h1>

      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <p className="text-vert-fonce leading-relaxed mb-4">
          Toute séance commence par un temps d’écoute où la personne exprime ses
          besoins et ses motivations.
        </p>
        <p className="text-vert-fonce leading-relaxed mb-4">
          Ensuite, la séance se poursuit la plupart du temps par quelques
          exercices de respiration et des mouvements très simple pour prendre
          conscience de son corps, se concentrer et commencer à se détendre
        </p>
        <p className="text-vert-fonce leading-relaxed mb-4">
          Puis, je vous guiderai dans une séance de relaxation qui pourra faire
          appel à différentes techniques, comme des visualisations d’images
          positives par exemple.
        </p>
        <p className="text-vert-fonce leading-relaxed mb-4">
          La séance se termine par un échange durant lequel vous pourrez
          exprimer votre ressenti. Je pourrais éventuellement vous proposer des
          exercices à faire dans votre quotidien.
        </p>
        <p className="text-vert-fonce leading-relaxed mb-4">
          La sophrologie propose de nombreuses techniques qui permettent
          d’apprendre à se relâcher et à trouver à l’intérieur de soi les
          ressources pour se sentir mieux et faire face aux évènements de la
          vie.
        </p>
      </div>
      {/* Appel à l'action */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          Une question ?
        </h2>
        <p className="text-lg text-marron-doux mb-4">
          Rendez-vous dans l&apos;onglet Déroulement d&apos;une séance ou :
        </p>
        <a
          href="/contact"
          className="bg-vert-fonce text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-vert-doux transition"
        >
          📩 poser moi une question !
        </a>
      </div>
    </div>
  );
}
