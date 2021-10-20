import React from 'react';
import styled from "styled-components";
// import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import axios from 'axios';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  const [categories, setCategories] = React.useState([]);
  const getCategories = async () => {
    try{
      const res = await axios.get('http://localhost:8000/products/viewCategories');
      console.log(res.data);
      setCategories(res.data);
    }
    catch(err){
      console.log(err);
    }
  }
  React.useEffect(() => {
    getCategories();
  }, []);
  return (
    <Container>
      {categories.map((category, id) => (
        <CategoryItem item={category} key={id} />
      ))}
    </Container>
  );
};

export default Categories;