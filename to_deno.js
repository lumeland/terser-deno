import { convert } from "https://deno.land/x/nodedeno@v0.2.10/mod.js";

// Convert the code
await convert({
  src: "terser",
  input: ["lib", "tools", "main.js"],
  output: "deno",
  transpile: false,
  modules: {
    "deps.js": "lib/deps.ts",
  },
  copy: {
    "deps.ts": "lib/deps.ts",
    "terser/README.md": "README.md",
    "terser/CHANGELOG.md": "CHANGELOG.md",
    "terser/LICENSE": "LICENSE",
  },
  beforeConvert(src, { rename }) {
    src.delete("lib/cli.js");
    rename(
      "main.js",
      "mod.js",
      (code) =>
        code.replace(
          'export { run_cli as _run_cli } from "./lib/cli.js";\n',
          "",
        ),
    );
  },
});
