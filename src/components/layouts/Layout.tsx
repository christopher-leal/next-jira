import { Box } from "@mui/material";
import { Navbar, Sidebar } from "../ui";
import Head from "next/head";
import { FC } from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}
export const Layout: FC<Props> = ({ title = "Next Jira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
