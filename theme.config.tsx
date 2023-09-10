/* eslint sort-keys: error */
import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";
import type { ComponentProps, ReactElement } from "react";

const SWRLogo = (props: ComponentProps<"svg">): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    height="20"
    enableBackground="new 0 0 712.3 138.1"
    version="1.1"
    viewBox="0 0 712.3 138.1"
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="linear-gradient"
      gradientUnits="userSpaceOnUse"
      x1="600"
      y1="180"
      x2="1200"
      y2="180"
      gradientTransform="matrix(1 0 0 -1 -761.14 398.97)"
    >
      <stop offset="12%" stopColor="#FF7700" stopOpacity="100%" />
      <stop offset="100%" stopColor="#FFC400" stopOpacity="100%" />
    </linearGradient>
    <path
      d="M6.9 137.9l33.4-10.5c.8-.2 1.5-.7 2-1.2L160.8 8.5c3.2-3.1.9-8.5-3.5-8.5h-46.8c-1.3 0-2.6.5-3.5 1.5L11.3 97.1c-.6.6-1 1.3-1.3 2.1L.4 131.5c-1 3.9 2.6 7.5 6.5 6.4zM.4 5v72.1c0 4.5 5.4 6.7 8.5 3.5l51.2-51.2c1-1 1.5-2.2 1.5-3.6l-.1-21c0-2.7-2.3-4.9-5-4.9H5.4C2.7 0 .4 2.2.4 5zM109 85.5l43.9 43.9c3.1 3.1.9 8.5-3.5 8.5L77 138c-1.3 0-2.6-.5-3.6-1.5l-7.7-7.8c-1.9-2-1.9-5.1 0-7l36.1-36.1c2.1-2 5.2-2 7.2-.1z"
      fill="url(#linear-gradient)"
      className="st0"
    ></path>
    <path
      d="M209 108.2h-15.1V29.9H209v37.6L228.8 48h21.3l-24.9 24.3 26.9 35.8h-18.9l-18.7-25.3-5.6 5.3.1 20.1zM294.2 65c-2.4-2-5-3-7.8-3-4.1 0-7.6 1.5-10.3 4.6-2.8 3-4.2 6.9-4.2 11.6v30h-15.2V48h15.2v8.7c1.7-2.9 4.1-5.3 7.2-7.1 3-1.8 6.4-2.7 10-2.7 3.8 0 7.4.8 10.7 2.4L294.2 65zM314.7 105.3c-4.6-2.7-8.2-6.4-10.8-11.1-2.6-4.7-3.9-10.1-3.9-16 0-5.8 1.3-11 4-15.8 2.6-4.8 6.3-8.6 10.9-11.3 4.6-2.8 9.7-4.2 15.4-4.2 4.8 0 9.5 1.1 13.9 3.4 4.5 2.3 8.2 5.3 11.2 9 3 3.8 4.8 7.8 5.3 12.3.3 1.6.5 3.4.5 5.3 0 2-.2 3.8-.5 5.3h-44.6c.6 3.8 2.1 6.7 4.7 8.8 2.6 2.1 5.8 3.2 9.5 3.3 3.3 0 6.4-.8 9.2-2.4 2.8-1.6 4.7-3.7 5.6-6.4h15.5c-2 7.9-5.8 13.9-11.4 17.8-5.7 4-12 6-19 6-5.8.1-10.9-1.3-15.5-4zm29.2-34.8c-.7-2.5-2.3-4.6-4.9-6.2-2.5-1.6-5.4-2.4-8.7-2.4-3.4 0-6.3.8-8.6 2.4-2.3 1.6-3.8 3.7-4.4 6.3h26.6v-.1zM378.7 105c-4.1-2.9-7.3-6.7-9.5-11.5-2.3-4.8-3.4-9.9-3.4-15.5 0-5.7 1.1-10.9 3.4-15.7 2.3-4.7 5.4-8.5 9.5-11.3s8.7-4.2 13.9-4.2c4 0 7.6.9 10.7 2.6 3.1 1.7 5.5 4.1 7.4 7.2V48h15.2v60.1h-15.4v-8.7c-1.6 2.9-3.9 5.3-7.1 7.1-3.1 1.8-6.8 2.7-11 2.7-5.1.2-9.7-1.3-13.7-4.2zm24.9-13.1c2.4-1.5 4.2-3.5 5.6-6s2.1-5.1 2.1-7.9c0-2.9-.7-5.6-2-8.1-1.3-2.4-3.2-4.4-5.6-5.9s-4.9-2.2-7.7-2.2c-2.7 0-5.2.7-7.5 2.1s-4.2 3.3-5.6 5.8-2.1 5.2-2.1 8.2c0 2.8.7 5.5 2.1 8s3.3 4.5 5.6 5.9c2.4 1.5 4.9 2.2 7.5 2.2 2.7.2 5.3-.6 7.6-2.1zM443.4 102.8c-4.2-4.4-6.3-10.6-6.3-18.6V63.9h-6.9V48h6.9V29.9h15.8L453 48h12.2v15.9H453v20.3c0 3.4.7 6 2.1 7.8s3.3 2.7 5.8 2.7c2.8 0 4.9-1.1 6.1-3.2s1.8-5.1 1.8-9h15.3c0 9.1-2.1 15.9-6.2 20.3s-9.8 6.6-17.2 6.6c-7.3 0-13-2.2-17.3-6.6zM509.4 40.1h-24.8V29.9h24.8v10.2zm-5 68.1h-14.9V48h14.9v60.2zM519.7 108.2V72.9h-7.1V60.6h7.1v-9.3c0-15.1 7.8-22.7 23.4-22.7 7.4 0 13.2 2.2 17.3 6.5s6.1 9.9 6.1 16.7h-16.2c0-2.7-.6-5-1.8-6.8-1.2-1.9-3-2.8-5.5-2.8s-4.4.8-5.6 2.3c-1.2 1.5-1.8 3.9-1.8 7.1v9h12.1v12.3h-12l-.1 35.2-15.9.1zM595.9 40.1h-24.8V29.9h24.8v10.2zm-5 68.1H576V48h14.9v60.2zM615.5 108.2h-15.1V29.9h15.1v37.6L635.3 48h21.3l-24.9 24.3 26.9 35.8h-18.9L621 82.8l-5.6 5.3v20.1h.1z"
      className="st1"
      fill="currentColor"
    ></path>
    <path
      d="M665.1 105c-4.1-2.9-7.3-6.7-9.5-11.5-2.3-4.8-3.4-9.9-3.4-15.5 0-5.7 1.1-10.9 3.4-15.7 2.3-4.7 5.4-8.5 9.5-11.3s8.7-4.2 13.9-4.2c4 0 7.6.9 10.7 2.6 3.1 1.7 5.5 4.1 7.4 7.2V48h15.2v60.1h-15.2v-8.7c-1.6 2.9-3.9 5.3-7.1 7.1-3.1 1.8-6.8 2.7-11 2.7-5.2.2-9.8-1.3-13.9-4.2zm25-13.1c2.4-1.5 4.2-3.5 5.6-6 1.4-2.5 2.1-5.1 2.1-7.9 0-2.9-.7-5.6-2-8.1-1.3-2.4-3.2-4.4-5.6-5.9-2.4-1.5-4.9-2.2-7.7-2.2-2.7 0-5.2.7-7.5 2.1s-4.2 3.3-5.6 5.8c-1.4 2.5-2.1 5.2-2.1 8.2 0 2.8.7 5.5 2.1 8 1.4 2.5 3.3 4.5 5.6 5.9 2.4 1.5 4.9 2.2 7.5 2.2 2.7.2 5.2-.6 7.6-2.1z"
      className="st1"
      fill="currentColor"
    ></path>
  </svg>
);

