export default function HomePage() {
  return (
    <div className="bg-blanc-casse rounded-xl text-center p-6">
      <h1 className="font-nunito text-4xl font-bold text-marron-doux mb-6">Raji Elmasri </h1>

      <p className="text-lg text-marron-doux leading-relaxed mb-6">
        Sophrologue diplômé de l&apos;ISSO
      </p>

      <div className="bg-beige-sable shadow-md rounded-xl p-6 mb-6 w-full max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold text-marron-doux mb-4"></h2>
        <ul className="text-marron-doux text-left list-disc pl-6 space-y-2">
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">
            Mieux gérer son stress et ses émotions
          </li>
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">Appréhender les évenements de façon plus positive</li>
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">Développer la confiance en soi</li>
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">Lutter contre les troubles du sommeil</li>
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">Apprendre à mieux maîtriser son mental</li>
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">Apprendre à mobiliser ses ressources</li>
          <li className="text-vert-fonce leading-relaxed mb-2 text-2xl">Préparer un examen...</li>
        </ul>
      </div>
    </div>
  );
}
