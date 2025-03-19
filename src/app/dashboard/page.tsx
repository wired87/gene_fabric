"use client";

import React, { useState, useRef, useEffect } from "react";
import useAuthStore from "@/store/authStore";
import { Send, User, Bot, Paperclip, File, Trash2, Upload } from "lucide-react";
import Head from "../(site)/head";

const Dashboard = () => {
  const { isLoggedIn } = useAuthStore();
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  interface UploadedFile {
    id: string;
    name: string;
    size: number;
    type: string;
    file: File;
  }

  const [files, setFiles] = useState<UploadedFile[]>([]);

  // const [files, setFiles] = useState([]);
  const [responseDetails, setResponseDetails] = useState<ResponseDetails>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Mock response function to simulate AI response
  interface ResponseDetails {
    title?: string;
    content?: string;
  }

  const getMockResponse = async (message: string): Promise<string> => {
    setIsLoading(true);
    // Simulate network delay
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    // Create a mock response with two parts
    const chatResponse = `This is the chat response to: "${message}"`;
    const detailedResponse: ResponseDetails = {
      title: "Detailed Analysis",
      content: `This is a more detailed breakdown of the response to: "${message}"\n\nIt includes additional information that wouldn't fit well in the chat flow.`
    };

    setResponseDetails(detailedResponse);
    return chatResponse;
  };

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", content: input.trim() };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput("");

    // Get and add AI response
    setIsLoading(true);
    const response = await getMockResponse(input.trim());
    setMessages(prevMessages => [
      ...prevMessages,
      { role: "assistant", content: response }
    ]);
    setIsLoading(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(e.target.files || []);

    const newFiles = uploadedFiles.map(file => ({
      id: Date.now() + Math.random().toString(36).substring(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      file: file
    }));

    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };


  const deleteFile = (id: string) => {
    setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
  };

  const handleTextExit = (e: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  }
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
      <div className="container mx-auto flex h-[90vh] max-h-[90vh] p-6 gap-4">
        {/* Left sidebar with file manager and response details */}
        <div className="w-1/3 flex flex-col gap-4">
          {/* File manager */}
          <div className="h-1/2 bg-gray-50 rounded-lg p-4 flex flex-col overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Files</h2>
              <button
                onClick={() => fileInputRef?.current?.click()}
                className="flex items-center gap-1 text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                <Upload size={14} /> Upload
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                multiple
                className="hidden"
              />
            </div>
            <div className="flex-1 overflow-y-auto">
              {files.length === 0 ? (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  <p>No files uploaded</p>
                </div>
              ) : (
                <ul className="space-y-2">
                  {files.map((file) => (
                    <li key={file.id} className="flex items-center justify-between bg-white p-2 rounded border border-gray-200">
                      <div className="flex items-center gap-2">
                        <File size={16} className="text-blue-500" />
                        <div className="text-sm truncate max-w-[150px]">{file.name}</div>
                      </div>
                      <button
                        onClick={() => deleteFile(file.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Response details */}
          <div className="h-1/2 bg-gray-50 rounded-lg p-4 overflow-y-auto">
            <h2 className="font-semibold mb-3">Response Details</h2>
            {responseDetails ? (
              <div className="bg-white p-3 rounded border border-gray-200">
                <h3 className="font-semibold text-sm mb-2">{responseDetails.title}</h3>
                <p className="text-sm whitespace-pre-line">{responseDetails.content}</p>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                <p>Send a message to see detailed response</p>
              </div>
            )}
          </div>
        </div>

        {/* Chat area */}
        <div className="w-2/3 flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Chat</h1>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto bg-gray-50 rounded-lg mb-4 p-4">
            {messages.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-400">
                <p>Send a message to start a conversation</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div key={index} className="mb-4">
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
                onKeyDown={handleTextExit}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
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
      </div>
    </>
  );
};

export default Dashboard;