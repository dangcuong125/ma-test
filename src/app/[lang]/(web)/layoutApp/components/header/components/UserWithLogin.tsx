"use client";
import React, { useEffect } from "react";
import { Button, Box, Typography, Menu, MenuItem, Stack } from "@mui/material";
import { useGetCustomerInfo } from "@/common/hooks/useGetCustomerInfo";
import { useDispatch, useSelector } from "@/common/redux/store";
import { resetHeaderState, setOpenUserMenu } from "../header.slice";
import { useRouter } from "next/navigation";
import { PATH_HOME } from "@/common/constants/path.constants";
import useTranslation from "next-translate/useTranslation";
import { useQueryClient } from "react-query";
import axiosClient from "@/common/utils/axios";
import { API_USER_LOGOUT } from "@/common/constants/api.constants";
import {
  resetToken,
  setIsLoggedIn,
} from "@/app/[lang]/(auth)/login/reducers/auth.slice";
import { QUERY_KEYS } from "@/common/constants/queryKeys.constant";
import { setCustomerInfo } from "@/app/[lang]/(web)/(userTab)/profile/account-common/reducers/customer-profile.slice";

const UserWithLogin = () => {
  const dispatch = useDispatch();
  const anchorRef = React.useRef(null);
  const router = useRouter();
  const { t } = useTranslation("common");
  const queryClient = useQueryClient();

  useEffect(() => {
    return () => {
      dispatch(resetHeaderState());
    };
  }, []);

  const isOpenUserMenu = useSelector(
    (state) => state.headerSlice.isOpenUserMenu
  );

  const handleClick = () => {
    dispatch(setOpenUserMenu(!isOpenUserMenu));
  };

  const handleClose = () => {
    dispatch(setOpenUserMenu(false));
  };

  const handleLogout = () => {
    axiosClient.post(API_USER_LOGOUT);
    dispatch(resetToken());
    dispatch(setIsLoggedIn(false));
    dispatch(setCustomerInfo({}));
    queryClient.removeQueries([QUERY_KEYS.CUSTOMER_PROFILE]);
    router.push(PATH_HOME.root);
  };

  const { data } = useGetCustomerInfo();

  return (
    <>
      <Button
        ref={anchorRef}
        sx={{
          color: "#666666",
        }}
        startIcon={
          <Box
            sx={{
              backgroundImage: "url(/assets/icons/core/user.svg)",
              width: "24px",
              height: "24px",
            }}
          />
        }
        onClick={handleClick}
      >
        <Typography display={{ xs: "none", md: "flex" }}>
          {data?.name ?? ""}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorRef.current}
        id="account-menu"
        open={isOpenUserMenu}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            padding: "16px 24px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenuItem-root": {
              padding: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack spacing={"16px"}>
          <MenuItem onClick={() => router.push(PATH_HOME.profile)}>
            {t("information_account")}
          </MenuItem>
          <MenuItem onClick={() => router.push(PATH_HOME.order_history.list)}>
            {t("my_order")}
          </MenuItem>
          <MenuItem onClick={handleLogout}>{t("logout")}</MenuItem>
        </Stack>
      </Menu>
    </>
  );
};

export default UserWithLogin;
