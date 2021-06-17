# Clean old files
rm -rf deno
rm -rf terser

# Clone the repo
git clone --depth 1 --branch main https://github.com/terser/terser.git

# Run the script
deno run --unstable --allow-read=. --allow-write=. to_deno.js

# Autoformat the code
deno fmt deno

# Run the tests
# deno test --unstable --allow-read=. --allow-env=DENO_ENV deno/test