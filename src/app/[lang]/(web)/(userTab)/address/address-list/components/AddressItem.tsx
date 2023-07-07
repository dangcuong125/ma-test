"use client";

import { useDispatch } from "@/common/redux/store";
import { Paper, Stack, Box, Button } from "@mui/material";
import { setIdEdit, setIsOpenEditForm } from "../../address-common/slice";
import { IAddressItem } from "../../address-common/interface";
import useTranslation from "next-translate/useTranslation";

type Props = {
  addressItem: IAddressItem;
};

export default function AddressItem({ addressItem }: Props) {
  const {
    id,
    address1,
    address2,
    province,
    district,
    ward,
    isDefault,
    phone,
    name,
  } = addressItem;
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const handleOpenEditForm = (id: number) => {
    dispatch(setIsOpenEditForm(true));
    dispatch(setIdEdit(id));
  };

  return (
    <Paper
      sx={{
        padding: { xs: "10px", md: "24px" },
        borderRadius: "16px",
        width: "100%",
        boxShadow: "0 12px 24px -4px rgba(145, 158, 171, 0.12)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack spacing={1}>
          <Stack direction={"row"} spacing={0.5}>
            <Box
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "Plus Jakarta Sans",
                color: "#212B36",
              }}
            >
              {name}
            </Box>
            {isDefault && (
              <Box
                sx={{
                  width: "86px",
                  height: "26px",
                  backgroundColor: "rgba(24, 144, 255, 0.16)",
                  borderRadius: "6px",
                  p: "1px 8px",
                }}
              >
                <Box
                  sx={{
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Plus Jakarta Sans",
                    color: "rgba(12, 83, 183, 1)",
                  }}
                >
                  {t("address.default")}
                </Box>
              </Box>
            )}
          </Stack>
          <Box
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(99, 115, 129, 1)",
            }}
          >
            {phone}
          </Box>
          <Box
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              fontFamily: "Plus Jakarta Sans",
              color: "rgba(33, 43, 54, 1)",
            }}
          >
            {`${address1} ${address2}, ${ward.name}, ${district.name}, ${province.name}`}
          </Box>
        </Stack>
        <Button
          variant="text"
          onClick={() => handleOpenEditForm(id)}
          sx={{ maxHeight: "30px" }}
        >
          <Box
            sx={{
              backgroundImage: "url(/assets/icons/core/edit-btn.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "24px",
              height: "24px",
            }}
          />
        </Button>
      </Stack>
    </Paper>
  );
}
