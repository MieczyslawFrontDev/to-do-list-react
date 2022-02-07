import React from "react";
import { Wrapper } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

export const Author = () => (
  <Wrapper>
    <Header title="O autorze" />
    <Section
      title="Mieczysław Przytuła"
      body={
        <>
          <p>
            Mam na imię Mietek i chciałbym zostać programistą JavaScript :) Mam
            nadzieję, że nauczę się programować, a przygoda z JavaScript okaże
            się długa i fascynująca. Chciałbym znaleźć pracę jako frontend
            developer, czerpać z niej przyjemność i satysfakcję.
          </p>
        </>
      }
    />
  </Wrapper>
);