const Vercel = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    height="40"
    enableBackground="new 0 0 712.3 138.1"
    version="1.1"
    viewBox="0 0 712.3 138.1"
    xmlSpace="preserve"
  >
    <linearGradient
      id="linear-gradient"
      gradientUnits="userSpaceOnUse"
      x1="600"
      y1="180"
      x2="1200"
      y2="180"
      gradientTransform="matrix(1 0 0 -1 -761.14 398.97)"
    >
      <stop offset="12%" stopColor="#FF7700" stopOpacity="100%" />
      <stop offset="100%" stopColor="#FFC400" stopOpacity="100%" />
    </linearGradient>
    <path
      d="M6.9 137.9l33.4-10.5c.8-.2 1.5-.7 2-1.2L160.8 8.5c3.2-3.1.9-8.5-3.5-8.5h-46.8c-1.3 0-2.6.5-3.5 1.5L11.3 97.1c-.6.6-1 1.3-1.3 2.1L.4 131.5c-1 3.9 2.6 7.5 6.5 6.4zM.4 5v72.1c0 4.5 5.4 6.7 8.5 3.5l51.2-51.2c1-1 1.5-2.2 1.5-3.6l-.1-21c0-2.7-2.3-4.9-5-4.9H5.4C2.7 0 .4 2.2.4 5zM109 85.5l43.9 43.9c3.1 3.1.9 8.5-3.5 8.5L77 138c-1.3 0-2.6-.5-3.6-1.5l-7.7-7.8c-1.9-2-1.9-5.1 0-7l36.1-36.1c2.1-2 5.2-2 7.2-.1z"
      fill="url(#linear-gradient)"
      className="st0"
    ></path>
    <path
      d="M209 108.2h-15.1V29.9H209v37.6L228.8 48h21.3l-24.9 24.3 26.9 35.8h-18.9l-18.7-25.3-5.6 5.3.1 20.1zM294.2 65c-2.4-2-5-3-7.8-3-4.1 0-7.6 1.5-10.3 4.6-2.8 3-4.2 6.9-4.2 11.6v30h-15.2V48h15.2v8.7c1.7-2.9 4.1-5.3 7.2-7.1 3-1.8 6.4-2.7 10-2.7 3.8 0 7.4.8 10.7 2.4L294.2 65zM314.7 105.3c-4.6-2.7-8.2-6.4-10.8-11.1-2.6-4.7-3.9-10.1-3.9-16 0-5.8 1.3-11 4-15.8 2.6-4.8 6.3-8.6 10.9-11.3 4.6-2.8 9.7-4.2 15.4-4.2 4.8 0 9.5 1.1 13.9 3.4 4.5 2.3 8.2 5.3 11.2 9 3 3.8 4.8 7.8 5.3 12.3.3 1.6.5 3.4.5 5.3 0 2-.2 3.8-.5 5.3h-44.6c.6 3.8 2.1 6.7 4.7 8.8 2.6 2.1 5.8 3.2 9.5 3.3 3.3 0 6.4-.8 9.2-2.4 2.8-1.6 4.7-3.7 5.6-6.4h15.5c-2 7.9-5.8 13.9-11.4 17.8-5.7 4-12 6-19 6-5.8.1-10.9-1.3-15.5-4zm29.2-34.8c-.7-2.5-2.3-4.6-4.9-6.2-2.5-1.6-5.4-2.4-8.7-2.4-3.4 0-6.3.8-8.6 2.4-2.3 1.6-3.8 3.7-4.4 6.3h26.6v-.1zM378.7 105c-4.1-2.9-7.3-6.7-9.5-11.5-2.3-4.8-3.4-9.9-3.4-15.5 0-5.7 1.1-10.9 3.4-15.7 2.3-4.7 5.4-8.5 9.5-11.3s8.7-4.2 13.9-4.2c4 0 7.6.9 10.7 2.6 3.1 1.7 5.5 4.1 7.4 7.2V48h15.2v60.1h-15.4v-8.7c-1.6 2.9-3.9 5.3-7.1 7.1-3.1 1.8-6.8 2.7-11 2.7-5.1.2-9.7-1.3-13.7-4.2zm24.9-13.1c2.4-1.5 4.2-3.5 5.6-6s2.1-5.1 2.1-7.9c0-2.9-.7-5.6-2-8.1-1.3-2.4-3.2-4.4-5.6-5.9s-4.9-2.2-7.7-2.2c-2.7 0-5.2.7-7.5 2.1s-4.2 3.3-5.6 5.8-2.1 5.2-2.1 8.2c0 2.8.7 5.5 2.1 8s3.3 4.5 5.6 5.9c2.4 1.5 4.9 2.2 7.5 2.2 2.7.2 5.3-.6 7.6-2.1zM443.4 102.8c-4.2-4.4-6.3-10.6-6.3-18.6V63.9h-6.9V48h6.9V29.9h15.8L453 48h12.2v15.9H453v20.3c0 3.4.7 6 2.1 7.8s3.3 2.7 5.8 2.7c2.8 0 4.9-1.1 6.1-3.2s1.8-5.1 1.8-9h15.3c0 9.1-2.1 15.9-6.2 20.3s-9.8 6.6-17.2 6.6c-7.3 0-13-2.2-17.3-6.6zM509.4 40.1h-24.8V29.9h24.8v10.2zm-5 68.1h-14.9V48h14.9v60.2zM519.7 108.2V72.9h-7.1V60.6h7.1v-9.3c0-15.1 7.8-22.7 23.4-22.7 7.4 0 13.2 2.2 17.3 6.5s6.1 9.9 6.1 16.7h-16.2c0-2.7-.6-5-1.8-6.8-1.2-1.9-3-2.8-5.5-2.8s-4.4.8-5.6 2.3c-1.2 1.5-1.8 3.9-1.8 7.1v9h12.1v12.3h-12l-.1 35.2-15.9.1zM595.9 40.1h-24.8V29.9h24.8v10.2zm-5 68.1H576V48h14.9v60.2zM615.5 108.2h-15.1V29.9h15.1v37.6L635.3 48h21.3l-24.9 24.3 26.9 35.8h-18.9L621 82.8l-5.6 5.3v20.1h.1z"
      className="st1"
      fill="currentColor"
    ></path>
    <path
      d="M665.1 105c-4.1-2.9-7.3-6.7-9.5-11.5-2.3-4.8-3.4-9.9-3.4-15.5 0-5.7 1.1-10.9 3.4-15.7 2.3-4.7 5.4-8.5 9.5-11.3s8.7-4.2 13.9-4.2c4 0 7.6.9 10.7 2.6 3.1 1.7 5.5 4.1 7.4 7.2V48h15.2v60.1h-15.2v-8.7c-1.6 2.9-3.9 5.3-7.1 7.1-3.1 1.8-6.8 2.7-11 2.7-5.2.2-9.8-1.3-13.9-4.2zm25-13.1c2.4-1.5 4.2-3.5 5.6-6 1.4-2.5 2.1-5.1 2.1-7.9 0-2.9-.7-5.6-2-8.1-1.3-2.4-3.2-4.4-5.6-5.9-2.4-1.5-4.9-2.2-7.7-2.2-2.7 0-5.2.7-7.5 2.1s-4.2 3.3-5.6 5.8c-1.4 2.5-2.1 5.2-2.1 8.2 0 2.8.7 5.5 2.1 8 1.4 2.5 3.3 4.5 5.6 5.9 2.4 1.5 4.9 2.2 7.5 2.2 2.7.2 5.2-.6 7.6-2.1z"
      className="st1"
      fill="currentColor"
    ></path>
  </svg>
);

