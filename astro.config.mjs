// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://premix-labs.github.io",
  integrations: [
    starlight({
      title: "PowerPack Rebar Book",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Thai",
          lang: "th",
        },
      },
      disable404Route: true,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
    }),
  ],
});
