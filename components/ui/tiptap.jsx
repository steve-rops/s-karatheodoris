"use client";

import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import {
  AlignCenter,
  AlignLeft,
  Bold,
  Italic,
  Strikethrough,
} from "lucide-react";

const MenuBar = () => {
  const { editor } = useCurrentEditor();
  if (!editor) return;

  return (
    <div className="flex gap-2 bg-gray-300  rounded px-2 py-1">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("bold")
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"
        }`}
      >
        <Bold size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("italic")
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"
        }`}
      >
        <Italic size={16} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`px-2 py-1 rounded ${
          editor.isActive("strike")
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"
        }`}
      >
        <Strikethrough size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-2 rounded ${
          editor.isActive({ textAlign: "left" })
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"
        }`}
      >
        <AlignLeft size={16} />
      </button>

      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-2 rounded ${
          editor.isActive({ textAlign: "center" })
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"
        }`}
      >
        <AlignCenter size={16} />
      </button>
      {/* Add more buttons here... */}
    </div>
  );
};

const extentions = [
  StarterKit.configure({
    paragraph: {
      HTMLAttributes: {
        class: "text-start", // default text alignment
      },
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

const editorProps = {
  immediatelyRender: false,
  attributes: {
    class: "min-h-[150px] focus:outline-none",
  },
};

export default function Tiptap({ children }) {
  return (
    <EditorProvider
      slotBefore={<MenuBar />}
      editorProps={editorProps}
      extensions={extentions}
      content={children}
    ></EditorProvider>
  );
}
