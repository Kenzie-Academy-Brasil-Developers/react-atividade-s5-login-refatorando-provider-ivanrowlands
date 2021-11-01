import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 390px;
  margin: 10px auto;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  background-color: #f1fffa;
  color: #e3170a;
  border-radius: 15px;
  img {
    margin: 10px auto;
    height: 200px;
  }
  h5 {
    margin: 5px auto;
    width: 90%;
    color: #493b2a;
  }
  p {
    margin: 2px auto 10px;
    width: 90%;
    span {
      color: #832161;
    }
  }
  button {
    width: 90%;
    height: 30px;
    padding: 5px 0;
    margin-bottom: 5px;
    background-color: #138a36;
    font-size: 18px;
    color: #f1fffa;
    border: 1px solid transparent;
    border-radius: 5px;
    &:hover {
      background-color: #27435e;
    }
  }
  @media (min-width: 768px) {
    height: 320px;
    margin: 5px auto;
    img {
      height: 130px;
    }
  }
`;