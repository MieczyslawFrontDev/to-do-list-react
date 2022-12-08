import React from "react";
import { Wrapper } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "../../../common/Form";
import { ProductsList } from "../ProductsList";

export const ProductsPage = () => {
  return (
    <Wrapper>
      <Header title="Lista zakupów" />
      <>
        <Section title="Dodaj produkt" body={<Form />} />
        <Section title="Lista zakupów" body={<ProductsList />} />
      </>
    </Wrapper>
  );
};
