const path = require('path');
const { spawnSync } = require('child_process');

// Next 12's WASM image decoder predates global fetch. Scope compatibility
// options to Next so Corepack, Yarn, and Netlify can still use fetch normally.
const env = {
  ...process.env,
  NODE_OPTIONS: [
    process.env.NODE_OPTIONS,
    '--no-experimental-fetch --openssl-legacy-provider',
  ]
    .filter(Boolean)
    .join(' '),
};
const next = require.resolve('next/dist/bin/next');
for (const args of [['build'], ['export', '-o', 'build']]) {
  const result = spawnSync(process.execPath, [next, ...args], {
    cwd: path.resolve(__dirname, '..'),
    env,
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status || 1);
}
