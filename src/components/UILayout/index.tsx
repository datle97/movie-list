import { Layout } from "antd";
import UIFooter from "../UIFooter";
import UIHeader from "../UIHeader";
import { LayoutBackground, LayoutContent } from "./styles";

const UILayout = (props: { children: React.ReactNode }) => {
  return (
    <Layout>
      <UIHeader />
      <LayoutContent>
        <LayoutBackground>{props.children}</LayoutBackground>
      </LayoutContent>
      <UIFooter />
    </Layout>
  );
};

export default UILayout;
