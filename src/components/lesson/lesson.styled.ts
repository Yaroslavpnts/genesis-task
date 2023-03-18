import { styled, Card, Box, Typography } from "@mui/material";

export const LessonStyled = styled(Card)<{ islocked: number }>`
  flex-grow: 1;
  height: 100%;
  cursor: ${(props) => (props.islocked ? "not-allowed" : "pointer")};

  .MuiCardMedia-root {
    opacity: ${(props) => (props.islocked ? 0.5 : 1)};
  }

  @media screen and (max-width: 900px) {
    max-width: 300px;
  }

  @media screen and (max-width: 800px) {
    max-width: 250px;
  }

  @media screen and (max-width: 800px) {
    max-width: 200px;
  }

  @media screen and (max-width: 600px) {
    max-width: 350px;
  }
`;

export const LockedBlockStyled = styled(Box)`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
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
