import { ReactChild } from "react";

interface Props {
  children: ReactChild;
}

const Layout = (props: Props) => {
  return <div className="l-layout-container">{props.children}</div>;
};

export default Layout;
