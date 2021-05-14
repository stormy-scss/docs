/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Stormy',
  tagline: 'Mixin-based utility toolkit',
  url: 'https://stormy-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'stromy-scss', // Usually your GitHub org/user name.
  projectName: 'stormy', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Stormy',
      // logo: {
      //   alt: 'Stormy Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'get-started',
          position: 'left',
          label: 'Get started',
        },
        {to: "/", label: "Docs"},
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/stormy-scss/stormy',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get started',
              to: '/get-started',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/stormy-scss/stormy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mohammed Ali Agha.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/stormy-scss/docs/edit/main/website',
          routeBasePath: "/"
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/stormy-scss/docs/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
