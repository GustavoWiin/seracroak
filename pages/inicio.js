export default function SalesPage() {
  const faqs = [
    {
      q: "O que exatamente eu recebo?",
      a: "Você recebe um relatório detalhado de consultas públicas realizadas em seu próprio nome. Inclui processos, possíveis indenizações, registros em andamento e qualquer menção em bancos de dados abertos, tudo organizado de forma clara e profissional.",
    },
    {
      q: "Vocês consultam terceiros?",
      a: "Não. Todas as buscas são feitas apenas no nome do contratante. Não realizamos consultas em nomes de terceiros, garantindo ética e privacidade.",
    },
    {
      q: "Em quanto tempo eu recebo o resultado?",
      a: "Normalmente entregamos o relatório em até 24h úteis, dependendo da complexidade da busca e do volume de informações encontradas.",
    },
    {
      q: "Essas informações são confiáveis?",
      a: "Sim. Todas as consultas são feitas em fontes oficiais e públicas. Nosso trabalho é reunir, organizar e explicar em linguagem simples o que cada item significa.",
    },
  ];

  const bullets = [
    {
      title: "Transparência",
      desc: "Você sabe exatamente onde buscamos e o que encontramos. Nenhuma informação escondida, apenas dados oficiais no seu nome.",
    },
    {
      title: "Clareza e objetividade",
      desc: "Relatório organizado, com explicações simples para que você entenda cada resultado sem complicações jurídicas.",
    },
    {
      title: "Privacidade garantida",
      desc: "As consultas são feitas apenas em seu nome, sem exposição de terceiros. Segurança e ética em primeiro lugar.",
    },
  ];

  const steps = [
    { n: 1, title: "Você solicita a busca", desc: "Basta fornecer seu nome completo e CPF para realizarmos as consultas." },
    { n: 2, title: "Nós pesquisamos em fontes oficiais", desc: "Verificamos processos, ações judiciais, indenizações e registros relacionados ao seu nome." },
    { n: 3, title: "Você recebe um relatório claro", desc: "Em até 24h úteis, entregamos um documento organizado e explicativo com todos os resultados." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* LOGO AREA */}
      <header className="w-full bg-white shadow-sm">
	   <title>Consulta no Seu Nome – Relatórios</title>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <img src="/images/logo.png" alt="Logo" className="logo-brand" />
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">Consulta em seu próprio nome</span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Descubra se há <span className="text-blue-600">processos, indenizações ou registros</span> no seu nome
              </h1>
              <p className="mt-5 text-lg text-gray-600">
                Nosso serviço realiza buscas rápidas e confiáveis em bancos de dados oficiais para mostrar se existe algo relacionado ao seu CPF ou nome.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="https://pay.meunometemcoisa.online/68c3aee0f0dfc609354641d0" className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 active:scale-[0.99] transition">
                  Quero consultar meu nome agora
                </a>
                <a href="#beneficios" className="text-gray-600 hover:text-gray-900">Ver como funciona</a>
              </div>

              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><span className="i-check" />Privacidade total</div>
                <div className="flex items-center gap-2"><span className="i-check" />Resultados em até 24h</div>
                <div className="flex items-center gap-2"><span className="i-check" />Fontes oficiais</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p>Exemplo de relatório simples e objetivo.</p>
                  <p>Mostra se há processos ou indenizações no seu nome.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / SELLOS */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span>Busca oficial</span>
            <span>Relatório confiável</span>
            <span>Privacidade</span>
            <span>Entrega rápida</span>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Por que contratar nosso serviço?</h2>
          <p className="mt-3 text-gray-600">Porque você merece clareza e tranquilidade sobre o que existe em seu nome.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {bullets.map((b, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
              <p className="mt-2 text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Como funciona</h2>
            <p className="mt-3 text-gray-600">Um processo simples e seguro para você entender se há algo em seu nome.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
<section className="mx-auto max-w-6xl px-6 py-16">
  <div className="grid gap-6 md:grid-cols-3">
    {[
      {
        nome: "Maria Souza",
        status: "Relatório entregue",
        depoimento:
          "Descobri que havia um processo trabalhista no meu nome que eu nem sabia. O relatório foi direto ao ponto e já consegui procurar meus direitos.",
      },
      {
        nome: "João Pereira",
        status: "Consulta concluída",
        depoimento:
          "Eu tinha dúvidas se havia alguma dívida judicial. A consulta mostrou que estava limpo e me trouxe muita tranquilidade.",
      },
      {
        nome: "Ana Lima",
        status: "Relatório detalhado",
        depoimento:
          "Recebi em menos de 24h um PDF organizado com todos os resultados. Agora entendo claramente cada menção ao meu nome.",
      },
    ].map((c, i) => (
      <div
        key={i}
        className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="logo-avatar" />
          <div>
            <p className="text-sm font-semibold text-gray-900">{c.nome}</p>
            <p className="text-xs text-gray-500">{c.status}</p>
          </div>
        </div>
        <p className="mt-4 text-gray-700">“{c.depoimento}”</p>
      </div>
    ))}
  </div>
</section>


      {/* PREÇO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Valor acessível</h2>
            <p className="mt-3 text-gray-600">Sem letras miúdas. Você recebe clareza e tranquilidade.</p>
          </div>

          <div className="mx-auto mt-10 max-w-lg rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex items-baseline justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Consulta no seu nome</h3>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-gray-900">R$ 68,90</div>
                <div className="text-xs text-gray-500">pagamento único</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li>• Relatório completo em até 24h úteis</li>
              <li>• Apenas no nome do contratante</li>
              <li>• Fontes oficiais e públicas</li>
              <li>• Explicações claras de cada item</li>
            </ul>
            <a href="https://pay.meunometemcoisa.online/68c3aee0f0dfc609354641d0" className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow hover:bg-blue-700 active:scale-[0.99] transition">
              Solicitar minha consulta
            </a>
            <p className="mt-3 text-center text-xs text-gray-500">Precisa de mais detalhes? Entre em contato conosco.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6" open={i===0}>
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-gray-900">
                {f.q}
                <span className="ml-4 select-none rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-500 group-open:hidden">abrir</span>
                <span className="ml-4 hidden select-none rounded-md border border-gray-300 px-2 py-1 text-xs text-gray-500 group-open:inline">fechar</span>
              </summary>
              <p className="mt-3 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(60%_60%_at_100%_0%,white,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">Descubra agora o que existe no seu nome</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Solicite sua consulta e receba em até 24h um relatório claro e organizado com todos os dados encontrados.
          </p>
          <a href="https://pay.meunometemcoisa.online/68c3aee0f0dfc609354641d0" className="mt-8 inline-flex items-center justify-center rounded-xl bg-white/95 px-6 py-3 text-base font-semibold text-blue-700 shadow hover:bg-white">
            Quero consultar meu nome agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <p>© 2025. Todos os direitos reservados.</p>
            </div>
            <nav className="flex gap-6">
              <a href="/politica-de-privacidade" className="hover:text-gray-700">Política de Privacidade</a>
              <a href="/termos-de-uso" className="hover:text-gray-700">Termos de Uso</a>
              <a href="/servicos" className="hover:text-gray-700">Suporte</a>
            </nav>
          </div>
        </div>
      </footer>

      {/* tiny icon util */}
      <style jsx>{`
        .i-check::before { content: "✔"; }
        .logo-brand {
          width: 64px;
          height: 64px;
          display: block;
          object-fit: contain;
          image-rendering: -webkit-optimize-contrast;
          filter: drop-shadow(0 1px 0 rgba(0,0,0,0.04));
        }
        .logo-badge {
          width: 48px;
          height: 48px;
          display: block;
          object-fit: contain;
        }
        .logo-avatar {
          width: 40px;
          height: 40px;
          display: block;
          object-fit: contain;
          border-radius: 0.75rem; /* leve arredondado, mantém formato quadrado transparente */
          background: transparent;
        }
        @media (min-width: 768px) {
          .logo-brand { width: 72px; height: 72px; }
        }
      `}</style>
	  
	  <style jsx global>{`
  /* Base polish */
  html { scroll-behavior: smooth; }
  :root {
    --radius-xl: 1.25rem;
    --elev-1: 0 8px 24px rgba(16, 24, 40, 0.08);
    --elev-2: 0 12px 32px rgba(16, 24, 40, 0.12);
    --ring: 0 0 0 3px rgba(37, 99, 235, 0.18);
  }

  /* HERO animated glow */
  section.relative:first-of-type::before {
    content: "";
    position: absolute; inset: -20% -10% auto -10%;
    height: 60%;
    background: radial-gradient(40% 50% at 50% 50%, rgba(59,130,246,.18), transparent 70%);
    filter: blur(20px);
    animation: glow 12s ease-in-out infinite alternate;
    pointer-events: none;
  }
  @keyframes glow {
    0%   { transform: translateY(0) scale(1);   opacity: .9; }
    100% { transform: translateY(10px) scale(1.08); opacity: 1; }
  }

  /* Cards: lift, shine, and smooth edges */
  .rounded-2xl.bg-white.shadow-sm {
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    border-radius: var(--radius-xl);
    box-shadow: var(--elev-1);
  }
  .rounded-2xl.bg-white.shadow-sm:hover {
    transform: translateY(-3px);
    box-shadow: var(--elev-2);
    border-color: rgba(59,130,246,.25) !important;
  }

  /* CTA buttons */
  a.bg-blue-600, a.bg-white\\/95 {
    position: relative;
    transition: transform .15s ease, box-shadow .2s ease, background-color .2s ease, color .2s ease;
    will-change: transform;
  }
  a.bg-blue-600:hover { box-shadow: 0 10px 24px rgba(59,130,246,.35); transform: translateY(-1px); }
  a.bg-blue-600:active { transform: translateY(0); }
  a.bg-white\\/95:hover { box-shadow: 0 10px 24px rgba(255,255,255,.35); transform: translateY(-1px); }
  /* subtle pulse on the primary CTA in hero and final section */
  section.relative:first-of-type a.bg-blue-600,
  section.bg-gradient-to-br a.bg-white\\/95 {
    animation: pulseSoft 2.8s ease-in-out infinite;
  }
  @keyframes pulseSoft {
    0%, 100% { box-shadow: 0 10px 24px rgba(59,130,246,.25); }
    50%      { box-shadow: 0 14px 32px rgba(59,130,246,.40); }
  }

  /* Links */
  a { transition: color .2s ease, opacity .2s ease; }
  a:hover { opacity: .92; }

  /* Logos */
  .logo-brand, .logo-badge, .logo-avatar {
    transition: transform .25s ease, filter .25s ease;
  }
  .logo-brand:hover, .logo-badge:hover, .logo-avatar:hover {
    transform: translateY(-2px) scale(1.03);
    filter: drop-shadow(0 6px 14px rgba(0,0,0,.08));
  }

  /* FAQ (details/summary) */
  details { transition: background-color .25s ease; border-radius: var(--radius-xl); }
  details[open] { background: linear-gradient(180deg, rgba(59,130,246,.06), transparent 60%); }
  details summary { list-style: none; }
  details summary::-webkit-details-marker { display: none; }
  details summary::after {
    content: "▸";
    font-size: .9rem;
    transform: translateY(1px);
    transition: transform .2s ease;
    opacity: .6;
  }
  details[open] summary::after { transform: rotate(90deg) translateX(2px); opacity: .9; }

  /* Inputs (se um dia adicionar formulário/checkout/modal) */
  input, select, textarea {
    border-radius: .9rem;
    transition: box-shadow .2s ease, border-color .2s ease, background-color .2s ease;
  }
  input:focus, select:focus, textarea:focus {
    outline: none; box-shadow: var(--ring); border-color: rgba(59,130,246,.45);
  }

  /* Section separators with soft fade */
  section.border-y { position: relative; overflow: hidden; }
  section.border-y::after {
    content: ""; position: absolute; left: 50%; transform: translateX(-50%);
    bottom: -2px; width: 60%; height: 2px;
    background: radial-gradient(50% 100% at 50% 50%, rgba(59,130,246,.25), transparent 70%);
    filter: blur(2px);
    pointer-events: none;
  }

  /* Footer hover links */
  footer a:hover { text-decoration: underline; }

  /* Reduce motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`}</style>

    </main>
  );
}
