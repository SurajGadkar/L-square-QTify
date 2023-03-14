import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", color: "var(--color-white" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab
          sx={{ textTransform: "capitalize", fontSize: "14px" }}
          value="all"
          label="All"
        />
        <Tab
          sx={{ textTransform: "capitalize", fontSize: "14px" }}
          value="rock"
          label="Rock"
        />
        <Tab
          sx={{ textTransform: "capitalize", fontSize: "14px" }}
          value="pop"
          label="Pop"
        />
        <Tab
          sx={{ textTransform: "capitalize", fontSize: "14px" }}
          value="jazz"
          label="Jazz"
        />
        <Tab
          sx={{ textTransform: "capitalize", fontSize: "14px" }}
          value="blues"
          label="Blues"
        />
      </Tabs>
    </Box>
  );
}
