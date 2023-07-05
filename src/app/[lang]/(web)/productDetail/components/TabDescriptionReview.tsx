import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Card, Divider, Tab } from "@mui/material";
import { useState } from "react";
import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";


type Props = {
  dataMenu: any;
};

export const TabDescriptionReview = () => {
    const [value, setValues] = useState('1');

  return (
    <Card>
    <TabContext value={value}>
      <Box sx={{ px: 3, bgcolor: 'background.neutral' }}>
        <TabList onChange={(e :any, value: any) => setValues(value)}>
          <Tab disableRipple value="1" label="Description" />
          <Tab
            disableRipple
            value="2"
            label="Reviews "
            sx={{ '& .MuiTab-wrapper': { whiteSpace: 'nowrap' } }}
          />
        </TabList>
      </Box>

      <Divider />

      <TabPanel value="1">
        <Box sx={{ p: 3 }}>
          {/* <Markdown children={product.description} /> */}
        </Box>
      </TabPanel>
      <TabPanel value="2">
        {/* <ProductDetailsReview product={product} /> */}
      </TabPanel>
    </TabContext>
  </Card>
  );
};
