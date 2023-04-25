import styled from "styled-components";
import { Button } from "../UI/Button";
export const Header = ({ close }) => {
  return (
    <>
      <Headers>
        <H1>Favorite Movies </H1>
        <AddButton onClick={close}>Click Me</AddButton>
      </Headers>
    </>
  );
};
const Headers = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  background-color: darkblue;
`;
const H1 = styled.h1`
  color: white;
  font-size: 40px;
  font-weight: bold;
`;
const AddButton = styled(Button)`
  width: 140px;
  height: 45px;
  background-color: #ff7200;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  border: none;
`;
