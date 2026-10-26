# Hands-On Harness Engineering Tutorial Slides

Interactive GitHub Pages slide deck for a 10-chapter hands-on tutorial class based on the book:
**Harness Engineering: Design Patterns for Securing Long-Horizon Multi-Agent AI Systems** by Ken Huang, CISSP.

- **Live Presentation Deck:** `https://kenhuangus.github.io/harness-engineering-tutorial-slides/`
- **Companion Lab Repository:** `https://github.com/kenhuangus/HarnessLab`
- **Published Book:** `https://www.amazon.com/dp/B0HF3F86YM`
- **Author Site:** `https://distributedapps.ai/`
- **Coding-Agent Environment Setup Reference:** `https://kenhuangus.github.io/packt-harness/slides.html#1`

## Local Preview

```bash
cd harness-engineering-tutorial-slides
python -m http.server 8080
```

Open `http://127.0.0.1:8080/#1` in your browser.

## Running the 10-Chapter Labs

All labs are deterministic and dependency-free using Python 3.11+ standard library:

```bash
git clone https://github.com/kenhuangus/HarnessLab.git
cd HarnessLab
python -m venv .venv

# Windows (PowerShell):
.venv\Scripts\Activate.ps1

# macOS / Linux:
source .venv/bin/activate

# Install in editable mode:
python -m pip install -e .

# List all 10 registered chapter labs:
python -m harnesslab.cli list

# Run individual chapter lab (e.g., Chapter 1):
python -m harnesslab.cli run ch01 --json

# Run all 10 chapter labs:
python -m harnesslab.cli run all

# Run full unit test suite:
python -m unittest discover -s tests
```

## Structure of the Presentation

1. **Slide 1: Hero** — Course overview, book references, and direct links.
2. **Slide 2: About the Instructor** — Ken Huang, CISSP bio, credentials, 10 academic and industry books, and major publishers.
3. **Slide 3: Course Agenda** — 10-chapter map across Foundations & Control, Reliability, State, and Fleet Scale.
4. **Slide 4: Universal Environment Setup** — Interactive command steps with one-click copy buttons and OS instructions.
5. **Slides 5–14: The 10 Hands-On Chapter Labs**:
   - **Ch 01: Control Plane** — Unsafe shared-tool swarm vs. secure harness control plane.
   - **Ch 02: Autonomy** — Graduated autonomy ladder, capability budgets, lease renewal, and rollback hooks.
   - **Ch 03: Identity** — Per-agent identity, task-scoped audience binding, delegation chains, and key rotation.
   - **Ch 04: Intent** — Purpose-scoped contracts, semantic drift detection, and call sanitization.
   - **Ch 05: Context** — Trust tiers, indirect prompt injection quarantine, and lethal-trifecta containment.
   - **Ch 06: Memory** — State firewall, append-only memory ledger, tenant isolation, and tombstone forgetting.
   - **Ch 07: Observability** — PII-redacted spans, SHA-256 evidence envelopes, and regression gates.
   - **Ch 08: Runtime Steering** — Dynamic intervention, temporary policy overlays with TTL, and safe rollback.
   - **Ch 09: Scalability** — Fleet bulkheads, token-bucket back-pressure, and idempotency ledgers.
   - **Ch 10: Data Governance** — Classification-aware routing, residency enforcement, and verifiable dual-layer erasure.
6. **Slide 15: Course Finish Line** — Summary of the teaching cycle, tabletop-to-code mapping, and resource links.
