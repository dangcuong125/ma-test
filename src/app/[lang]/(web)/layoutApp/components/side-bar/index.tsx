import { Stack } from "@mui/material";
import React from "react";
import { SIDE_BAR_ITEM } from "./constants";
import SideBarItem from "./components/SideBarItem";
import { usePathname } from "next/navigation";
import useTranslation from "next-translate/useTranslation";
import Breadcrumbs from "@/common/components/Breadcrumbs";
import SideBarHeader from "./components/SideBarHeader";

const SideBarUser = () => {
  const currentPath = usePathname();
  const { t } = useTranslation("common");

  const indexCurrentPage = SIDE_BAR_ITEM.findIndex((item) =>
    currentPath.includes(item.path)
  );

  return (
    <Stack>
      <Breadcrumbs
        links={[
          {
            name: t("sidebar.home"),
            href: "/",
          },
          {
            name: t(SIDE_BAR_ITEM[indexCurrentPage].name),
            href: SIDE_BAR_ITEM[indexCurrentPage].path,
          },
        ]}
        activeLast
      />
      <SideBarHeader />
      <Stack gap={"12px"} mt={"42px"}>
        {SIDE_BAR_ITEM.map((item, index) => (
          <SideBarItem
            name={item.name}
            src={item.src}
            type={item.type}
            key={index}
            path={item.path}
            isActiveItem={currentPath.includes(item.path)}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default SideBarUser;
