const WHATSAPP_NUMBER = "919989163332";

export function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Next360 on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 ease-gentle hover:-translate-y-0.5 hover:shadow-2xl"
    >
      <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true" />
    </a>
  );
}