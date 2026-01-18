export default function ContactPage() {
  return (
    <main className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-4 text-gray-600">
            Je suis ouvert aux opportunités en développement web / backend. N’hésitez pas à me contacter.
          </p>
        </div>

        {/* Card */}
        <section className="mt-16 rounded-2xl border bg-white p-10 shadow-sm">
          <h2 className="text-xl font-semibold">Me joindre</h2>
          <p className="mt-2 text-gray-600">
            Réponse rapide par email. Vous pouvez aussi consulter mes profils.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Email */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a
                href="mailto:mbelouephraim04@gmail.com"
                className="mt-2 block font-medium underline"
              >
                mbelouephraim04@gmail.com
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Le meilleur moyen de me contacter.
              </p>
            </div>

            {/* LinkedIn */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/ton-profil"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium underline"
              >
                Voir mon profil
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Parcours, expériences et réseau.
              </p>
            </div>

            {/* GitLab / GitHub */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">Code</p>
              <a
                href="https://github.com/ephrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium underline"
              >
                Voir mes dépôts
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Projets, commits et qualité du code.
              </p>
            </div>

            {/* CV */}
            <div className="rounded-xl border p-6">
              <p className="text-sm font-medium text-gray-500">CV</p>
              <a
                href="/BignozaEphraim_MBELOU_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-medium underline"
              >
                Télécharger mon CV (PDF)
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Version à jour en PDF.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">
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
            <a
              href="/skills"
              className="rounded-lg border px-6 py-3 font-medium hover:bg-gray-100"
            >
              Compétences
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
