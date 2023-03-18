import { styled, Box } from "@mui/material";

export const VideoStyled = styled(Box)`
  position: relative;

  .MuiSvgIcon-root {
    position: absolute;
    /* right: 18px;
    top: 4px; */

    bottom: 35px;
    right: 150px;
    top: unset;

    padding: 7px;
    border-radius: 50%;
    color: white;
    font-size: 1.2rem;
  }

  svg:hover {
    /* background-color: #ece8e8; */
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
