# FMMC: Foundation Models for Material Classification

Official project page for the CVPR 2026 paper:

**Harnessing the Power of Foundation Models for Accurate Material Classification**

Qingran Lin, Fengwei Yang, Chaolun Zhu

---

## Links

- **Paper / arXiv**: https://arxiv.org/abs/2603.17390
- **CVPR 2026 Poster**: https://cvpr.thecvf.com/virtual/2026/poster/38933
- **Project Page**: https://fmmc-project.github.io
- **Code / Dataset**: https://github.com/fmmc-project/foundation-models-material-classification

## Local Preview

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. No build step required.

## Deployment

Push to the `main` branch. GitHub Pages serves directly from the repository root.
No npm, no build tool, no dependencies.

## Adding Figures

Export figures from the paper and place them in `static/images/`:

| File | Recommended Source | Description |
|------|--------------------|-------------|
| `static/images/teaser.png` | Figure 1 from paper | Teaser / qualitative results |
| `static/images/pipeline.png` | Figure 4 from paper | Dual-stream architecture diagram |
| `static/images/results.png` | Figure 1 from paper | Qualitative results comparison |

The page automatically detects whether each image exists and shows a placeholder if not.

## File Structure

```
.
├── index.html              # Main project page
├── README.md
└── static/
    ├── css/
    │   └── style.css       # All styles
    ├── js/
    │   └── main.js         # BibTeX copy button
    └── images/             # Place exported figures here
        └── .gitkeep
```
