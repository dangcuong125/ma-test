import { Metadata } from "next";
import useTranslation from "next-translate/useTranslation";
import { LangSwitcher } from "@/components/LangSwitcher";
import { TLink } from "@/components/TLink";

const META_OBJECT = {
  title: {
    en: "Ecom Loyalty",
    vi: "Ecom Loyalty",
  },
  description: {
    en: "Ecom Loyalty",
    vi: "NEcom Loyalty",
  },
} as any;

export const generateMetadata = ({
  params: { lang },
}: {
  params: { lang: string };
}): Metadata => {
  return {
    title: META_OBJECT.title[lang],
    description: META_OBJECT.description[lang],
  };
};

export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <h2 style={{ textAlign: "center", padding: "20px 0px" }}>
        {t("common:hello")}
      </h2>
      <LangSwitcher />
      <TLink style={{ marginTop: "20px", display: "block" }} href="/second">
        Go to second page
      </TLink>
    </main>
  );
}
