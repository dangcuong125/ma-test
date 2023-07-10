import { Avatar, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { DEFAULT_AVATAR, ICON_EDIT } from "../constants";
import Image from "@/common/components/Image";
import Link from "next/link";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useTranslation from "next-translate/useTranslation";

const SideBarHeader = () => {
  const { data } = useGetCustomerInfo();
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <Stack direction={"row"} mt={"50px"} spacing={2} alignItems={"center"}>
      <Avatar
        src={data?.avatar?.url ?? DEFAULT_AVATAR}
        sx={{
          bgcolor: "#1F8A70",
          width: "60px",
          height: "60px",
        }}
        alt="avatar"
      />
      <Stack spacing={"5px"}>
        <Typography color={"#1A1A1A"} fontSize={"16px"} fontWeight={600}>
          {data?.name ?? ""}
        </Typography>
        <Link href={"/profile"}>
          <Button sx={{ pl: 0 }} onClick={() => router.push(PATH_HOME.profile)}>
            <Stack direction={"row"} spacing={"8px"}>
              <Image
                src={ICON_EDIT}
                alt="icon edit"
                sx={{ width: "18px", height: "18px" }}
              />
              <Typography color={"#666E80"} fontSize={"14px"} fontWeight={400}>
                {t("edit_profile")}
              </Typography>
            </Stack>
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default SideBarHeader;
