import styled from "styled-components";
import { useHistory } from "react-router";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  const history = useHistory();
  return (
    <Container>
      <Image src={item.category_photo} />
      <Info>
        <Title>{item.category_name}</Title>
        <Button onClick={()=>history.push(`/shop-category/${item.category_name}/${item.category_id}`)}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;