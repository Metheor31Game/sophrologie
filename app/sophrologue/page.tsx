export default function SophrologuePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h2 className="text-3xl font-semibold text-marron-doux mb-4">
        Mon Parcours
      </h2>
      <div className="bg-beige-sable p-6 rounded-xl shadow-md max-w-3xl mx-auto">
        <p className="text-lg text-vert-fonce leading-relaxed">
          Étant depuis toujours intéressé par les relations humaines, j’ai
          d’abord fait des études en psychologie à l’université Jean Jaurès de
          Toulouse.
        </p>
        <br></br>
        <p className="text-lg text-vert-fonce leading-relaxed">
          J’ai ensuite suivi ma deuxième passion, la musique, et j’ai donc joué
          et enseigné pendant de nombreuses années. J’ai également été comédien
          dans plusieurs troupes de théâtre.
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          Par l’intermédiaire de ces activités artistiques, j’ai appris de
          nombreuses techniques pour gérer le stress et se relaxer, dans le but
          d’être dans les meilleures conditions possibles lors des nombreuses
          scènes que j’ai pu faire. Je me suis aussi intéressé au Tai-chi et à
          la méditation.
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          Lorsque j’ai découvert la sophrologie, j’y ai retrouvé un peu de
          toutes les disciplines que je connaissais déjà : la psychologie, la
          méditation, la recherche de la détente, d’une meilleure connaissance
          de soi, être en phase avec nos valeurs profondes…
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          J’ai alors souhaité me former en tant que sophrologue pour pouvoir
          aider les personnes qui en ont besoin, grâce aux multiples techniques
          que cette méthodologie propose pour aller vers un mieux-être.
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          Après deux années d’études à l’Institut de Sophrologie du Sud-Ouest à
          Toulouse, j’ai obtenu mon diplôme.
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          Depuis 2020, par l’intermédiaire d’une association, j’anime des
          ateliers de sophrologie pour les aidants de personnes atteintes de
          maladies neurologiques, et plus largement les personnes âgées
          souffrant de stress, de troubles du sommeil, ou ayant besoin d’un
          mieux-être suite à des évènements difficiles (deuil, changement de
          vie…).
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          J’ai travaillé également auprès d’étudiants doctorants qui avaient
          besoin d’apprendre à gérer leur stress pour mener à bien leurs études.
        </p>
        <br></br>

        <p className="text-lg text-vert-fonce leading-relaxed">
          Je souhaite aujourd’hui faire profiter des bienfaits de la sophrologie
          à toute personne ayant besoin d’une méthode pour mieux gérer ses
          émotions, mieux appréhender les situations difficiles, et gagner en
          sérénité dans sa vie de tous les jours.
        </p>
      </div>
      {/* Appel à l'action */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-marron-doux mb-2">
          🌟 Prêt à découvrir la sophrologie ?
        </h2>
        <p className="text-lg text-marron-doux mb-4">Prenez rendez-vous !</p>
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
