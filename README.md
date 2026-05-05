# ALPS -- Paper Website

Project page for the SIGGRAPH 2026 paper *Gradient Descent in the ALPS:
Abstracted Low-Poly Stylization and Fabrication* by Ruben Wiersma,
Alexandre Binninger, Peizhuo Li, Tanguy Magne, Annika Oehri, Aviv Segall,
Danielle Luterbacher, Marcel Padilla, Jing Ren and Olga Sorkine-Hornung
(ETH Zürich). Built with React 19, Vite, and Tailwind CSS 4, and deployed
automatically to GitHub Pages.

**Live site:** <https://alexandrebinninger.github.io/ALPS/>

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is emitted to `dist/`.

## Deployment

Pushes to `main` are deployed automatically via the GitHub Actions
workflow at [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
Pages must be enabled for the repository with the source set to
*GitHub Actions*.

## Citation

```bibtex
@inproceedings{igl:ALPS:2026,
  author    = {Wiersma, Ruben and Binninger, Alexandre and Li, Peizhuo and
               Magne, Tanguy and Oehri, Annika and Segall, Aviv and
               Luterbacher, Danielle and Padilla, Marcel and Ren, Jing and
               Sorkine-Hornung, Olga},
  title     = {Gradient Descent in the {ALPS}: Abstracted Low-Poly Stylization and Fabrication},
  booktitle = {SIGGRAPH Conference Papers '26},
  year      = {2026},
  publisher = {ACM},
  doi       = {10.1145/3799902.3811050}
}
```
