import { Box, IconButton, Typography, styled } from "@mui/material";
import Iconify from "../../../../../common/components/Iconify";

type Props = {
  available: number;
  quantity: number;
  onIncrease: VoidFunction;
  onDecrease: VoidFunction;
};

export function QuantityBox({
  available,
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <Box sx={{ width: 96, textAlign: "right" }}>
      <IncrementerStyle>
        <IconButton
          size="small"
          color="inherit"
          onClick={onDecrease}
          disabled={quantity <= 1}
        >
          <Iconify icon={"eva:minus-fill"} width={16} height={16} />
        </IconButton>

        {quantity}

        <IconButton
          size="small"
          color="inherit"
          onClick={onIncrease}
          disabled={quantity >= available}
        >
          <Iconify icon={"eva:plus-fill"} width={16} height={16} />
        </IconButton>
      </IncrementerStyle>

      <Typography variant="caption" sx={{ color: "text.secondary" }}>
        available: {available}
      </Typography>
    </Box>
  );
}

const IncrementerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: theme.spacing(0.5),
  padding: theme.spacing(0.5, 0.75),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px rgba(145, 158, 171, 0.32)`,
}));
