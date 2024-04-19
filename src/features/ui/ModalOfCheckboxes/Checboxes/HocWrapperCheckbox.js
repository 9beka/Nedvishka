import React from 'react';
import Box from "@mui/material/Box";
const HocWrapperCheckbox = ({children}) => {
   return (
      <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: 3,
        flexWrap: "wrap",
          // flexDirection:"column",
        justifyContent: "space-between",
      }}
    >
{children}
      </Box>
   );
};

export default HocWrapperCheckbox;