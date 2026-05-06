/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-slate-950 px-8 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-display font-bold text-brand-indigo">
          Dev&Lead
        </div>
        
        <div className="font-display text-xs uppercase tracking-widest text-slate-500">
          © 2026 Apresentação e Portfólio de Felipe Costa. Construído com Vite/React.
        </div>

        <div className="flex gap-6 font-display text-xs uppercase tracking-widest">
          {[
            { label: 'GitHub', href: 'https://github.com/felipepitoko' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/felipecostapy' },
            { label: 'Email', href: 'mailto:lip-sousa@hotmail.com' }
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== 'Email' ? "_blank" : undefined}
              rel={social.label !== 'Email' ? "noopener noreferrer" : undefined}
              className="text-slate-500 transition-colors hover:text-brand-indigo"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
