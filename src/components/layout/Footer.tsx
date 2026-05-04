/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-display font-bold text-brand-indigo">
          DevArchitect
        </div>
        
        <div className="font-display text-xs uppercase tracking-widest text-slate-500">
          © 2024 Portfólio de Desenvolvedor. Construído com Vite/React.
        </div>

        <div className="flex gap-6 font-display text-xs uppercase tracking-widest">
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-slate-500 transition-colors hover:text-brand-indigo"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
