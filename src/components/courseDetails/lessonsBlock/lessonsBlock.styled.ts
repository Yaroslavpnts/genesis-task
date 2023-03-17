import { styled, Box, Grid } from "@mui/material";

export const BoxLessons = styled(Box)`
  h3 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  .MuiGrid-container {
    justify-content: flex-start;
    row-gap: 20px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0 38px;

    .MuiGrid-item {
      display: flex;
      justify-content: center;
    }
  }
`;

export const GridSkeleton = styled(Grid)`
  /* margin-right: 10px;
  div: {
    margin-right: 20px;
  } */
`;
