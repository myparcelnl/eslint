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
  packageGroupManifestField: 'publishConfig.access',
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