const TITLE = {
  "en-US": "React Hooks for Data Fetching",
  "es-ES": "Biblioteca React Hooks para la obtención de datos",
  ru: "React хуки для выборки данных",
};

const EDIT_TEXT = {
  "en-US": "Edit this page on GitHub →",
  "es-ES": "Edite esta página en GitHub",
  ru: "Редактировать на GitHub",
};

const FOOTER_LINK = {
  "en-US": "https://vercel.com/?utm_source=swr",
  "es-ES": "https://vercel.com/?utm_source=swr_es-es",
  ru: "https://vercel.com/?utm_source=swr_ru",
};

const FOOTER_LINK_TEXT = {
  "en-US": (
    <>
      Powered by
      <Vercel />
    </>
  ),
  "es-ES": (
    <>
      Desarrollado por
      <Vercel />
    </>
  ),
  ru: (
    <>
      Работает на
      <Vercel />
    </>
  ),
};

const config: DocsThemeConfig = {
  // banner: {
  //   key: "swr-2",
  //   text: "SWR 2.0 is out! Read more →",
  // },
  darkMode: true,
  docsRepositoryBase:
    "https://github.com/shuding/nextra/blob/core/examples/swr-site",
  editLink: {
    text: function useText() {
      const { locale } = useRouter();
      return EDIT_TEXT[locale];
    },
  },
  feedback: {
    content: "Ada Pertanyaan? E-mail kami →",
    labels: "feedback",
    useLink() {
      const config = useConfig();
      return `mailto:test@example.com?subject=${encodeURIComponent(
        `Saya memiliki pertanyaan pada ${config.title}`
      )}`;
    },
  },
  footer: {
    text: function useText() {
      const { locale } = useRouter();
      return (
        <a
          rel="noreferrer"
          target="_blank"
          className="flex items-center gap-2 font-semibold"
          href={"https://kreatifika.com/"}
        >
          Build with love by <Vercel />
        </a>
      );
    },
  },
  head: function useHead() {
    const config = useConfig<{ description?: string; image?: string }>();
    const description =
      config.frontMatter.description ||
      "Kreatifika Prompt Library adalah sekumpulan Prompt ChatGPT untuk menggunakan chatGPT secara optimal!";
    const image =
      config.frontMatter.image || "https://i.ibb.co/pKxmNnh/Frame-1-1.png";
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@halokreatifika" />
        <meta name="twitter:image" content={image} />
        <meta name="og:title" content={`${config.title} – Kreatifika`} />
        <meta name="og:image" content={image} />
        <meta name="apple-mobile-web-app-title" content="Kreatifika" />
      </>
    );
  },
  // i18n: [
  //   { locale: "en-US", text: "English" },
  //   { direction: "rtl", locale: "es-ES", text: "Español RTL" },
  //   { locale: "ru", text: "Русский" },
  // ],
  logo: function Logo() {
    const { locale } = useRouter();
    return (
      <>
        <SWRLogo className="h-3" />
        {/* <span className="hidden select-none font-extrabold ltr:ml-2 rtl:mr-2 md:inline">
          Kreatifika Prompt library
        </span> */}
      </>
    );
  },
  // navbar: {
  //   extraContent: LocaleSwitch,
  // },
  nextThemes: {
    defaultTheme: "dark",
  },
  // project: {
  //   link: "https://github.com/vercel/swr",
  // },
  sidebar: {
    // autoCollapse: true,
    defaultMenuCollapseLevel: 1,
    titleComponent: ({ title, type }) =>
      type === "separator" ? (
        <div className="flex items-center gap-2">
          <SWRLogo className="h-1.5 shrink-0" />
          {title}
        </div>
      ) : (
        <>{title}</>
      ),
    toggleButton: true,
  },
  toc: {
    backToTop: true,
    extraContent: (
      // eslint-disable-next-line @next/next/no-img-element -- ignore since url is external and dynamic
      <div>
        <img alt="placeholder cat" src="https://placekitten.com/g/300/200" />
        Your emotional Support
      </div>
    ),
    float: true,
    headingComponent: function Heading({ id, children }) {
      return (
        <>
          {children}
          {id === "installation" && " 💿"}
        </>
      );
    },
  },
  useNextSeoProps() {
    const { locale } = useRouter();
    return {
      titleTemplate: `%s | Kreatifika`,
    };
  },
};

export default config;
