"use client"

import Editor from '@/components/editor';
import { useState } from "react";
import ExampleDocument from "@/lib/example-doc";

export default function EditorWrapper() {
	const [document, updateDocument] = useState(ExampleDocument);

  return (
		<Editor document={document} onChange={updateDocument} />
  );
}
