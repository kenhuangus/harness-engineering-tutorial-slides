# Hands-On Harness Engineering Tutorial Slides

GitHub Pages slide deck for a 10-chapter hands-on tutorial class based on *Harness Engineering: Design Patterns for Securing Long-Horizon Multi-Agent AI Systems*.

## Live

After Pages is enabled: `https://kenhuangus.github.io/harness-engineering-tutorial-slides/`

## Local preview

```bash
cd harness-engineering-tutorial-slides
python -m http.server 8080
```

Open `http://127.0.0.1:8080/#1`.

## Labs

Companion code: https://github.com/PacktPublishing/Harness-Engineering-Design-Patterns

```bash
git clone https://github.com/PacktPublishing/Harness-Engineering-Design-Patterns.git
cd Harness-Engineering-Design-Patterns
python -m pip install -e .
python -m harnesslab.cli run all
```
