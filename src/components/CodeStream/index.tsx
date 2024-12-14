"use client";

import React from 'react';
import {ReactTyped} from 'react-typed';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';



const typedStreamValue = [
  "def python_magic(message):\n" +
  "    result = \"\"\n" +
  "    for char in message:\n" +
  "        result += char\n" +
  "        # Some light processing to simulate \"work\" (not shown)\n" +
  "        yield result  # Yield partial results for typewriter effect\n" +
  "\n" +
  "def generate_python_message():\n" +
  "    messages = [\n" +
  "        \"Crafting digital solutions...\", \n" +
  "        \"Empowering your ideas...\",\n" +
  "        \"Building the future together...\",\n" +
  "    ]\n" +
  "    for msg in messages:\n" +
  "        yield from python_magic(msg)",

  "import React from 'react';\n" +
  "import Typed from 'react-typed';\n" +
  "\n" +
  "const messages = [\n" +
  "  \"We're a team of passionate innovators.\",\n" +
  "  \"We turn your vision into reality.\",\n" +
  "  \"Join us on your digital journey!\",\n" +
  "];\n" +
  "\n" +
  "const TypedMessages: React.FC = () => {\n" +
  "  return (\n" +
  "    <Typed\n" +
  "      strings={messages}\n" +
  "      typeSpeed={75} // Adjust typing speed as desired\n" +
  "      backSpeed={50}\n" +
  "      loop\n" +
  "      showCursor={true}\n" +
  "      cursorChar=\"|\"\n" +
  "    />\n" +
  "  );\n" +
  "};\n" +
  "\n" +
  "export default TypedMessages;",

  `#include <iostream>\n" +
  "#include <string>\n" +
  "#include <vector>\n" +
  "\n" +
  "std::vector<std::string> messages = {\n" +
  "    \"Engineering software excellence.\",\n" +
  "    \"Your trusted technology partner.\",\n" +
  "    \"Innovation is our DNA.\"\n" +
  "};\n" +
  "\n" +
  "int main() {\n" +
  "    while (true) {\n" +
  "        for (const auto& msg : messages) {\n" +
  "            for (char c : msg) {\n" +
  "                std::cout << c << std::flush; \n" +
  "                // Simulate typing delay (e.g., std::this_thread::sleep_for(...))\n" +
  "            }\n" +
  "            // Add a short pause between messages (e.g., std::this_thread::sleep_for(...))\n" +
  "            std::cout << \"\"; // Move cursor to the beginning of the line for overwriting\n" +
  "        }\n" +
  "    }\n" +
  "    return 0;\n" +
  "}`

]


export const CodeTypewriter: React.FC = (
  {
                                                       }
) => {



  return (

      <ReactTyped
        loop
        startWhenVisible
        backSpeed={50}
        onBegin={function noRefCheck(){}}
        onComplete={function noRefCheck(){}}
        onDestroy={function noRefCheck(){}}
        onLastStringBackspaced={function noRefCheck(){}}
        onReset={function noRefCheck(){}}
        onStart={function noRefCheck(){}}
        onStop={function noRefCheck(){}}
        onStringTyped={function noRefCheck(){}}
        onTypingPaused={function noRefCheck(){}}
        onTypingResumed={function noRefCheck(){}}
        strings={typedStreamValue}
        children={
          <SyntaxHighlighter language={"typescript"} style={prism}  children={"undefiend"}></SyntaxHighlighter>
        }
        typeSpeed={50}
        typedRef={function noRefCheck(){}}
      />
  );
};