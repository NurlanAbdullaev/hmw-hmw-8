import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const DeleteModal = ({ deleteItem, openDeleteHandler, id }) => {
  return (
    <>
      {createPortal(
        <>
          <DeleteDiv>
            <h2>Вы точно хотите удалить ?</h2>
            <YesBtn onClick={() => deleteItem(id)}>Yes</YesBtn>
            <NoBtn onClick={openDeleteHandler}>No</NoBtn>
          </DeleteDiv>
        </>,
        document.getElementById("modalDelete")
      )}
    </>
  );
};
const YesBtn = styled.button`
  width: 3rem;
  background-color: aqua;
  color: #fff;
  border: solid 2px #fff;
  border-radius: 12px;
`;
const NoBtn = styled.button`
  width: 3rem;
  background-color: black;
  color: #fff;
  border: solid 2px #fff;
  border-radius: 12px;
`;
const DeleteDiv = styled.div`
  display: flex;
  gap: 20px;
  width: 300px;
  height: 200px;
  border: solid 2px #fff;
  background-color: blue;
  color: #fff;
  border-radius: 12px;
  box-shadow: -9px -6px 44px 21px rgba(11, 49, 78, 0.2);
  align-items: center;
  margin-top: 200px;
  margin-left: 400px;
  flex-direction: column;
`;
