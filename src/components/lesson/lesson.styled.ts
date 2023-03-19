import { styled, Card, Box, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const LessonStyled = styled(Card)<{ islocked: number }>`
  flex-grow: 1;
  height: 100%;
  cursor: ${(props) => (props.islocked ? "not-allowed" : "pointer")};

  .MuiCardMedia-root {
    opacity: ${(props) => (props.islocked ? 0.5 : 1)};
  }

  @media screen and (max-width: 900px) {
    max-width: 300px;

    > .MuiTypography-h5 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    max-width: 250px;
  }

  @media screen and (max-width: 700px) {
    max-width: 400px;

    > .MuiTypography-h5 {
      font-size: 18px;
    }

    .MuiCardContent-root {
      padding: 8px;
    }

    .MuiBox-root {
      margin-top: 3px;
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 350px;
  }
`;

export const StatusdBlockStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

export const DoneIconStyled = styled(DoneIcon)`
  color: green;
`;

export const LessonTitleStyled = styled(Typography)`
  font-weight: 700;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const VideoControlsDescription = styled(Box)`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
  }

  span {
    font-size: 11px;
  }
`;
