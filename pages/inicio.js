export default function SalesPage() {
  const faqs = [
    {
      q: "Como confirmar se existe dívida no meu nome?",
      a: "Confira seu CPF nos birôs (Serasa, SPC/Boa Vista) e consulte processos no site do Tribunal de Justiça do seu estado. Guarde os protocolos e capturas de tela para referência.",
    },
    {
      q: "Paguei e a negativação não saiu, e agora?",
      a: "A empresa tem prazo legal para retirar a negativação após a baixa. Guarde o comprovante do pagamento e abra uma solicitação formal. Persistindo, registre reclamação no consumidor.gov.br e, se necessário, busque orientação jurídica.",
    },
    {
      q: "Posso sofrer golpe tentando limpar meu nome?",
      a: "Sim. Desconfie de promessas de 'limpeza instantânea', boletos enviados por WhatsApp e pedidos de adiantamento. Negocie sempre pelos canais oficiais do credor ou birôs conhecidos.",
    },
    {
      q: "Tenho vários débitos. Por onde começo?",
      a: "Priorize dívidas com juros maiores (cartão e cheque especial), negocie as mais antigas pedindo desconto à vista e organize um orçamento para evitar novo endividamento.",
    },
  ];

  const bullets = [
    {
      title: "Entenda o que é negativação",
      desc: "É o registro de inadimplência em bancos de dados (ex.: Serasa, SPC). Ele afeta diretamente seu score e acesso a crédito.",
    },
    {
      title: "Mapeie tudo antes de negociar",
      desc: "Liste credor, valor atualizado, origem da dívida e eventuais processos. Ter clareza facilita pedir desconto e evitar cobranças indevidas.",
    },
    {
      title: "Negocie com segurança",
      desc: "Use canais oficiais: site/app do credor, plataformas reconhecidas dos birôs e acordos formalizados por e-mail/portal.",
    },
  ];

  const steps = [
    { n: 1, title: "Levante informações", desc: "Consulte CPF em birôs, verifique protestos no cartório e pesquise seu nome no Tribunal de Justiça." },
    { n: 2, title: "Valide a dívida", desc: "Confirme se a cobrança é legítima (dados do contrato, valor, juros). Questione divergências por escrito." },
    { n: 3, title: "Negocie com estratégia", desc: "Proponha acordo: priorize desconto à vista ou parcelas que caibam no orçamento. Exija comprovante e protocolo." },
    { n: 4, title: "Acompanhe a baixa", desc: "Após pagar, monitore a retirada da negativação. Guarde recibos e, se preciso, acione canais de defesa do consumidor." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800">
      {/* LOGO / HEAD */}
      <header className="w-full bg-white shadow-sm">
        <title>Dívidas no Seu Nome – Como verificar e corrigir</title>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="logo">
            <img src="/images/logo.png" alt="Logo" className="h-12 w-12 object-contain" />
          </div>
        </div>
      </header>

      {/* HERO – EXPLICATIVO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_30%_at_50%_0%,rgba(59,130,246,0.12),transparent_70%)]" />
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <img src="/images/logo.png" alt="Logo" className="logo-brand" />
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">Guia prático e gratuito</span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                Dívidas no seu nome? <span className="text-blue-600">Veja como identificar e resolver com segurança</span>
              </h1>
              <p className="mt-5 text-lg text-gray-600">
                Reunimos passos simples para você confirmar registros, evitar golpes e negociar com os credores pelos canais certos — sem promessas milagrosas.
              </p>

              {/* Removido botão externo de compra/redirecionamento */}
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2"><span className="i-check" />Conteúdo educativo</div>
                <div className="flex items-center gap-2"><span className="i-check" />Sem links de pagamento</div>
                <div className="flex items-center gap-2"><span className="i-check" />Foco em segurança</div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="mt-4 space-y-2 text-sm text-gray-500">
                  <p>Passo a passo para consultar e validar débitos.</p>
                  <p>Orientações para negociar e acompanhar a baixa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILARES / CONCEITOS */}
      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
            <img src="/images/logo.png" alt="Logo" className="logo-badge" />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <span>Informação clara</span>
            <span>Prevenção a golpes</span>
            <span>Negociação segura</span>
            <span>Organização financeira</span>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ PRECISA SABER */}
      <section id="beneficios" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Antes de qualquer negociação</h2>
          <p className="mt-3 text-gray-600">Entenda conceitos essenciais para não cair em armadilhas e defender seus direitos.</p>
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

      {/* COMO REGULARIZAR – PASSO A PASSO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Como regularizar dívidas no seu nome</h2>
            <p className="mt-3 text-gray-600">Siga a trilha abaixo e guarde comprovantes de cada etapa.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
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

      {/* ALERTAS RÁPIDOS (ANTIGAS “PROVAS SOCIAIS” SUBSTITUÍDAS) */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Cuidado com boletos por WhatsApp",
              desc: "Confirme o beneficiário e gere o acordo no portal oficial do credor. Desconfie de descontos 'irrecusáveis' enviados por terceiros.",
            },
            {
              title: "Guarde tudo",
              desc: "Comprovantes, protocolos, e-mails e capturas ajudam a exigir a baixa da negativação e resolver divergências de valor.",
            },
            {
              title: "Prefira canais oficiais",
              desc: "Sites/app do credor, plataformas reconhecidas dos birôs e atendimento documentado por e-mail são mais seguros.",
            },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
              <p className="mt-2 text-gray-700">{c.desc}</p>
            </div>
          ))}
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

      {/* RESUMO FINAL – SEM CTA EXTERNO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[radial-gradient(60%_60%_at_100%_0%,white,transparent_60%)]" />
        <div className="mx-auto max-w-6xl px-6 py-16 text-center text-white">
          <h2 className="text-3xl font-extrabold md:text-4xl">Organize, negocie e acompanhe a baixa</h2>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100">
            Verifique nos birôs, valide a cobrança, negocie pelo canal oficial e monitore a retirada da negativação. Segurança e documentação são as chaves.
          </p>
          {/* Nenhum botão externo aqui */}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-10 object-contain" />
              <p>© 2025. Conteúdo informativo. Todos os direitos reservados.</p>
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
          border-radius: 0.75rem;
          background: transparent;
        }
        @media (min-width: 768px) {
          .logo-brand { width: 72px; height: 72px; }
        }
      `}</style>
	  
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        :root {
          --radius-xl: 1.25rem;
          --elev-1: 0 8px 24px rgba(16, 24, 40, 0.08);
          --elev-2: 0 12px 32px rgba(16, 24, 40, 0.12);
          --ring: 0 0 0 3px rgba(37, 99, 235, 0.18);
        }

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

        a { transition: color .2s ease, opacity .2s ease; }
        a:hover { opacity: .92; }

        .logo-brand, .logo-badge, .logo-avatar {
          transition: transform .25s ease, filter .25s ease;
        }
        .logo-brand:hover, .logo-badge:hover, .logo-avatar:hover {
          transform: translateY(-2px) scale(1.03);
          filter: drop-shadow(0 6px 14px rgba(0,0,0,.08));
        }

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

        input, select, textarea {
          border-radius: .9rem;
          transition: box-shadow .2s ease, border-color .2s ease, background-color .2s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none; box-shadow: var(--ring); border-color: rgba(59,130,246,.45);
        }

        section.border-y { position: relative; overflow: hidden; }
        section.border-y::after {
          content: ""; position: absolute; left: 50%; transform: translateX(-50%);
          bottom: -2px; width: 60%; height: 2px;
          background: radial-gradient(50% 100% at 50% 50%, rgba(59,130,246,.25), transparent 70%);
          filter: blur(2px);
          pointer-events: none;
        }

        footer a:hover { text-decoration: underline; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
