// import {
//     ChatBubble,
//     ChatBubbleAvatar,
//     ChatBubbleMessage,
// } from "@/components/ui/chat/chat-bubble";
// import { ChatInput } from "@/components/ui/chat/chat-input";
// import {
//     ExpandableChat,
//     ExpandableChatHeader,
//     ExpandableChatBody,
//     ExpandableChatFooter,
// } from "@/components/ui/chat/expandable-chat";
// import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
// import { Button } from "./ui/button";
// import { Send } from "lucide-react";
// import { useState } from "react";
// export default function ChatBox() {
//     const [files, setFiles] = useState([
//         { name: "Report.pdf", url: "/files/report.pdf" },
//         { name: "Summary.txt", url: "/files/summary.txt" },
//     ]);

//     const message = {
//         content: "Hello, how can I help you today?",
//     };

//     return (
//         <ExpandableChat size="lg" position="bottom-right">
//             <ExpandableChatHeader className="flex-col text-center justify-center">
//                 <h1 className="text-xl font-semibold">Chat with our AI ✨</h1>
//                 <p>Ask any question for our AI to answer</p>
//                 <div className="flex gap-2 items-center pt-2">
//                     <Button variant="secondary">New Chat</Button>
//                     <Button variant="secondary">See FAQ</Button>
//                 </div>
//             </ExpandableChatHeader>
//             <ExpandableChatBody>
//                 <ChatMessageList>
//                     <ChatBubble>
//                         <ChatBubbleAvatar />
//                         <ChatBubbleMessage>{message.content}</ChatBubbleMessage>
//                     </ChatBubble>
//                 </ChatMessageList>

//                 {/* File Viewer UI */}
//                 <div className="mt-4 p-2 border rounded">
//                     <h2 className="font-medium mb-2">Shared Files</h2>
//                     <ul className="space-y-2">
//                         {files.map((file, index) => (
//                             <li key={index} className="flex justify-between items-center">
//                                 <span>{file.name}</span>
//                                 <a
//                                     href={file.url}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-blue-600 hover:underline text-sm"
//                                 >
//                                     View
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 {/* End File Viewer */}
//             </ExpandableChatBody>
//             <ExpandableChatFooter>
//                 <ChatInput />
//                 <Button type="submit" size="icon">
//                     <Send className="size-4" />
//                 </Button>
//             </ExpandableChatFooter>
//         </ExpandableChat>
//     );
// }