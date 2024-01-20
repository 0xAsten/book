import { defineConfig } from "vocs";

export default defineConfig({
  iconUrl: "/dojo-mark-full-dark.svg",
  ogImageUrl:
    "https://vocs.dev/api/og?logo=%logo&title=%title&description=%description",
  topNav: [
    { text: "Blog", link: "https://www.dojoengine.org/en/articles" },
    { text: "Releases", link: "https://github.com/dojoengine/dojo/releases" },
    {
      text: "0.5.0",
      items: [
        {
          text: "Changelog",
          link: "https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md",
        },
        {
          text: "Contributing",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md",
        },
      ],
    },
  ],
  font: {
    google: "Poppins",
  },
  // theme: {

  //   accentColor: "#",
  // },
  theme: {
    accentColor: "#FF2F42",
    variables: {
      color: {
        background: {
          light: "white",
          dark: "black",
        },
      },
      content: {
        horizontalPadding: "40px",
        verticalPadding: "80px",
      },
    },
  },
  sidebar: [
    {
      text: "🏁 Theory",
      collapsed: true,
      items: [
        { text: "Foreword", link: "/getting-started" },
        { text: "What is Dojo?", link: "/theory/what-is-dojo" },
        { text: "AW Theory", link: "/theory/autonomous-worlds" },
        { text: "Cairo Ecosystem", link: "/theory/cairo" },
        { text: "FAQs", link: "/theory/faqs" },
      ],
    },
    {
      text: "🚀 Getting Started",
      collapsed: true,
      items: [
        { text: "Quick Start", link: "/getting-started/quick-start" },
        { text: "Manual Install", link: "/getting-started/from-source" },
        { text: "Development Setup", link: "/getting-started/setup" },
        { text: "Contributing", link: "/getting-started/contributing" },
      ],
    },
    {
      text: "🫂 Community",
      link: "/community/get-started",
    },
    {
      text: "🏛️ Architecture",
      collapsed: true,
      items: [
        { text: "Overview", link: "/cairo/overview" },
        { text: "World", link: "/cairo/world" },
        { text: "Systems", link: "/cairo/systems" },
        { text: "Models", link: "/cairo/models" },
        { text: "Commands", link: "/cairo/commands" },
        { text: "Config", link: "/cairo/config" },
        { text: "Events", link: "/cairo/events" },
        { text: "Authorization", link: "/cairo/authorization" },
        { text: "Metadata", link: "/cairo/metadata" },
        { text: "Enum", link: "/cairo/enum" },
        { text: "Migration", link: "/cairo/migration" },
        {
          text: "0.2.0 -> 0.3.0",
          link: "/cairo/migration/0.3.0",
        },
        { text: "ECS in 15 minutes", link: "/cairo/hello-dojo" },
        { text: "Entities", link: "/cairo/entities" },
        { text: "Testing", link: "/cairo/testing" },
      ],
    },
    {
      text: "🖥️ Client SDKs + Origami",
      collapsed: true,
      items: [
        { text: "Origami", link: "/cairo/origami" },
        {
          text: "SDKs",
          link: "/client/overview",
          items: [
            { text: "dojo.js", link: "/client/sdk/dojojs" },
            { text: "unity", link: "/client/sdk/unity" },
            { text: "c", link: "/client/sdk/c" },
          ],
        },
      ],
    },
    {
      text: "⛓️ Toolchain",
      collapsed: true,
      items: [
        { text: "Dojoup", link: "/toolchain/dojoup" },
        {
          text: "Sozo",
          link: "/toolchain/sozo/overview",
          items: [
            { text: "Reference", link: "/toolchain/sozo/reference" },
            { text: "profile", link: "/toolchain/sozo/common-options/profile" },
            { text: "offline", link: "/toolchain/sozo/common-options/offline" },
            { text: "init", link: "/toolchain/sozo/project-commands/init" },
            { text: "build", link: "/toolchain/sozo/project-commands/build" },
            { text: "test", link: "/toolchain/sozo/project-commands/test" },
            {
              text: "migrate",
              link: "/toolchain/sozo/project-commands/migrate",
            },
            { text: "execute", link: "/toolchain/sozo/world-commands/execute" },
            {
              text: "register",
              link: "/toolchain/sozo/world-commands/register",
            },
            { text: "system", link: "/toolchain/sozo/world-commands/system" },
            { text: "model", link: "/toolchain/sozo/world-commands/model" },
            { text: "events", link: "/toolchain/sozo/world-commands/events" },
            { text: "auth", link: "/toolchain/sozo/world-commands/auth" },
          ],
        },
        {
          text: "Katana",
          link: "/toolchain/katana/overview",
          items: [{ text: "Reference", link: "/toolchain/katana/reference" }],
        },
        {
          text: "Torii",
          link: "/toolchain/torii/overview",
          items: [
            { text: "Reference", link: "/toolchain/torii/reference" },
            { text: "Graphql", link: "/toolchain/torii/graphql" },
            { text: "gRPC", link: "/toolchain/torii/grpc" },
          ],
        },
        {
          text: "Slot",
          link: "/toolchain/slot/overview",
          items: [
            { text: "Reference", link: "/toolchain/slot/reference" },
            {
              text: "Deployments",
              link: "/toolchain/slot/deployments-commands/deployments",
            },
          ],
        },
      ],
    },
    {
      text: "🌌 Deploying",
      collapsed: true,
      items: [
        { text: "Locally", link: "/deployment/locally" },
        { text: "Remote", link: "/deployment/remote" },
      ],
    },
    {
      text: "🙌 Tutorial",
      collapsed: true,
      items: [
        {
          text: "Onchain Chess",
          link: "/tutorial/onchain-chess/README",
          items: [
            { text: "0. Setup", link: "/tutorial/onchain-chess/0-setup" },
            { text: "1. Initiate", link: "/tutorial/onchain-chess/1-action" },
            { text: "2. Move", link: "/tutorial/onchain-chess/2-move" },
            { text: "3. Test Chess", link: "/tutorial/onchain-chess/3-test" },
          ],
        },
        {
          text: "Deploy using Slot",
          link: "/tutorial/deploy-using-slot/main",
        },
      ],
    },
    {
      text: "Contributors",
      link: "/misc/contributors",
    },
  ],
  title: "Dojo Book",
});
