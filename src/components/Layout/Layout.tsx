import { PropsWithChildren } from "react";
import { Navbar } from "./navbar/Navbar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main style={{ height: "500px", width: "300px" }}>{children}</main>
    </>
  );
};
