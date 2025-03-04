"use client";

import React, { useState, useRef, useEffect } from "react";
import Head from "../(site)/head";
import useAuthStore from "@/store/authStore";
import { Send, User, Bot, Paperclip } from "lucide-react";

const Dashboard = () => {
  const { isLoggedIn } = useAuthStore();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Mock response function to simulate AI response
  const getMockResponse = async (message) => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    return `This is a mock response to: "${message}"`;
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input.trim() };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");

    // Get and add AI response
    setIsLoading(true);
    const response = await getMockResponse(input.trim());
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: response },
    ]);
    setIsLoading(false);
  };

  // Auto-scroll to the most recent message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on component mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        <Head />
        <div className="container flex mx-auto p-6 justify-center">
          Please log in to view this page.
        </div>
      </>
    );
  }

  return (
    <>
      <Head />
      <div className="container mx-auto flex flex-col h-[90vh] max-h-[90-vh] p-6">
        <h1 className="text-2xl font-bold mb-4">Chat</h1>
        
        {/* Messages container */}
        <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg mb-4 p-4">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-gray-400">
              <p>Send a message to start a conversation</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className="mb-4"
              >
                <div className="flex items-start gap-3 max-w-3xl">
                  {message.role === "user" ? (
                    <>
                      <div className="p-2 rounded-full bg-blue-500 text-white">
                        <User size={16} />
                      </div>
                      <div className="p-3 rounded-lg bg-blue-500 text-white">
                        {message.content}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-2 rounded-full bg-gray-200">
                        <Bot size={16} />
                      </div>
                      <div className="p-3 rounded-lg bg-white border border-gray-200">
                        {message.content}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex items-start gap-3 max-w-3xl mb-4">
              <div className="p-2 rounded-full bg-gray-200">
                <Bot size={16} />
              </div>
              <div className="p-3 rounded-lg bg-white border border-gray-200">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input form */}
        <form onSubmit={handleSendMessage} className="flex items-end gap-2">
          <div className="relative flex-1">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
            />
            <button
              type="button"
              className="absolute right-12 bottom-3 text-gray-400 hover:text-gray-600"
            >
              <Paperclip size={20} />
            </button>
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Dashboard;