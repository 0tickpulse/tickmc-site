// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const math = require("remark-math");
const katex = require("rehype-katex");

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "TickMC",
    tagline: "Custom Minecraft Server - tick-mc.net",
    favicon: "img/favicon.ico",

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],

    // Set the production url of your site here
    url: "https://www.tick-mc.net",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "0tickpulse", // Usually your GitHub org/user name.
    projectName: "tickmc-site", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    stylesheets: [
        {
            href: "/katex/katex.min.css",
            type: "text/css",
        },
    ],

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                    ignorePatterns: ["/tags/**"],
                    filename: "sitemap.xml",
                },
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/0tickpulse/tickmc-site/tree/main/",
                    remarkPlugins: [math],
                    rehypePlugins: [katex],
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: "https://github.com/0tickpulse/tickmc-site/tree/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            algolia: {
                // The application ID provided by Algolia
                appId: "PLQSPW5N4T",

                // Public API key: it is safe to commit it
                apiKey: "947bc8a7413f9adc13b76f95b2a90300",

                indexName: "tick-mc",

                // Optional: see doc section below
                contextualSearch: true,

                // Optional: Algolia search parameters
                searchParameters: {},

                // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
                replaceSearchResultPathname: {
                    from: "localhost:3000",
                    to: "tick-mc.net/docs"
                },

                // Optional: path for search page that enabled by default (`false` to disable it)
                searchPagePath: "search",

                //... other Algolia params
            },
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "TickMC",
                logo: {
                    alt: "Site Logo",
                    src: "img/logo.png",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "docsSidebar",
                        position: "left",
                        label: "Docs",
                    },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/0tickpulse/tickmc-site",
                        className: "header-github-link",
                        position: "right",
                    },
                    {
                        href: "https://discord.gg/B8fjuqrptZ",
                        className: "header-discord-link",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Docs",
                                to: "/docs/intro",
                            },
                        ],
                    },
                    {
                        title: "Community",
                        items: [
                            {
                                label: "Discord",
                                href: "https://discord.gg/B8fjuqrptZ",
                            },
                        ],
                    },
                    {
                        title: "More",
                        items: [
                            {
                                label: "Blog",
                                to: "/blog",
                            },
                            {
                                label: "GitHub",
                                href: "https://github.com/0tickpulse/tickmc-site",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} TickMC. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
