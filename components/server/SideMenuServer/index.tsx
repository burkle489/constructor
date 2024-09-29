import SideMenu from "@/components/globals/SideMenu";
import { client } from "@/sanity/client";
import { defineQuery } from "next-sanity";

const CHEATSHEETS_QUERY = defineQuery(`*[_type == 'cheat-sheet'] `);
const options = { next: { revalidate: 60 } };
const SideMenuServer = async () => {
  const cheatSheets = await client.fetch(CHEATSHEETS_QUERY, {}, options);

  return <SideMenu cheatSheets={cheatSheets} />;
};

export default SideMenuServer;
