import { Box, Divider, Stack, Tab, Tabs, Typography } from "@mui/material";
import { SyntheticEvent } from "react";
import { useSelector } from "react-redux";
import { setValueTab, valueTabNoti } from "../../noti-common/slice";
import { useDispatch } from "@/common/redux/store";
import { StackedLineChartSharp } from "@mui/icons-material";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NotiHeader() {
  const valueTab = useSelector(valueTabNoti);
  const dispatch = useDispatch();
  const handleChange = (event: SyntheticEvent, newValueTab: number) => {
    dispatch(setValueTab(newValueTab));
  };
  return (
    <Stack
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
        backgroundColor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          minHeight: "123px",
          display: "flex",
          alignItems: "center",
          padding: "0 10px 0 22px",
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          Thông báo
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ width: "100%", padding: "0 10px 0 22px" }}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={valueTab}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            sx={{
              fontSize: "18px",
            }}
          >
            <Tab
              sx={{
                px: 0,
              }}
              icon={
                <Stack direction={"row"} spacing={1}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Tất cả
                  </Typography>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor: "#00AB55",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography fontWeight={"600"} color={"#FFFFFF"}>
                      22
                    </Typography>
                  </Box>
                </Stack>
              }
              iconPosition="start"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                px: 0,
                ml: "16px",
              }}
              icon={
                <Stack direction={"row"} spacing={1}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Chưa đọc
                  </Typography>
                  <Box
                    sx={{
                      width: 30,
                      height: 30,
                      backgroundColor:
                        valueTab === 1
                          ? "rgb(0, 184, 217)"
                          : "rgba(0, 184, 217, 0.16)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      fontWeight={"600"}
                      color={valueTab === 1 ? "#FFFFFF" : "rgb(0, 108, 156)"}
                    >
                      10
                    </Typography>
                  </Box>
                </Stack>
              }
              iconPosition="start"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
      </Box>
      <Divider />
    </Stack>
  );
}
