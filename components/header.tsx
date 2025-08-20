export function Header() {
  return (
    <header className="fixed top-10 left-0 right-0 w-2/3 rounded-4xl mx-auto bg-brand-second z-50 flex justify-between items-center px-8 py-6">
      <h1 className="text-xl font-medium text-brand-text">Nahom Dibaba</h1>
      <nav className="flex gap-8">
        <a
          href="#home"
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          Home
        </a>
        <a
          href="#works"
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          Works
        </a>
        <a
          href="#about"
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-brand-text/70 hover:text-brand-text transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
