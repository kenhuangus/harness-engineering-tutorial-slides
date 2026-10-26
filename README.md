# Hands-On Harness Engineering Tutorial Slides

> 🌐 **Live Course Slide Deck (GitHub Pages):**  
> **[https://kenhuangus.github.io/harness-engineering-tutorial-slides/](https://kenhuangus.github.io/harness-engineering-tutorial-slides/)**

Interactive 21-slide deck for a 10-chapter hands-on tutorial masterclass based on the book:
**Harness Engineering: Design Patterns for Securing Long-Horizon Multi-Agent AI Systems** by Ken Huang, CISSP.

- **Live Presentation Deck:** [https://kenhuangus.github.io/harness-engineering-tutorial-slides/](https://kenhuangus.github.io/harness-engineering-tutorial-slides/)
- **Companion Lab Repository:** [https://github.com/kenhuangus/HarnessLab](https://github.com/kenhuangus/HarnessLab)
- **Published Book:** [Harness Engineering (Amazon Kindle)](https://www.amazon.com/dp/B0HF3F86YM)
- **Author Site:** [https://distributedapps.ai/](https://distributedapps.ai/)

---

## Local Preview

```bash
cd harness-engineering-tutorial-slides
python -m http.server 8080
```

Open `http://127.0.0.1:8080/#1` in your browser. Use `←` / `→` arrow keys, spacebar, numeric Go-To input (`g`), or the dropdown selector to jump between slides.

---

## Universal Lab Setup (Zero Cloud Keys Required)

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

# Run all 10 chapter labs in batch:
python -m harnesslab.cli run all

# Run automated student verification & readiness certification:
python -m harnesslab.cli verify

# Run 3-agent autonomous remediation fleet capstone:
python -m harnesslab.cli capstone
```

---

## Structure of the 21-Slide Presentation

1. **Slide 1: Hero** — Masterclass overview, book references, and quickstart actions.
2. **Slide 2: About the Instructor** — Ken Huang, CISSP bio, credentials, 10 academic and industry books, and major publishers (Springer, Cambridge, Wiley, Packt).
3. **Slide 3: Core Thesis** — Deterministic control plane vs. probabilistic model layer, why prompts fail, and the 5-stage long-horizon agent lifecycle.
4. **Slide 4: Course Agenda** — 10-chapter map across Foundations & Control, Reliability, State, and Fleet Scale.
5. **Slide 5: Curriculum Syllabus & Delivery Tracks** — 3 delivery formats (4-Hour Executive Briefing, 2-Day Engineering Bootcamp, 4-Week University Seminar), the 5-step teaching protocol, and grading rubric.
6. **Slide 6: Core Control Taxonomies & Steering Field Manual** — The 5 policy decisions (`allow`, `deny`, `escalate`, `warn`, `rewrite`), 6 trust tiers, 6 data classifications, 5 action risks, and the 7-step runtime steering lifecycle.
7. **Slide 7: Universal Environment Setup** — Interactive command steps with one-click copy buttons and multi-OS activation instructions.
8. **Slides 8–17: The 10 Executable Chapter Labs** (each featuring CLI commands, failure injection challenges, invariant verification, decisions breakdown, and GitHub source links):
   - **Slide 8 (Ch 01): Control Plane** — Unsafe shared-tool swarm vs. secure harness control plane.
   - **Slide 9 (Ch 02): Autonomy** — Graduated autonomy ladder, capability budgets, lease renewal, and rollback hooks.
   - **Slide 10 (Ch 03): Identity** — Per-agent identity, task-scoped audience binding, delegation chains, and key rotation.
   - **Slide 11 (Ch 04): Intent** — Purpose-scoped contracts, semantic drift detection, and call sanitization.
   - **Slide 12 (Ch 05): Context** — Trust tiers, indirect prompt injection quarantine, and lethal-trifecta containment.
   - **Slide 13 (Ch 06): Memory** — State firewall, append-only memory ledger, tenant isolation, and tombstone forgetting.
   - **Slide 14 (Ch 07): Observability** — PII-redacted spans, SHA-256 evidence envelopes, and regression gates.
   - **Slide 15 (Ch 08): Runtime Steering** — Dynamic intervention, temporary policy overlays with TTL, and safe rollback.
   - **Slide 16 (Ch 09): Scalability** — Fleet bulkheads, token-bucket back-pressure, and idempotency ledgers.
   - **Slide 17 (Ch 10): Data Governance** — Classification-aware routing, residency enforcement, and verifiable dual-layer erasure.
9. **Slide 18: Architecture Decision Records (ADRs) in Enterprise Practice** — Enterprise ADR template structure, ADR-001 case study on deterministic code gateway decoupling vs. probabilistic prompt judges.
10. **Slide 19: Enterprise Platform Mapping** — Translation matrix from HarnessLab stdlib primitives to production cloud infrastructure (SPIFFE/SPIRE, OPA/Rego, AWS Bedrock Guardrails, PostgreSQL RLS, Temporal, OpenTelemetry).
11. **Slide 20: Enterprise Capstone: Autonomous Security Remediation Fleet** — End-to-end 3-agent fleet (Triage ➔ Patch ➔ Deploy) demonstrating context quarantine, purpose scoping, and privileged human approval gates.
12. **Slide 21: Automated Student Verification & Readiness Certification** — Live terminal scorecard display (`harnesslab verify`), 5-Gate Production Readiness Checklist, and links to all repository resources.

---

## Course Companion Artifacts in HarnessLab

- **[`WORKBOOK.md`](https://github.com/kenhuangus/HarnessLab/blob/main/WORKBOOK.md):** 10-chapter guided lab worksheets with observation and failure-injection exercises.
- **[`SYLLABUS.md`](https://github.com/kenhuangus/HarnessLab/blob/main/SYLLABUS.md):** Full master syllabus covering learning objectives, delivery models, teaching protocol, and Socratic discussion prompts.
- **[`QUICK_REFERENCE.md`](https://github.com/kenhuangus/HarnessLab/blob/main/QUICK_REFERENCE.md):** One-page quick reference desk card covering taxonomies and CLI commands.
- **[`adr/`](https://github.com/kenhuangus/HarnessLab/tree/main/adr):** Enterprise Architecture Decision Record templates and ADR-001 reference case study.
- **[`capstone/`](https://github.com/kenhuangus/HarnessLab/tree/main/capstone):** Complete runnable source code and unit tests for the 3-Agent Remediation Fleet.
