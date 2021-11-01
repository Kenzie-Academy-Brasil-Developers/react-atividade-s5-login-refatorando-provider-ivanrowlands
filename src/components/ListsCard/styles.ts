import styled from "styled-components";

export const Container = styled.section`
  h2 {
    font-size: 2rem;
  }
  h4 {
    font-size: 3rem;
    text-align: center;
    margin:0 auto;
    width: 300px;
    border-radius: 25px;
    background-color: #00000078;
    color: #27435e;
  }
  ul {
    margin: 10px auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  @media (min-width: 700px) {
    h4 {
        margin-top:10px;
        font-size: 25px;
    }
    ul {
        width: 90%;
        flex-direction: row;
        flex-wrap: wrap;
    }
  }
`;