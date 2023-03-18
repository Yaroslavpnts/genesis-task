import React from "react";
import {
  CloseIconStyled,
  ModalContainerStyled,
  ModalContentStyled,
} from "./CustomModal.styled";

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
        <CloseIconStyled onClick={handleClose} />
      </ModalContentStyled>
    </ModalContainerStyled>
  );
};

export default CustomModal;
