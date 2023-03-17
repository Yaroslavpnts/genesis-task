import { styled, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const BoxStyled = styled(Box)`
  width: 100%;
  position: relative;

  .MuiGrid-container {
    justify-content: space-around;
    margin-bottom: 20px;
  }

  .MuiChip-root {
    height: inherit;
    padding: 3px 7px;
    font-size: 10px;

    .MuiChip-label {
      padding: 0;
      letter-spacing: 0.8px;
    }
  }

  .MuiListItemIcon-root {
    min-width: unset;
    margin-right: 10px;
  }

  .MuiListItem-root {
    padding-top: 0px;
    padding-bottom: 0px;

    .MuiTypography-root {
      font-size: 15px;
    }
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    line-height: 1.5;
  }
`;

export const StatusTextColor = styled("span")<{ color?: string }>`
  color: ${(props) => props.color || "inherit"};
  font-weight: 700;
`;

export const PreviousPageLink = styled(Link)`
  position: absolute;
  left: -10px;
  top: -10px;
`;
