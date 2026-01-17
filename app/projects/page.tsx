export default function ProjectsPage() {
  return (
    <main className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold text-center">Projets</h1>

        <p className="mt-4 text-center text-gray-600">
          Projets académiques et personnels illustrant mes compétences en développement web,
          backend et qualité logicielle.
        </p>

        {/* Grille projets */}
        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Projet 1 — app-chat */}
          <div className="rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold">App Chat</h3>

              <span className="shrink-0 inline-block rounded-full bg-black px-3 py-1 text-xs text-white">
                Projet principal
              </span>
            </div>

            <p className="mt-2 text-gray-600">
              Application de messagerie web en temps réel permettant à des utilisateurs
              authentifiés d’échanger des messages et des images, avec affichage du statut
              de connexion des membres.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Tech : Angular · Spring Boot · Firebase · Google Cloud
            </p>

            <div className="mt-6 flex gap-6 text-sm font-medium">
              <a
                href="https://inf5190-chat-prod-d343b.web.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Démo
              </a>

              <a
                href="https://github.com/ephrp/APP-CHAT"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Code (GitHub)
              </a>
            </div>
          </div>

          {/* Projet 2 — Recherche de recettes */}
          <div className="rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Recherche de recettes</h3>

            <p className="mt-2 text-gray-600">
              Application en ligne de commande permettant de rechercher efficacement des recettes
              par catégorie et mot-clé à partir d’un fichier texte, avec génération de statistiques
              détaillées.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Tech : C · Listes chaînées · Makefile · CUnit
            </p>

            <div className="mt-6 flex gap-6 text-sm font-medium">
              <a
                href="https://github.com/ephrp/Gestion_Recettes"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Code (GitHub)
              </a>
            </div>
          </div>

          {/* Projet 3 — Gestion de remboursements */}
          <div className="rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Système de gestion de remboursements</h3>

            <p className="mt-2 text-gray-600">
              Application backend Java permettant de traiter des réclamations de remboursement
              à partir de fichiers JSON, avec validation des données, calculs financiers sécurisés,
              statistiques et forte couverture de tests.
            </p>

            <p className="mt-3 text-sm text-gray-500 italic">
              Projet réalisé sur plusieurs mois en équipe agile, avec un fort accent sur les bonnes
              pratiques de génie logiciel et la qualité du code.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Tech : Java · Maven · JSON Schema · JUnit · JaCoCo · GitLab CI
            </p>

            <div className="mt-6 flex gap-6 text-sm font-medium">
              <a
                href="https://github.com/ephrp/Gestion_Remboursements"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Code (GitHub)
              </a>
            </div>
          </div>

          {/* Projet 4 — Bataille navale */}
          <div className="rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Bataille navale (C)</h3>

            <p className="mt-2 text-gray-600">
              Jeu de bataille navale en C avec plateau dynamique, gestion complète des règles,
              statistiques de jeu et forte couverture de tests unitaires.
            </p>

            <p className="mt-3 text-sm text-gray-500 italic">
              Projet académique axé sur la maintenance logicielle, les tests et la qualité du code.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Tech : C · Makefile · CUnit · Bats · GCC
            </p>

            <div className="mt-6 flex gap-6 text-sm font-medium">
              <a
                href="https://github.com/ephrp/Bataille_Navale"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Code (GitHub)
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
