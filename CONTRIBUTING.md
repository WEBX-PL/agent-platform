# Contributing to Agent Platform

Thanks for looking at this. The project is a v0.1 draft specification — early enough that a well-argued issue can still change the shape of the standard. This document explains how to contribute usefully at this stage.

## Table of Contents

- [Where the Project Stands](#where-the-project-stands)
- [Ways to Contribute](#ways-to-contribute)
- [Proposing a Spec Change](#proposing-a-spec-change)
- [Contributing Code](#contributing-code)
- [Style Guide](#style-guide)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)
- [Communication](#communication)
- [Code of Conduct](#code-of-conduct)

## Where the Project Stands

Per the [roadmap](README.md#roadmap), the specification itself is still open for comment — nothing below `v1.0` is stable. That means:

- Breaking changes to the spec are still possible, and are fine as long as they're discussed first
- There is no reference implementation to be backward-compatible with yet
- The most valuable contributions right now are usually **arguments and edge cases**, not code

If you're not sure whether something is "ready" to build against, assume not, and open a discussion first.

## Ways to Contribute

Roughly in order of what's most useful today:

1. **Stress-test the spec** — try to design an Agent Endpoint for a real business (yours, or a hypothetical one) using the current draft, and report where it breaks down
2. **Argue with a design decision** — Skills vs. Tools, the endpoint list, the auth model, anything — with a concrete scenario, not just a preference
3. **Write reference examples** — a filled-out `agent.company.com` manifest for a sample business (retail, SaaS, booking, etc.)
4. **Build a piece of the reference implementation** — Core Server, an SDK, the CLI, the Agent Simulator (see [Reference Implementation](README.md#reference-implementation))
5. **Improve the docs** — the README, this file, or inline spec comments

## Proposing a Spec Change

Spec changes go through discussion before code, not after:

1. **Open an issue** describing the problem, not just the proposed fix. What breaks today, for what kind of business, in what scenario?
2. **Propose a change**, ideally with a before/after example of what an `agent.company.com` response looks like under the current spec vs. your proposal
3. **Wait for discussion** before implementing — this avoids two people independently building incompatible solutions to the same problem
4. Once there's rough consensus, the spec section gets updated in a PR that links back to the issue

Small clarifications (typos, ambiguous wording, missing examples) can skip straight to a PR.

## Contributing Code

Since there's no reference implementation yet, "contributing code" mostly means **starting** a piece of one. Before you do:

- Check open issues and discussions for the same component, so two people don't build the same SDK in parallel
- Open an issue stating what you're building and your intended approach
- Prefer small, working slices (e.g. "OpenAPI → skills discovery for the CLI") over one large PR implementing an entire component

## Style Guide

- **Markdown**: one sentence per line is not required, but keep paragraphs short and use tables over prose where a table is clearer
- **Code**: match the idioms of whatever language you're writing in (idiomatic Go, idiomatic TypeScript, etc.) rather than forcing one house style across languages
- **Spec language**: use "MUST", "SHOULD", and "MAY" deliberately (as in RFC 2119) when defining requirements, so conformance is unambiguous
- **Examples**: every new capability in the spec should ship with at least one worked example, the way the coffee shop example illustrates a skill call in the README

## Commit Messages

Keep the first line short and in the imperative mood:

```
Add skills/tools distinction to endpoint spec
Fix ambiguous auth example in README
```

Put the "why," not just the "what," in the body if the change isn't self-explanatory.

## Pull Request Process

1. Fork the repo and branch from `main`
2. Keep the PR scoped to one change — spec edits and implementation code should generally be separate PRs
3. Link the issue or discussion the PR resolves
4. If the PR changes the spec, update any examples or diagrams elsewhere in the repo that would now be inconsistent
5. A maintainer will review; for spec changes specifically, expect discussion before merge rather than a quick approval

## Reporting Issues

A good issue includes:

- What you were trying to build or express
- What part of the spec didn't cover it, or covered it ambiguously
- A concrete example, if you have one

"This feels off" is a fine way to start a discussion, but a maintainer will likely ask for a scenario before it turns into a spec change.

## Communication

For now, everything routes through this repository:

- **Issues** — bugs, spec gaps, concrete proposals
- **Discussions** — open-ended questions, "should we support X," early-stage ideas

If a chat/community channel gets stood up, it'll be linked from the main [README](README.md).

## Code of Conduct

Be direct about the work, kind to the person. Disagree with proposals, not with people. Assume good faith from other contributors, and extend the same to maintainers when a PR doesn't get merged right away — spec-first projects move slower than product code by design.
