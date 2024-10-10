import React, { FC, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";

interface MessageInputProps {
  onSendMessage?: (message: string) => void;
}

const SearchBar: FC<MessageInputProps> = ({}) => {
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    // Action when the message is updated or cleared
    if (message === "") {
      console.log("Message is cleared.");
    } else {
      console.log("Message updated:", message);
    }
  }, [message]);

  return (
    <SearchBarStyled>
      <CiSearch color={`${message !== "" ? "#FFF" : "6D6F78"}`} size={24} />
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        placeholder="search a contact or message"
        onKeyDown={handleKeyDown}
        className="message__input"
      />
    </SearchBarStyled>
  );
};

export default SearchBar;

const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;
  border-style: none;
  border-radius: 10px;
  background: #383a40;
  margin-top: 30px;
  margin-bottom: 60px;
  width: 70%;
  height: auto;
  min-height: 54px;
  padding: 0 10px;
  .message__input {
    width: 90%;
    height: 95%;
    background: #383a40;
    outline: none;
    border-style: none;
    color: white;
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    resize: none;
  }
  .message__input::placeholder {
    color: #6d6f78;
    font-size: 17px;
    font-family: "Times New Roman", Times, serif;
  }
`;
