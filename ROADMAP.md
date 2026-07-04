# Roadmap

This is the working plan for Agent Platform, from the current draft specification to a stable v1.0. Milestones are sequenced, not scheduled — there are no target dates yet, because the pace depends on who shows up (see [CONTRIBUTING.md](CONTRIBUTING.md)).

Status legend: 🟢 done · 🟡 in progress · ⚪ not started

## Table of Contents

- [v0.1 — Specification Draft](#v01--specification-draft)
- [v0.2 — Core Server & TypeScript SDK](#v02--core-server--typescript-sdk)
- [v0.3 — CLI & Auto-Discovery](#v03--cli--auto-discovery)
- [v0.4 — Simulation & Conformance](#v04--simulation--conformance)
- [v0.5 — Multi-Language SDKs](#v05--multi-language-sdks)
- [v1.0 — Stable Spec](#v10--stable-spec)
- [Post-1.0 / Exploratory](#post-10--exploratory)
- [Explicit Non-Goals](#explicit-non-goals)
- [How This Roadmap Changes](#how-this-roadmap-changes)

## v0.1 — Specification Draft
**Status: 🟡 in progress**

Publish the specification and get it in front of enough real use cases to find its rough edges before anything is built against it.

- [x] Draft the core spec: Agent Endpoint, Skills vs. Tools, core principles
- [x] Publish README, CONTRIBUTING, and this roadmap
- [ ] Collect at least 3–5 worked examples from different business types (retail, SaaS, booking, marketplace)
- [ ] Resolve open questions on the authentication model
- [ ] Resolve open questions on how skills should be versioned independently of tools

**Exit criteria:** rough consensus on the shape of the Agent Endpoint and the Skills/Tools split, from more than one contributor.

## v0.2 — Core Server & TypeScript SDK
**Status: ⚪ not started**

The first thing anyone can actually run.

- [ ] Core Server: serves a conforming `agent.company.com` from a config file
- [ ] TypeScript SDK for defining skills and tools in code
- [ ] Minimal `docs` and `about` endpoints generated automatically
- [ ] One reference deployment (the coffee shop example from the README, made real)

**Exit criteria:** a developer can clone the repo, define a handful of skills, and get a working Agent Endpoint locally.

## v0.3 — CLI & Auto-Discovery
**Status: ⚪ not started**

Lowering the cost of adopting the spec for a business with an existing API.

- [ ] `npx create-agent-platform` scaffolding command
- [ ] OpenAPI → skills/tools auto-generation
- [ ] Automatic exposure over MCP
- [ ] Automatic exposure over A2A
- [ ] Spec-compliance validation command

**Exit criteria:** a business with an existing OpenAPI-documented REST API can get a passable Agent Endpoint without hand-writing skills.

## v0.4 — Simulation & Conformance
**Status: ⚪ not started**

Making sure deployments actually work the way they claim to, before and after changes.

- [ ] Agent Simulator: test a deployment from the perspective of different assistant personas
- [ ] Regression/conformance test suite, runnable in CI
- [ ] Analytics hooks: what agents are asking, where they drop off
- [ ] Capability Inspector: human-readable view of what a given endpoint exposes

**Exit criteria:** a deployment can be tested and regression-tested without a human manually poking it with a real assistant.

## v0.5 — Multi-Language SDKs
**Status: ⚪ not started**

- [ ] Go SDK
- [ ] Python SDK
- [ ] Rust SDK
- [ ] Parity test suite across SDKs, so a Skill defined in any language produces an identical Agent Endpoint response

**Exit criteria:** the spec is demonstrably language-agnostic, not just TypeScript-shaped.

## v1.0 — Stable Spec
**Status: ⚪ not started**

- [ ] Spec frozen, with a defined process for future breaking changes (versioned endpoints, deprecation windows)
- [ ] All v0.x open questions resolved or explicitly deferred
- [ ] Certification program defined: what "conforms to Agent Platform v1.0" actually means, and how it's checked
- [ ] At least a handful of independent, non-reference implementations exist

**Exit criteria:** a business can adopt the spec with confidence that `agent.company.com` won't need to be rebuilt for v1.1.

## Post-1.0 / Exploratory

Ideas that are plausible but out of scope until the core is stable:

- Hosted / managed Agent Platform offering
- A public directory of conforming Agent Endpoints
- Formal certification badges
- Protocol adapters beyond MCP/A2A/OpenAPI, as new agent protocols emerge

## Explicit Non-Goals

To keep scope honest:

- **Not a replacement for your backend** — Agent Platform is a front door, not a rewrite of business logic
- **Not tied to any single AI vendor or assistant** — see the [FAQ](README.md#faq)
- **Not a hosted product (yet)** — the spec and reference implementations come first; see [Business Model and Strategy](README.md#business-model-and-strategy)

## How This Roadmap Changes

This file moves when the underlying work moves, not on a schedule. If you're picking up a `[ ]` item, open an issue first (see [CONTRIBUTING.md](CONTRIBUTING.md)) so it can be marked in progress and two people don't build it twice.
