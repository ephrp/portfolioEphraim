export default function SkillsPage() {
  return (
    <main className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Compétences</h1>
          <p className="mt-4 text-gray-600">
            Un aperçu clair des technologies, outils et pratiques que j’utilise dans mes projets.
          </p>

          <div className="mt-10">
            <a
              href="/projects"
              className="inline-block rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Voir mes projets
            </a>
          </div>
        </div>

        {/* Grille */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Langages */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Langages</h2>
            <p className="mt-2 text-gray-600">
              Bases solides et usage régulier selon le contexte (backend, systèmes, web).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Java", "C", "Python", "TypeScript", "SQL"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Web & Backend */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Web & Backend</h2>
            <p className="mt-2 text-gray-600">
              Conception d’API, traitement de données, logique métier, intégration front.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Angular", "Spring Boot", "REST API", "HTML", "CSS", "Tailwind"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Traitement d’images */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Traitement d’images</h2>

            <p className="mt-2 text-gray-600">
              Analyse et manipulation d’images numériques dans un contexte académique.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Python", "OpenCV", "NumPy", "Matplotlib"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Filtrage et transformations d’images</li>
              <li>• Détection de contours et régions d’intérêt</li>
              <li>• Visualisation et analyse de résultats</li>
            </ul>

            <p className="mt-4 text-sm italic text-gray-500">
              Compétences développées dans le cadre du cours INF600F (UQAM).
            </p>
          </section>

          {/* Tests & Qualité */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Tests & Qualité</h2>
            <p className="mt-2 text-gray-600">
              Tests unitaires, couverture, bonnes pratiques et code maintenable.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["JUnit", "CUnit", "JaCoCo", "Bats", "Gcov"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Gestion d’erreurs et cas limites</li>
              <li>• Code modulaire, lisible et documenté</li>
              <li>• Mesure de couverture et amélioration continue</li>
            </ul>
          </section>

          {/* Outils & Cloud */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Outils & Cloud</h2>
            <p className="mt-2 text-gray-600">
              Automatisation, collaboration et déploiement.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Git", "GitLab CI", "Maven", "Makefile", "Firebase", "Google Cloud"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Feature branching, merge requests, revues de code</li>
              <li>• Build & packaging (Maven / Makefile)</li>
              <li>• Déploiement & suivi (Firebase / GCP)</li>
            </ul>
          </section>

          {/* Méthodologies & Scrum */}
          <section className="rounded-2xl border bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold">Méthodologies & Scrum</h2>

            <p className="mt-2 text-gray-600">
              Organisation du travail, collaboration et livraison incrémentale en équipe.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["Scrum", "Agile", "User Stories", "Sprint Planning", "Daily", "Review", "Retro"].map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-sm">
                  {s}
                </span>
              ))}
            </div>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Découpage des tâches, priorisation et suivi</li>
              <li>• Collaboration et communication en équipe</li>
              <li>• Revues de code et amélioration continue</li>
            </ul>
          </section>
        </div>

        {/* Footer nav */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <a
            href="/"
            className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
          >
            Retour à l’accueil
          </a>

          <a
            href="/projects"
            className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
          >
            Projets
          </a>
        </div>
      </div>
    </main>
  );
}
