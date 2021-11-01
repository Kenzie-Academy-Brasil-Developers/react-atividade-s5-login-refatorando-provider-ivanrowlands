import { useCart } from "../../Provider/Cart/index";
import { Container } from "./styles";
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

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

export const CardCart = ({
  id,
  title,
  description,
  image,
  price,
  product,
}: ProductsProps) => {
  const { deleteProduct } = useCart();

  return (
    <Container>
      <img src={image} alt={title} height="150px" />
      <h5>{title}</h5>
      <p>
        Price: <span>R$ {price}</span>
      </p>
      <Button type="primary" danger onClick={() => deleteProduct(product)}><DeleteOutlined />Adicionar Produto</Button>
    </Container>
  );
};

export default CardCart;