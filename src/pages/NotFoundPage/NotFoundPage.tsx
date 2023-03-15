import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { NotFoundPageStyled } from "./NotfoundPage.styled";

const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <NotFoundPageStyled>
        <div>
          <h3>Щось пішло не так</h3>
          <h4>
            Неправильно набрано адресу, або дана сторінка ще знаходиться на
            стадії розробки.
          </h4>
          <Link to="/">На головну</Link>
        </div>
      </NotFoundPageStyled>
    </Container>
  );
};

export default NotFoundPage;
