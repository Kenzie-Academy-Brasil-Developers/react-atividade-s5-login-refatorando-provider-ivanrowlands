import Card2 from "../Card/index";
import CardCart from "../CardCart/index";
import { useCart } from "./../../Provider/Cart/index";
import { Container } from "./styles";
import { ShoppingOutlined, ShopOutlined } from '@ant-design/icons';

export const ListCard = () => {
  const products = [
    {
      id: 11,
      title: "Samsung Galaxy A01 Dual SIM 32 GB preto 2 GB RAM",
      description:
        "Processador Snapdragon 439 Octa-Core de 2GHz com 2GB de RAM.",
      price: 699.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_661764-MLA44282592265_122020-O.webp",
    },
    {
      id: 12,
      title: "Xiaomi Redmi 9A Dual SIM 32 GB azul 2 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 799.99,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_958898-MLA43824398273_102020-O.webp",
    },
    {
      id: 13,
      title: "LG K11+ Dual SIM 32 GB dourado 3 GB RAM",
      description:
        "Processador MediaTek Helio G25 Octa-Core de 2GHz com 2GB de RAM.",
      price: 859.1,
      image:
        "https://http2.mlstatic.com/D_NQ_NP_633672-MLA31348110302_072019-O.webp",
    },
    {
      id: 45,
      title: 'iPhone 11 Apple (64GB) Branco Tela 6,1" 4G Câmera 12MP iOS',
      description:
        "Grave vídeos 4K, faça belos retratos e capture paisagens inteiras com o novo sistema de câmera dupla.",
      price: 3899.99,
      image:
        "https://images-americanas.b2w.io/produtos/01/00/img/1614132/3/1614132374_1GG.jpg",
    },
  ];

  const { cart } = useCart();

  return (
    <Container>
      <h4><ShopOutlined />Opções de compra<ShopOutlined /></h4>
      <ul>
        {products.map((itemProduct) => (
          <Card2
            key={itemProduct.id}
            id={itemProduct.id}
            title={itemProduct.title}
            description={itemProduct.description}
            image={itemProduct.image}
            price={itemProduct.price}
            product={itemProduct}
          />
        ))}
      </ul>
      <h4><ShoppingOutlined />Cart<ShoppingOutlined /></h4>
      <ul>
        {cart &&
          cart.map((itemProduct) => (
            <CardCart
              key={itemProduct.id}
              id={itemProduct.id}
              title={itemProduct.title}
              description={itemProduct.description}
              image={itemProduct.image}
              price={itemProduct.price}
              product={itemProduct}
            />
          ))}
      </ul>
    </Container>
  );
};

export default ListCard;