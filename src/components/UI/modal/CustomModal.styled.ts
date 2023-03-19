import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ModalProps {
  active: boolean;
}

export const ModalContainerStyled = styled("div")<ModalProps>`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "all" : "none")};
  transition: 0.5s;

  > svg {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
`;

export const ModalContentStyled = styled("div")<ModalProps>`
  padding: 25px 25px 10px;
  border-radius: 12px;
  background-color: white;
  transform: ${(props) => (props.active ? "scale(1)" : "scale(1)")};
  transform: 0.3s;
  max-height: 600px;
  position: relative;
  max-width: 90%;

  @media screen and (max-width: 600px) {
    width: 300px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
  }
`;

export const CloseIconStyled = styled(CloseIcon)`
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
`;
