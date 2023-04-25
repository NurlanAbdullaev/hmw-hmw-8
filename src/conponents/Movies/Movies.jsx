import React, { useState } from "react";
import styled from "styled-components";
import { DeleteModal } from "../DeliteModal";

export const Movies = ({ img, title, rating, id, deleteItem }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const openDeleteHandler = (e) => {
    e.preventDefault();
    setOpenDeleteModal((prevState) => !prevState);
  };
  console.log(img);
  return (
    <>
      {openDeleteModal ? (
        <DeleteModal
          deleteItem={deleteItem}
          openDeleteHandler={openDeleteHandler}
          id={id}
        />
      ) : null}

      <MoviesDiv>
        <MoviesImg src={img} alt="#" />
        <h3>{title}</h3>
        <NmaeBtn>{rating}/5 stars</NmaeBtn>
        <DeleteBtn onClick={openDeleteHandler}>DELETE</DeleteBtn>
      </MoviesDiv>
    </>
  );
};
const NmaeBtn = styled.button`
  width: 22rem;
  height: 45px;
  background-color: orange;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  border: none;
`;

const DeleteBtn = styled.button`
  width: 22rem;
  height: 45px;
  background-color: red;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  border: none;
`;

const MoviesDiv = styled.div`
  display: flex;
  gap: 20px;
  width: 600px;
  height: 220px;
  border: solid 2px #fff;
  border-radius: 12px;
  box-shadow: -9px -6px 44px 21px rgba(34, 60, 80, 0.2);
  align-items: center;
  margin-top: 20px;
  margin-left: 400px;
`;
const MoviesImg = styled.img`
  margin-left: 2rem;
  width: 250px;
  height: 160px;
`;
