import { useSelector, useDispatch } from "react-redux";
import {
  List,
  Item,
  Button,
  Content,
  StyledLink,
} from "../../../common/List/styled";
import {
  toggleProductDone,
  removeProduct,
  selectProducts,
} from "../productsSlice";

export const ProductsList = () => {
  const products = useSelector((state) => selectProducts(state));
  const dispatch = useDispatch();

  return (
    <List>
      {products.map((product) => (
        <Item key={product.id}>
          <Button
            toggleDone
            onClick={() => dispatch(toggleProductDone(product.id))}
          >
            {product.done ? "✓" : ""}
          </Button>
          <Content done={product.done}>
            <StyledLink to={`/zakupy/${product.id}`}>
              {product.content}
            </StyledLink>
          </Content>
          <Button remove onClick={() => dispatch(removeProduct(product.id))}>
            🗑
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ProductsList;
