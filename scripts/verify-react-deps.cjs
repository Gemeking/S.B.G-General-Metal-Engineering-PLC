#!/usr/bin/env node
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const lock = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));

const expectedReact = '^18.3.1';
const expectedReactDom = '^18.3.1';

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

if (pkg.dependencies?.react !== expectedReact) {
  fail(`package.json dependencies.react must be ${expectedReact} (found ${pkg.dependencies?.react ?? 'missing'})`);
}
if (pkg.dependencies?.['react-dom'] !== expectedReactDom) {
  fail(`package.json dependencies.react-dom must be ${expectedReactDom} (found ${pkg.dependencies?.['react-dom'] ?? 'missing'})`);
}

const lockRootDeps = lock.packages?.['']?.dependencies ?? {};
if (lockRootDeps.react !== pkg.dependencies?.react) {
  fail(`package-lock.json root react (${lockRootDeps.react ?? 'missing'}) does not match package.json (${pkg.dependencies?.react ?? 'missing'})`);
}
if (lockRootDeps['react-dom'] !== pkg.dependencies?.['react-dom']) {
  fail(`package-lock.json root react-dom (${lockRootDeps['react-dom'] ?? 'missing'}) does not match package.json (${pkg.dependencies?.['react-dom'] ?? 'missing'})`);
}

const overrideReact = pkg.overrides?.react;
const overrideReactDom = pkg.overrides?.['react-dom'];
if (overrideReact || overrideReactDom) {
  fail(`Do not set package.json overrides for react/react-dom (found react=${overrideReact ?? 'none'}, react-dom=${overrideReactDom ?? 'none'})`);
}

const resolutionReact = pkg.resolutions?.react;
const resolutionReactDom = pkg.resolutions?.['react-dom'];
if (resolutionReact || resolutionReactDom) {
  fail(`Do not set package.json resolutions for react/react-dom (found react=${resolutionReact ?? 'none'}, react-dom=${resolutionReactDom ?? 'none'})`);
}

if (process.exitCode) process.exit(process.exitCode);
console.log('✅ React dependency configuration is consistent.');
