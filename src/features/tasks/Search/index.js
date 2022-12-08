import React from "react";
import { Input } from "../../../common/Input";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParametersHooks";
import searchQueryParamName from "../searchQueryParamName";
import { Wrapper } from "./styled";

export const Search = () => {
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
