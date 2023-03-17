import { Card, styled } from "@mui/material";

export const CardStyled = styled(Card)`
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #cdfaee;
  -webkit-box-shadow: 5px 12px 19px -9px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 12px 19px -9px rgba(0, 0, 0, 1);
  box-shadow: 5px 12px 19px -9px rgba(0, 0, 0, 1);
  color: #393a45;
  text-align: center;

  a {
    padding: 10px;
    text-decoration: none;
  }

  h3 {
    color: #393a45;
    font-weight: 700;
    height: 45px;
    max-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  img {
    max-width: 100%;
  }

  .MuiCardActionArea-root {
    width: 100%;
  }

  .MuiChip-root {
    background: white;
    border: 1px solid #00a69a;
    display: flex;
    justify-content: flex-start;
    padding: 0px 5px;
    font-size: 14px;
    /* width: 90%; */
    width: 100%;
    cursor: pointer;

    .MuiChip-label {
      color: #393a45;
      padding-left: 8px;
      padding-right: 8px;
    }
  }

  .MuiStack-root {
    margin-bottom: 10px;
    width: 90%;

    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .MuiTypography-subtitle2 {
    margin: 5px 0;
    display: block;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: #393a45;
  }
`;
