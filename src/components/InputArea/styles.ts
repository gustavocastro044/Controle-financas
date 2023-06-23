import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const InputArea = styled.div`
  margin-right: 10px;
  flex: 2;
`

export const InputTitle = styled.h4`
  margin-bottom: 10px;
`
export const Input = styled.input`
  height: 30px;
  width: 150px;
  border-radius: 3px;
`

export const Button = styled.button`
 width: 100%;
    height: 35px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    margin-top: 50px;

    &:hover {
        background-color: blue;
        color: white;
    }
`

export const Select = styled.select`
  height: 35px;
  width: 150px;
  border-radius: 3px;
`