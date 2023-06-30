import { Box, Stack, Typography, Divider } from "@mui/material";
import { TabPanelProps } from "../../noti-common/interface";
import { useSelector } from "react-redux";
import { valueTabNoti } from "../../noti-common/slice";

type Props = {
  unread?: boolean;
  indexTab: number;
};

function TabPanel(props: TabPanelProps) {
  const { children, valueTab, indexTab, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={valueTab !== indexTab}
      id={`simple-tabpanel-${indexTab}`}
      aria-labelledby={`simple-tab-${indexTab}`}
      sx={{
        ":hover": {
          backgroundColor: "rgba(145, 158, 171, 0.08)",
        },
        cursor: "pointer",
        borderBottom: "1px dashed rgba(145, 158, 171, 0.24)",
      }}
      {...other}
    >
      {valueTab === indexTab && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

export default function NotiItem({ unread = false, indexTab }: Props) {
  const valueTab = useSelector(valueTabNoti);

  return (
    <>
      <TabPanel valueTab={valueTab} indexTab={indexTab}>
        <Stack
          direction={"row"}
          spacing={3}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              borderRadius: "50%",
              backgroundColor: "rgb(244, 246, 248)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundImage: "url(/assets/icons/core/user.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          </Box>
          <Stack spacing={1} width={"100%"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
            >
              <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                Đơn hàng được đặt thành công
              </Typography>
              {unread && (
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#00AB55",
                    borderRadius: "50%",
                  }}
                />
              )}
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgb(145, 158, 171)",
                }}
              >
                1 ngày trước
              </Typography>
              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "rgb(145, 158, 171)",
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "rgb(145, 158, 171)",
                }}
              >
                Đơn hàng
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </TabPanel>
    </>
  );
}
