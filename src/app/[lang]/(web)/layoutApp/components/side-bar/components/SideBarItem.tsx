import useTranslation from "next-translate/useTranslation";
import { Button, Stack, Typography } from "@mui/material";
import { SideBarItemProps } from "../interface";
import React from "react";
import Image from "@/common/components/Image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarItem = ({
  src,
  type,
  name,
  path,
  isActiveItem,
}: SideBarItemProps) => {
  const { t } = useTranslation("common");

  return (
    <Link href={path}>
      <Button
        sx={{
          bgcolor: isActiveItem ? "#F7F8FA" : "F5F5F5",
          borderRadius: { xs: "10px", md: "32px" },
          pr: { xs: 0, md: "80px" },
          pl: { xs: 0, md: "5px" },
          width: "100%",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          alignItems="center"
          width={{ xs: "20vw", md: "100%" }}
        >
          <Image src={src} alt={type} sx={{ width: "25px", height: "25px" }} />
          <Typography
            fontSize="16px"
            fontWeight={isActiveItem ? 600 : 400}
            lineHeight="22px"
            color={isActiveItem ? "#1F8A70" : "#000000"}
          >
            {t(name)}
          </Typography>
        </Stack>
      </Button>
    </Link>
  );
};

export default SideBarItem;
