import { LangSwitcher } from "@/common/components/LangSwitcher";
import Text from "./Text";
import { TLink } from "@/common/components/TLink";

const SecondPage = () => {
  return (
    <main>
      <Text />

      <LangSwitcher />
      <TLink style={{ marginTop: "20px", display: "block" }} href="/">
        Go to home
      </TLink>
    </main>
  );
};

export default SecondPage;
