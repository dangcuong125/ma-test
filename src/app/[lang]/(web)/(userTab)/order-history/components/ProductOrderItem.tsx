import {
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "@/common/components/Image";
import Iconify from "@/common/components/Iconify";

export const ProductOrderItem = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack
      direction={matches ? "row" : "column"}
      width="100%"
      sx={{ paddingY: "15px!important" }}
      spacing={matches ? 0 : 3}
    >
      <Stack
        direction="row"
        width={matches ? "70%" : "100%"}
        justifyContent={"flex-start"}
      >
        <Image
          src="https://s3.ap-southeast-1.amazonaws.com/awd-dev-bucket/images/14/bd1921b6-4be0-4d8a-85b4-381731d6e157.png"
          alt="Order Item Image"
          sx={{ width: "100px", height: "100px", marginRight: 3 }}
        />
        <Stack spacing={0.5} width={"100%"} minHeight={"100%"}>
          <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
            Ổi hồng chín cây
          </Typography>
          <Stack
            direction="row"
            alignItems="flex-start"
            marginBottom={"10px!important"}
          >
            <Typography variant="body2">
              <Box component="span" sx={{ color: "text.secondary" }}>
                size:&nbsp;
              </Box>
              khối lượng:
            </Typography>

            <Divider orientation="vertical" sx={{ mx: 1, height: 16 }} />

            <Typography variant="body2">
              <Box component="span" sx={{ color: "text.secondary" }}>
                color:&nbsp;
              </Box>
              9
            </Typography>
          </Stack>
          <Box
            sx={{
              width: 96,
              textAlign: "right",
              justifySelf: "flex-end",
              color: "rgba(145, 158, 171, 0.8)",
            }}
          >
            <IncrementerStyle>
              <IconButton size="small" color="inherit" disabled={true}>
                <Iconify icon={"eva:minus-fill"} width={16} height={16} />
              </IconButton>
              9
              <IconButton size="small" color="inherit" disabled={true}>
                <Iconify icon={"eva:plus-fill"} width={16} height={16} />
              </IconButton>
            </IncrementerStyle>
          </Box>
        </Stack>
      </Stack>
      <Stack
        width={matches ? "30%" : "100%"}
        minHeight="100%"
        alignItems={matches ? "flex-end" : "center"}
        justifyContent={"center"}
      >
        <Typography sx={{ fontSize: "16px", fontWwight: 600 }}>
          900.000 VND
        </Typography>
      </Stack>
    </Stack>
  );
};

const IncrementerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(0.5, 0.75),
  borderRadius: "24px",
  border: `solid 1px rgba(145, 158, 171, 0.32)`,
}));
