/* eslint-disable no-console */
const branch = require('child_process').execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

const prereleaseBranches = ['next', 'alpha', 'beta'];

/**
 * @type {import('@monodeploy/types').MonodeployConfiguration}
 */
const config = {
  autoCommitMessage: 'chore: release [skip ci]',
  changelogFilename: '<packageDir>/CHANGELOG.md',
  conventionalChangelogConfig: 'conventional-changelog-conventionalcommits',
  git: {
    baseBranch: '3580814308a03b2efb7b94f9fdd628109e4a1a24',
  },
  persistVersions: true,
  plugins: [
    '@monodeploy/plugin-github',
  ],
  prerelease: prereleaseBranches.includes(branch),
  prereleaseId: branch === 'next' ? 'rc' : branch,
  prereleaseNPMTag: branch,
  preset: 'monodeploy/preset-recommended',
  registryUrl: 'https://registry.npmjs.org',
};

console.log('ℹ️ Detected branch:', branch);
console.log('ℹ️ Config:', JSON.stringify(config, null, 2));

module.exports = config;
