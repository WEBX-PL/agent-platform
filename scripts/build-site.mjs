import { mkdir, readFile, writeFile, cp, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const siteDir = join(root, "site");
const outDir = join(root, "_site");

const pages = [
  {
    source: "README.md",
    outPath: "index.html",
    title: "The Open Standard for AI-Native Business Applications",
    nav: "spec",
    base: "./",
    rewriteLinks: true,
  },
  {
    source: "ROADMAP.md",
    outPath: "roadmap/index.html",
    title: "Roadmap",
    nav: "roadmap",
    base: "../",
  },
  {
    source: "CONTRIBUTING.md",
    outPath: "contributing/index.html",
    title: "Contributing",
    nav: "contributing",
    base: "../",
  },
];

marked.setOptions({
  gfm: true,
  breaks: false,
});

const renderer = new marked.Renderer();
const defaultCode = renderer.code.bind(renderer);

renderer.code = function code(token) {
  const lang = token.lang || "";
  if (lang === "mermaid") {
    return `<pre class="mermaid">${escapeHtml(token.text)}</pre>\n`;
  }
  return defaultCode(token);
};

marked.use({ renderer });

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function rewriteSpecLinks(markdown) {
  return markdown
    .replaceAll("](ROADMAP.md)", "](roadmap/)")
    .replaceAll("](CONTRIBUTING.md)", "](contributing/)")
    .replaceAll("](LICENSE)", "](https://github.com/WEBX-PL/agent-platform/blob/main/LICENSE)");
}

function rewriteSecondaryLinks(markdown) {
  return markdown
    .replaceAll("](README.md)", "](../)")
    .replaceAll("](ROADMAP.md)", "](../roadmap/)")
    .replaceAll("](CONTRIBUTING.md)", "](../contributing/)")
    .replaceAll(/\]\(README\.md(#[^)]+)\)/g, "](../$1)")
    .replaceAll("](LICENSE)", "](https://github.com/WEBX-PL/agent-platform/blob/main/LICENSE)");
}

async function buildPage(page, template) {
  let markdown = await readFile(join(root, page.source), "utf8");
  markdown = page.rewriteLinks
    ? rewriteSpecLinks(markdown)
    : rewriteSecondaryLinks(markdown);

  const content = marked.parse(markdown);
  const html = template
    .replaceAll("{{TITLE}}", page.title)
    .replaceAll("{{BASE}}", page.base)
    .replaceAll("{{CONTENT}}", content)
    .replaceAll(
      "{{NAV_SPEC}}",
      page.nav === "spec" ? ' aria-current="page"' : "",
    )
    .replaceAll(
      "{{NAV_ROADMAP}}",
      page.nav === "roadmap" ? ' aria-current="page"' : "",
    )
    .replaceAll(
      "{{NAV_CONTRIBUTING}}",
      page.nav === "contributing" ? ' aria-current="page"' : "",
    );

  const target = join(outDir, page.outPath);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}

async function main() {
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const template = await readFile(join(siteDir, "template.html"), "utf8");
  await cp(join(siteDir, "assets"), join(outDir, "assets"), {
    recursive: true,
  });

  for (const page of pages) {
    await buildPage(page, template);
  }

  // Optional custom domain: copy CNAME into the published site when present.
  try {
    const cname = await readFile(join(siteDir, "CNAME"), "utf8");
    await writeFile(join(outDir, "CNAME"), cname.trim() + "\n");
  } catch {
    // No custom domain configured yet.
  }

  console.log(`Built ${pages.length} pages into ${outDir}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
