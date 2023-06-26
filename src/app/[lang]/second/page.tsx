import { LangSwitcher } from "@/components/LangSwitcher";
import { TLink } from "@/components/TLink";

const SecondPage = () => {
  return (
    <main>
      {/* <Text /> */}

      <LangSwitcher />
      <TLink style={{ marginTop: "20px", display: "block" }} href="/">
        Go to home
      </TLink>
    </main>
  );
};

export default SecondPage;
