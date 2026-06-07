import { useScrollReveal } from '../hooks/useScrollReveal.js';

const WHATSAPP_NUMBER = '584128843696';
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`;
const WHATSAPP_DISPLAY = '+58 412 884 3696';

const WHATSAPP_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-8 h-8"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section
      ref={ref}
      id="contacto"
      className={`reveal relative pt-20 md:pt-32 pb-20 md:pb-32 overflow-hidden ${isVisible ? 'is-visible' : ''}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(255,102,0,0.18), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,102,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.08) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container border border-white/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-6">
          Hablemos
        </span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          ¡Hagamos Realidad tu{' '}
          <span className="text-gradient-orange">Próxima Página Web!</span>
        </h2>
        <p className="text-text-medium text-lg leading-relaxed max-w-2xl mx-auto mb-12">
          Sin formularios ni pasos intermedios. Escríbenos directamente por
          WhatsApp y en minutos estarás coordinando tu Demostración Gratuita
          con nuestro equipo.
        </p>

        <div className="group relative bg-surface-container border-2 border-white/10 hover:border-brand-primary rounded-2xl p-8 md:p-12 max-w-2xl mx-auto transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,102,0,0.35)]">
          <div
            className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 rounded-2xl cta-gradient flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,102,0,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_45px_rgba(255,102,0,0.7)] transition-all duration-300"
            aria-hidden="true"
          >
            {WHATSAPP_ICON}
          </div>

          <div className="pt-6">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
              WhatsApp Directo
            </h3>
            <p className="text-text-medium leading-relaxed mb-8 max-w-md mx-auto">
              Respuesta rápida, atención humana y asesoría personalizada para
              construir la landing que tu negocio merece.
            </p>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-full cta-gradient text-white font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,102,0,0.6)] w-full sm:w-auto"
            >
              {WHATSAPP_ICON}
              Escríbenos por WhatsApp
              <span className="sr-only">(se abre en una pestaña nueva)</span>
            </a>

            <p className="text-text-medium text-sm mt-6 tracking-wide">
              <span className="text-white font-semibold">{WHATSAPP_DISPLAY}</span>
            </p>
          </div>
        </div>

        <p className="text-text-medium mt-10 max-w-2xl mx-auto">
          Atención disponible los 7 días de la semana.{' '}
          <span className="text-white font-semibold">
            ¡Escríbenos ahora mismo y responderemos a tu idea de negocio de inmediato!
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
