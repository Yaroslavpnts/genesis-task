import { styled, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const BoxStyled = styled(Box)`
  width: 100%;
  position: relative;

  .MuiGrid-container {
    justify-content: space-around;
    margin-bottom: 20px;

    @media screen and (max-width: 700px) {
      padding: 30px;
      flex-direction: column;
      gap: 30px;

      > div {
        max-width: 100%;
        flex-grow: 1;
      }
    }
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

      @media screen and (max-width: 600px) {
        font-size: 13px;
      }

      @media screen and (max-width: 600px) {
        font-size: 12px;
      }
    }
  }

  h2 {
    margin-bottom: 15px;

    @media screen and (max-width: 700px) {
      font-size: 18px;
    }

    @media screen and (max-width: 500px) {
      font-size: 16px;
    }
  }

  p {
    line-height: 1.5;

    @media screen and (max-width: 700px) {
      font-size: 14px;
    }
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

  @media screen and (max-width: 600px) {
    left: 0;
  }
`;
