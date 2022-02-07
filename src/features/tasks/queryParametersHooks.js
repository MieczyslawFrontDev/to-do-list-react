import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(key);

  return query;
};

export const useReplaceQueryParameter = (key) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();

  const onInputChange = ({ target }) => {
    if (target.value.trim() === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return onInputChange;
};
