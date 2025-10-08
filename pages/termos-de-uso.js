import Head from "next/head";

export default function TermosDeUso() {
  const atualizadoEm = "27 de agosto de 2025";

  return (
    <>
      <Head>
        <title>Termos de Uso — Benefic Verific</title>
        <meta
          name="description"
          content="Termos de Uso da Benefic Verific: regras de utilização do serviço de consulta em nome do contratante."
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
              <a href="/politica-de-privacidade" className="text-gray-600 hover:text-gray-900">Privacidade</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
          <div className="mx-auto max-w-3xl px-6 pt-16 pb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Termos de Uso
            </h1>
            <p className="mt-3 text-gray-600">Última atualização: {atualizadoEm}</p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">1. Aceitação</h2>
              <p className="mt-2 text-gray-700">
                Ao solicitar o serviço, você concorda com estes Termos e declara ser titular dos dados
                usados na consulta (nome/CPF/CNPJ). Não realizamos consultas em nome de terceiros.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">2. Escopo do serviço</h2>
              <ul className="mt-2 list-disc pl-5 text-gray-700 space-y-1">
                <li>Consulta em bases públicas e oficiais;</li>
                <li>Entrega de relatório com links e informações encontradas;</li>
                <li>Sem assessoria jurídica: o relatório tem caráter informativo.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">3. Limitações</h2>
              <p className="mt-2 text-gray-700">
                A disponibilidade de dados depende das fontes consultadas. Não garantimos a existência
                ou inexistência absoluta de registros. Resultados podem variar conforme homônimos,
                atualização das bases e restrições de acesso.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">4. Responsabilidades</h2>
              <p className="mt-2 text-gray-700">
                Não nos responsabilizamos por interpretações jurídicas do relatório ou decisões tomadas
                a partir dele. Recomendamos consultar um profissional qualificado quando necessário.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900">5. Contato</h2>
              <p className="mt-2 text-gray-700">
                Dúvidas sobre estes Termos? Fale com a gente em{" "}
                <a className="text-blue-600 hover:underline" href="mailto:contato@meunometemcoisa.online">
                  contato@meunometemcoisa.online
                </a>.
              </p>
            </div>

            <div className="rounded-xl bg-blue-50 p-4 text-blue-900">
              <p className="text-sm">
                Observação: este conteúdo não substitui aconselhamento jurídico.
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
