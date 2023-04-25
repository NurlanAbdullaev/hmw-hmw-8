import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../input/Input";
import { Button } from "../UI/Button";
import { useRef } from "react";
import { createPortal } from "react-dom";

export const Modale = ({ close, addMovieFunction }) => {
  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const ratingInputRef = useRef();

  const addMovie = () => {
    const movieData = {
      id: Date.now().toString(),
      title: titleInputRef.current.value,
      img: imgInputRef.current.value,
      rating: ratingInputRef.current.value,
    };
    addMovieFunction(movieData);
  };

  return (
    <>
      {createPortal(
        <>
          <BackdropDiv onClick={close} />
          <ModalContainer>
            <Form>
              <Label htmlFor="text">Title:</Label>
              <NewInput ref={titleInputRef} type="text" id="text" />
              <Label htmlFor="url">URL:</Label>
              <NewInput ref={imgInputRef} type="url" id="url" />
              <Label htmlFor="number">Rating:</Label>
              <NewInput ref={ratingInputRef} type="number" id="number" />
              <ModalDiv>
                <Button1 onClick={close}>Cencel</Button1>
                <Button2 onClick={addMovie}>Add</Button2>
              </ModalDiv>
            </Form>
          </ModalContainer>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
};
const ModalDiv = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: flex-end;
`;

const BackdropDiv = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;
const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 30vw;
  height: 20rem;
  background-color: #fff;
  border-radius: 20px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  width: 300px;
  height: 40px;
  font-size: 30px;
  font-weight: bold;
`;
const NewInput = styled(Input)`
  width: 35vw;
  height: 5vh;
  border-radius: 10px;
  border: 3px solid;
  font-size: 23 px;
`;
const Button1 = styled(Button)`
  width: 120px;
  height: 45px;
  background-color: green;
  color: #000;
  font-size: 20px;
  border-radius: 10px;
`;
const Button2 = styled(Button)`
  width: 120px;
  height: 45px;
  background-color: #001fff;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  margin-right: 40px;
`;
