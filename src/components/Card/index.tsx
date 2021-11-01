import { useCart } from "../../Provider/Cart/index";
import { Container } from "./styles";

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ProductsProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  product: ProductData;
}

export const Card = ({
  id,
  title,
  description,
  image,
  price,
  product,
}: ProductsProps) => {
  const { addProduct } = useCart();

  return (
    <Container>
      <img src={image} alt={title} />
      <h5>{title}</h5>
      <p>
        Price : <span>R$ {price}</span>
      </p>
      <button onClick={() => addProduct(product)}>Adicionar Produto</button>
    </Container>
  );
};

export default Card;