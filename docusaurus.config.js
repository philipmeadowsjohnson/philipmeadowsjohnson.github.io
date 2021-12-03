const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Straight To The Pool Room',
  tagline: '',
  url: 'https://straighttothepoolroom.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  deploymentBranch: 'main',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'straighttothepoolroom', // Usually your GitHub org/user name.
  projectName: 'straighttothepoolroom.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
    navbar: { title: 'Straight To The Pool Room', logo: { alt: 'StraightToThePoolRoom', src: 'img/straighttothepoolroom-logo.png', },
      items: [
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `No rights reserved`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
