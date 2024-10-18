<p align="center">
  <a href="https://github.com/evg4b/goreleaser-npm-publisher" title="goreleaser-npm-publisher">
    <img alt="goreleaser-npm-publisher logo" width="30%" src="https://raw.githubusercontent.com/evg4b/goreleaser-npm-publisher/main/.github/logo.svg">
  </a>
</p>

<div align="center">
  <h1>goreleaser-npm-publisher-action</h1>
</div>

<p align="center">
  <a href="https://github.com/super-linter/super-linter" title="NPM Version">
    <img alt="GitHub Super-Linter" src="https://img.shields.io/github/actions/workflow/status/evg4b/goreleaser-npm-publisher-action/linter.yml?logo=github&label=Lint%20Codebase"> 
  </a>
  <a href="https://github.com/evg4b/goreleaser-npm-publisher-action/actions/workflows/ci.yml" title="CI">
    <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/evg4b/goreleaser-npm-publisher-action/ci.yml?logo=github&label=Continuous%20Integration">
  </a>
  <a href="#" title="Coverage">
    <img alt="Coverage" src="./badges/coverage.svg">
  </a>
  <br>
  <a href="https://github.com/evg4b/goreleaser-npm-publisher-action/actions/workflows/codeql-analysis.yml" title="CodeQL">
    <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/evg4b/goreleaser-npm-publisher-action/codeql-analysis.yml?logo=github&label=CodeQL">
  </a>
  <a href="https://github.com/evg4b/goreleaser-npm-publisher-action/actions/workflows/check-dist.yml" title="Check dist">
    <img alt="CI" src="https://img.shields.io/github/actions/workflow/status/evg4b/goreleaser-npm-publisher-action/check-dist.yml?logo=github&label=Check%20Transpiled%20JavaScript">
  </a>
</p>

<p align="center">
  Publish Go binaries to npm registry, automated tool for build and publish Go binaries to npm registry.
</p>

## Usage

TBD.

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Test Local Action
    id: test-action
    uses: evg4b/goreleaser-npm-publisher-action@v1 # Commit with the `v1` tag
    with:
      milliseconds: 1000

  - name: Print Output
    id: output
    run: echo "${{ steps.test-action.outputs.time }}"
```
