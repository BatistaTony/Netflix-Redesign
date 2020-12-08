import Head from "next/head";
import Navbar from "../navbar";
import { ChildrenSpace, LayoutMainContainer } from "./style";

type TLayout = {
  title?: string;
  children: any;
};

const Layout = ({ title = "Netflix Redesign", children }: TLayout) => {
  return (
    <LayoutMainContainer>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <ChildrenSpace>{children}</ChildrenSpace>
    </LayoutMainContainer>
  );
};

export default Layout;
