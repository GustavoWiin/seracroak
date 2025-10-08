import Head from "next/head";

export default function PoliticaDePrivacidade() {
  const atualizadoEm = "27 de agosto de 2025";

  return (
    <>
      <Head>
        <title>Política de Privacidade — Benefic Verific</title>
        <meta
          name="description"
          content="Política de Privacidade da Benefic Verific: como coletamos, usamos e protegemos seus dados pessoais."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
        {/* Header */}
        <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            <a href="/inicio" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <span className="font-semibold text-gray-900">Benefic Verific</span>
            </a>
            <nav className="hidden sm:flex items-center gap-6 text-sm">
              <a href="/servicos" className="text-gray-600 hover:text-gray-900">Serviços</a>
              <a href="/termos-de-uso" className="text-gray-600 hover:text-gray-900">Termos</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Política de Privacidade
            </h1>
            <p className="mt-3 text-gray-600">Última atualização: {atualizadoEm}</p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">1. Informações que coletamos</h2>
              <p className="mt-2 text-gray-700">
                Coletamos apenas os dados necessários para executar a consulta em seu nome, tais como
                <strong> nome completo</strong> e, opcionalmente, <strong>CPF/CNPJ</strong> para melhor
                diferenciação de homônimos. Não coletamos informações sensíveis além do necessário para
                a prestação do serviço.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">2. Como usamos seus dados</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>Realizar consultas em bases públicas e oficiais;</li>
                <li>Gerar e entregar o relatório solicitado;</li>
                <li>Cumprir obrigações legais e de auditoria.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">3. Compartilhamento</h2>
              <p className="mt-2 text-gray-700">
                Não vendemos seus dados. Compartilhamos informações somente quando estritamente
                necessário para cumprir a lei ou executar o serviço (ex.: provedores de infraestrutura).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">4. Segurança e retenção</h2>
              <p className="mt-2 text-gray-700">
                Adotamos medidas técnicas e administrativas para proteger seus dados. Informações
                operacionais são retidas apenas pelo tempo necessário para execução e comprovação do
                serviço, salvo obrigações legais em contrário.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">5. Seus direitos</h2>
              <p className="mt-2 text-gray-700">
                Você pode solicitar acesso, correção ou exclusão dos seus dados pessoais. Para exercer
                seus direitos, fale com a gente pelo e-mail{" "}
                <a className="text-blue-600 hover:underline" href="mailto:contato@meunometemcoisa.online">
                  contato@meunometemcoisa.online
                </a>.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-blue-900">
              <p className="text-sm">
                Em caso de dúvidas sobre esta Política, entre em contato. Teremos prazer em ajudar.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600 flex flex-wrap items-center justify-between gap-4">
            <p>© 2025 Benefic Verific. Todos os direitos reservados.</p>
            <a href="mailto:contato@meunometemcoisa.online" className="hover:text-gray-900">
              contato@meunometemcoisa.online
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
