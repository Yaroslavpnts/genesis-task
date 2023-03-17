import React from "react";
import { ModalContainerStyled, ModalContentStyled } from "./CustomModal.styled";
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
  active: boolean;
  handleClose: () => void;
  children: JSX.Element;
}

const CustomModal: React.FC<CustomModalProps> = ({
  active,
  handleClose,
  children,
}) => {
  return (
    <ModalContainerStyled onClick={handleClose} active={active}>
      <ModalContentStyled onClick={(e) => e.stopPropagation()} active={active}>
        {children}
        <CloseIcon onClick={handleClose} />
      </ModalContentStyled>
    </ModalContainerStyled>
  );
};

export default CustomModal;
