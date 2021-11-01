import { useCart } from "../../Provider/Cart/index";
import { Container } from './styles'
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
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



export const Card2 = ({
  title,
  image,
  id,
  price,
  description,
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
      <Button type="primary" onClick={() => addProduct(product)}><ShoppingCartOutlined />Adicionar Produto</Button>
  </Container>
  );
};

export default Card2;