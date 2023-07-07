"use client";

import Iconify from "@/common/components/Iconify";
import { Button, Grid } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/navigation";
import AddPointForm from "./AddPointForm";
const AddPointContainer = () => {
  const { t } = useTranslation("loyalty");
  const router = useRouter();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        p: "5%",
        backgroundImage: 'url(/assets/add-point-background.png)',
        backgroundSize: 'cover'
      }}
    >
      <Grid item xs={12} md={5}>
        <Button
          variant="text"
          sx={{
            color: "#1F8A70",
            mr: '5%'
          }}
          startIcon={
            <Iconify icon={"carbon:arrow-left"} sx={{ width: "24px" }} />
          }
          onClick={() => router.push("/")}
        >
          {t("back_to_homepage")}
        </Button>
      </Grid>
      <Grid item xs={12} md={7}>
        <AddPointForm />
      </Grid>
    </Grid>
  );
};

export default AddPointContainer;

