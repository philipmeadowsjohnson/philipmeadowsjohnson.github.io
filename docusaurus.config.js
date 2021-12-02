const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PhilipMeadowsJohnson',
  tagline: 'Personal Site',
  url: 'https://philipmeadowsjohnson.github.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  deploymentBranch: 'main',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'philipmeadowsjohnson', // Usually your GitHub org/user name.
  projectName: 'philipmeadowsjohnson.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
    navbar: { title: 'PhilipMeadowsJohnson', logo: { alt: 'InternAloha', src: 'img/internaloha-logo.png', },
      items: [
        { to: 'docs/overview/motivation', activeBasePath: 'docs', label: 'Documentation', position: 'right', },
        { href: 'https://github.com/internaloha/scrapers/projects/1', label: 'Project Board', position: 'right', },
        { href: 'https://github.com/internaloha', label: 'GitHub', position: 'right', },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `InternAloha is sponsored by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a><br/>
                  with funding from the National Science Foundation (Awards 1829542, 2025112)`,
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
