import { useState } from "react";

export default function Quiz() {
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [cookiesOpen, setCookiesOpen] = useState(true);

  const handleSubmit = async () => {
    setLoading(true);

    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const goDefault = async () => {
      await wait(300);
      window.location.href = "/inicio";
    };

    try {
      const res = await fetch("/api/session-token", { method: "POST" });
      const data = await res.json().catch(() => null);

      if (res.ok && data?.token) {
        window.location.href = `/api/go?token=${encodeURIComponent(
          data.token
        )}`;
      } else {
        await goDefault();
      }
    } catch {
      await goDefault();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <main className="wrapper">
        <section className="card">
          <h1 className="title">Consulte Fácil</h1>

          <div className="iconWrap" aria-hidden="true">
            <div className="iconCircle">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                role="img"
                aria-label="Protegido"
              >
                <defs>
                  <radialGradient id="shieldGrad" cx="50%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#4c82ff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#1a4bff" stopOpacity="0.95" />
                  </radialGradient>
                  <filter id="shieldGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow dx="0" dy="1" stdDeviation="1.6" floodColor="#1a4bff" floodOpacity="0.6" />
                  </filter>
                </defs>
                {/* Escudo mais visível */}
                <path
                  d="M12 3l7 3v6c0 4.418-3.582 8-7 8s-7-3.582-7-8V6l7-3z"
                  fill="url(#shieldGrad)"
                  filter="url(#shieldGlow)"
                />
                {/* Sinal correto */}
                <path
                  d="M10.6 13.4l-2.1-2.1 1.1-1.1 1 1 3.9-3.9 1.1 1.1-5 5z"
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeWidth="0.4"
                  filter="url(#shieldGlow)"
                />
              </svg>
            </div>
          </div>

          <p className="subtitle">
            Você pode estar apto à negociação. Clique abaixo para consultar
          </p>

          <button
            className="cta"
            onClick={() => setModalOpen(true)}
            aria-haspopup="dialog"
            aria-controls="modal-root"
          >
            CONSULTAR AGORA
          </button>

          <nav className="links" aria-label="links-legais">
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <span className="sep">|</span>
            <a href="/termos-de-uso">Termos de Uso</a>
          </nav>
        </section>
      </main>

      {cookiesOpen && (
        <div className="cookieBar" role="region" aria-label="cookies">
          <span>Usamos cookies para melhorar sua experiência.</span>
          <button
            type="button"
            className="cookieBtn"
            onClick={() => setCookiesOpen(false)}
          >
            Aceitar
          </button>
        </div>
      )}

      {modalOpen && (
        <div
          id="modal-root"
          className="backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal popIn">
            {step === 1 && (
              <>
                <h2 id="modal-title" className="modalTitle">
                  Bem-vindo ao portal de atendimento
                </h2>
                <p className="modalText">
                  Para continuar, faremos uma verificação simples.
                </p>
                <button className="primary microTilt" onClick={() => setStep(2)}>
                  Iniciar verificação
                </button>
                <button
                  className="ghost"
                  onClick={() => {
                    setModalOpen(false);
                    setStep(1);
                    setAnswer("");
                  }}
                >
                  Cancelar
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="sectionOver">Prova humana para prosseguir</h3>
                <h2 className="question">Quanto é 1 + 2?</h2>

                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Digite sua resposta"
                  className="input"
                />

                <div className="row">
                  <button
                    className="primary microTilt"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? "Verificando..." : "Prosseguir"}
                  </button>
                  <button
                    className="ghost"
                    onClick={() => {
                      setStep(1);
                      setAnswer("");
                    }}
                  >
                    Voltar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          background: #f2f6fb;
          color: #0f172a;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial,
            sans-serif;
        }
        button,
        input {
          outline: none;
        }
      `}</style>

      <style jsx>{`
        .page {
          min-height: 100dvh;
          display: grid;
          place-items: center;
          padding: 32px 16px 96px;
          background: #eef3f9;
        }

        .wrapper {
          width: 100%;
          display: grid;
          place-items: center;
        }

        .card {
          width: min(720px, 92vw);
          background: #ffffff;
          border-radius: 14px;
          padding: 36px 28px 28px;
          box-shadow: 0 10px 30px rgba(13, 30, 66, 0.08),
            0 2px 8px rgba(13, 30, 66, 0.06);
          text-align: center;
        }

        .title {
          margin: 0 0 8px;
          font-size: clamp(22px, 3.6vw, 28px);
          font-weight: 800;
          color: #0f1e42;
          letter-spacing: 0.2px;
        }

        .iconWrap {
          display: grid;
          place-items: center;
          margin: 18px 0 10px;
        }
        .iconCircle {
          width: 108px;
          height: 108px;
          border-radius: 999px;
          display: grid;
          place-items: center;
          background: radial-gradient(
            circle at 30% 30%,
            #f2f7ff,
            #dfeaff 60%,
            #cfe0ff
          );
          box-shadow: inset 0 2px 10px rgba(32, 71, 214, 0.08),
            0 10px 20px rgba(32, 71, 214, 0.08);
        }

        .subtitle {
          margin: 8px auto 18px;
          max-width: 560px;
          color: #3b4861;
          font-size: 15.5px;
        }

        .cta {
          appearance: none;
          border: none;
          cursor: pointer;
          padding: 12px 22px;
          border-radius: 10px;
          background: #2a66ff;
          color: #ffffff;
          font-weight: 800;
          letter-spacing: 0.4px;
          font-size: 14.5px;
          transition: transform 120ms ease, box-shadow 200ms ease,
            filter 200ms ease;
          box-shadow: 0 10px 24px rgba(42, 102, 255, 0.28);
        }
        .cta:hover {
          transform: translateY(-1px);
          filter: brightness(1.03);
        }
        .cta:active {
          transform: translateY(0);
          filter: brightness(0.98);
        }

        .links {
          margin-top: 18px;
          font-size: 14px;
        }
        .links a {
          color: #2a66ff;
          text-decoration: none;
          font-weight: 600;
        }
        .links a:hover {
          text-decoration: underline;
        }
        .sep {
          margin: 0 8px;
          color: #9aa7bd;
        }

        .cookieBar {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          bottom: 18px;
          width: min(860px, 92vw);
          background: #ffffff;
          color: #2b3851;
          border-radius: 10px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          box-shadow: 0 10px 26px rgba(14, 28, 54, 0.12),
            0 2px 8px rgba(14, 28, 54, 0.08);
        }
        .cookieBtn {
          appearance: none;
          border: none;
          cursor: pointer;
          padding: 10px 18px;
          border-radius: 8px;
          background: #2a66ff;
          color: #fff;
          font-weight: 800;
        }

        .backdrop {
          position: fixed;
          inset: 0;
          display: grid;
          place-items: center;
          background: rgba(10, 24, 56, 0.45);
          backdrop-filter: blur(2px);
          z-index: 50;
        }
        .modal {
          width: min(92vw, 520px);
          background: #ffffff;
          border-radius: 14px;
          padding: 22px;
          color: #0f172a;
          box-shadow: 0 18px 60px rgba(10, 24, 56, 0.25);
          border: 1px solid rgba(15, 23, 42, 0.06);
          text-align: center;
        }
        .popIn {
          animation: popIn 200ms ease-out both;
        }
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modalTitle {
          margin: 4px 0 8px;
          font-size: clamp(20px, 4vw, 26px);
          font-weight: 800;
          color: #0f1e42;
        }
        .modalText {
          margin: 0 0 18px;
          color: #42506a;
        }
        .sectionOver {
          margin: 2px 0 6px;
          font-size: 12px;
          letter-spacing: 0.6px;
          text-transform: uppercase;
          color: #6b7893;
        }
        .question {
          margin: 0 0 12px;
          font-size: 20px;
          font-weight: 800;
          color: #0f1e42;
        }
        .input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          outline: none;
          margin: 4px 0 16px;
          text-align: center;
          font-size: 16px;
          background: #ffffff;
          color: #0f172a;
          transition: box-shadow 160ms ease, transform 120ms ease,
            border-color 160ms ease;
        }
        .input:focus {
          box-shadow: 0 0 0 3px rgba(42, 102, 255, 0.18);
          border-color: rgba(42, 102, 255, 0.55);
          transform: translateY(-1px);
        }

        .row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .primary {
          flex: 1;
          min-width: 160px;
          appearance: none;
          border: none;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 10px;
          background: #2a66ff;
          color: #ffffff;
          font-weight: 800;
          transition: transform 120ms ease, box-shadow 250ms ease,
            filter 200ms ease;
          box-shadow: 0 10px 26px rgba(42, 102, 255, 0.28);
        }
        .primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .primary:hover:not(:disabled) {
          transform: translateY(-1px);
        }
        .primary:active:not(:disabled) {
          transform: translateY(0);
        }

        .ghost {
          flex: 0 1 auto;
          min-width: 120px;
          appearance: none;
          border: 1px solid rgba(15, 23, 42, 0.18);
          background: transparent;
          color: #0f172a;
          cursor: pointer;
          padding: 12px 18px;
          border-radius: 10px;
          transition: background 0.2s ease, transform 0.12s ease;
        }
        .ghost:hover {
          background: rgba(15, 23, 42, 0.04);
          transform: translateY(-1px);
        }
        .ghost:active {
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}
