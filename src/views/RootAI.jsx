import { Box, Button, TextField, Typography, CircularProgress } from "@mui/material";
import { useState } from "react";
import { usePostRequest } from "../hooks/usePostRequest";
import { useAuth } from "../contextProviders";

const RootAI = () => {
  const URL = import.meta.env.VITE_API_URL;
  const { postData } = usePostRequest();
  const { user } = useAuth();

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you with your gardening today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [conversation, setConversation] = useState([]);
  const [requestMoreInfo, setRequestMoreInfo] = useState(false);

  const handleSendMessage = async () => {
    if (inputValue.trim() !== "") {
      const userMessage = { sender: "user", text: inputValue };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue("");
      setLoading(true);
      setError(null);

      console.log('sending message', userMessage.text);
      try {
        const response = await postData(URL + `rootai/${user.id}/chat`, {
          message: userMessage.text,
          conversation: conversation,
        });
        const botMessage = { sender: "bot", text: response.message };
        setConversation((prevConversation) => [...prevConversation, response.conversation]);
        setRequestMoreInfo(response.needsMoreInfo);

        console.log(response);

        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (err) {
        console.error(err);
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      component={"div"}
      id="chat-area"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        height: "100%",
      }}
    >
      <Typography variant="h5" fontWeight={"bold"} color={"primary"} sx={{ marginBottom: "1rem" }}>
        Hi, I&apos;m Root! 🌱
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Think of me as your personal gardening assistant. I&apos;m here to help you with all your
        gardening needs!
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "1rem" }} gutterBottom>
        Let&apos;s get started! 🌿
      </Typography>
      <Box component={"div"} id="chat-window" overflow={"auto"} maxHeight={"100%"}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            component={"div"}
            id={`message ${msg.sender}-${index}`}
            sx={{
              marginTop: 2,
              marginBottom: 4,
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: msg.sender === "bot" ? "#f0f0f0" : "#f5f5f5",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography variant="body1" fontWeight={"bold"} p={2} color={"text.main"}>
              {msg.sender === "bot" ? "Root" : "You"}:
            </Typography>
            <Typography
              variant="body2"
              p={2}
              color={"text.subtitle"}
              component="pre"
              sx={{ whiteSpace: "pre-wrap", textAlign: msg.sender === "bot" ? "left" : "right" }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
        {loading && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0.5rem",
            }}
          >
            <CircularProgress size={20} />
            <Typography variant="body2" sx={{ marginLeft: "0.5rem" }}>
              Root is typing...
            </Typography>
          </Box>
        )}
        {error && (
          <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
            {error}
          </Typography>
        )}
      </Box>
      <Box component={"div"} id="input-area" p={2}>
        <TextField
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          variant="outlined"
          fullWidth
          multiline
          maxRows={4}
        />
        <Button onClick={handleSendMessage} variant="contained" color="primary" sx={{ m: 4 }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default RootAI;
