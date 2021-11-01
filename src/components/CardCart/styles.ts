import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 390px;
  margin: 10px auto;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  color: #e3170a;
  border-radius: 15% 15% / 9% 20%;
  border: solid 1px blueviolet;
  img {
    margin: 10px auto;
    height: 200px;
  }
  h5 {
    margin: 5px auto;
    width: 90%;
    color: #000000;
  }
  p {
    margin: 2px auto 10px;
    width: 90%;
    span {
      color: #000000;
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