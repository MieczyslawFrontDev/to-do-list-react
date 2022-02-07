import React from "react";
import { Input } from "../Input";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParametersHooks";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const onInputChange = useReplaceQueryParameter(searchQueryParamName);

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};
