export default function SophrologiePage() {
  return (
    <div className="text-lg bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="text-3xl font-bold text-marron-doux mb-6">
        Découvrez la Sophrologie : Une Clé vers l&apos;Équilibre Intérieur
      </h1>

      {/* Introduction immersive */}
      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        La sophrologie est une méthode psychocorporelle douce qui vise à
        restaurer l’équilibre entre le corps, le mental et les émotions. Fondée
        dans les années 60 par le neuropsychiatre{" "}
        <span className="font-semibold">Alfonso Caycedo</span>, elle s’inspire
        du yoga, de la méditation et de techniques occidentales de relaxation.
        Aujourd’hui, elle est reconnue comme un outil précieux pour faire face
        aux défis du quotidien : stress, anxiété, douleurs chroniques, manque de
        confiance ou besoin de recentrage.
      </p>

      {/* Les bienfaits de la sophrologie */} 
      <h2 className="text-2xl font-semibold text-marron-doux mb-4">
        Les Bienfaits de la Sophrologie
      </h2>
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <p className="text-vert-fonce leading-relaxed mb-4">
          Pratiquée régulièrement, la sophrologie permet de :
        </p>
        <ul className="text-vert-fonce text-left list-disc pl-6 space-y-2">
          <li>
            Réduire le <span className="font-semibold">stress, l’anxiété</span>{" "}
            et les tensions
          </li>
          <li>
            Améliorer le <span className="font-semibold">sommeil</span> et la
            récupération
          </li>
          <li>
            Renforcer la <span className="font-semibold">confiance en soi</span>{" "}
            et l’estime personnelle
          </li>
          <li>
            Gérer plus sereinement les{" "}
            <span className="font-semibold">émotions et la douleur</span>
          </li>
          <li>
            Développer la <span className="font-semibold">concentration</span>{" "}
            et les capacités de performance
          </li>
        </ul>
      </div>

      {/* Domaines d'application */}
      <h2 className="text-2xl font-semibold text-marron-doux mb-4">
        Pour qui ?
      </h2>
      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <p className="text-vert-fonce leading-relaxed mb-4">
          La sophrologie est utilisée dans de nombreux domaines :
        </p>
        <ul className="text-vert-fonce text-left list-disc pl-6 space-y-2">
          <li>
            Le milieu médical et paramédical, notamment en cancérologie et
            pathologies chroniques pour la gestion de la douleur, mais également
            en obstétrique pour la préparation à l’accouchement
          </li>
          <li>
            Le milieu du bien-être et développement personnel, la relaxation,
            mais aussi la gestion des émotions notamment pour les personnes
            hypersensibles
          </li>
          <li>Le sport, pour la préparation mentale</li>
          <li>
            Le milieu artistique, accompagnement des comédiens, musiciens…( par
            exemple pour la gestion du stress avant les représentations)
          </li>
          <li>
            Le milieu éducatif, pour la préparation aux examens chez les
            étudiants, mais aussi l’aide face aux difficultés scolaires ou
            familiales
          </li>

          <li>
            L’entreprise dans le cadre de la qualité de vie au travail et la
            prévention des risques psychosociaux, mais aussi pour la gestion du
            stress et pour l’aide à la cohésion d’équipe (pratiques collectives)
          </li>
        </ul>
      </div>

      {/* Déroulement d'une séance */}
      <div className="mt-8">
        <p className="text-lg text-marron-doux mb-4">
          La peur de l&apos;inconnu est naturelle, mais elle ne doit pas
          empêcher de faire le premier pas. Pour en savoir plus et découvrir
          concrètement comment se déroule une séance, 
          <a
            href="/seance"
            className="inline-block bg-vert-doux text-marron-doux font-bold px-2 underline decoration-2 hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            cliquez ici.
          </a>
          
        </p>
      </div>

      {/* Appel à l'action */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          🌟 Envie d&apos;essayer ?
        </h2>
        <p className="text-lg text-marron-doux mb-4">
          Que ce soit par curiosité ou pour répondre à un besoin spécifique, la
          sophrologie peut vous aider à retrouver un équilibre intérieur.
        </p>
        <a
          href="/contact"
          className="bg-vert-fonce text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-vert-doux transition"
        >
          📅 Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}
