"use client"

import { Bold, Italic, Underline, Code, Heading1, Heading2, Heading3, Heading4 } from "lucide-react"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { BaseEditor, BaseRange } from "slate";
import { getActiveStyles, addStyles, removeStyles, setBlockType, removeBlockType, getTextBlockStyle } from "@/lib/utils";

export type ToolbarProps = {
	selection: BaseRange | ((newSelection: BaseRange) => void) | null
	editor: BaseEditor
}


const selectButton = (value: string[], editor: BaseEditor) => {
	removeStyles(editor)
	addStyles(editor, value)
}


const selectHeading = (value: string, editor: BaseEditor) => {
	// removeBlockType(editor);
	setBlockType(editor, value);
}

export default function Toolbar({selection, editor}: ToolbarProps) {
	const styles = Array.from(getActiveStyles(editor));
	const blockStyle = getTextBlockStyle(editor);
  return (
		<>
			<ToggleGroup value={styles} type="multiple" onValueChange={(value: string[]) => selectButton(value, editor)}>
				<ToggleGroupItem value="bold" aria-label="Toggle bold">
					<Bold className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Toggle italic">
					<Italic className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Toggle underline">
					<Underline className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="code" aria-label="Toggle code">
					<Code className="h-4 w-4" />
				</ToggleGroupItem>
			</ToggleGroup>
			<ToggleGroup value={blockStyle} type="single" onValueChange={(value: string) => selectHeading(value, editor)}>
				<ToggleGroupItem value="h1" aria-label="Toggle Heading 1">
					<Heading1 className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="h2" aria-label="Toggle Heading 2">
					<Heading2 className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="h3" aria-label="Toggle Heading 3">
					<Heading3 className="h-4 w-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="h4" aria-label="Toggle Heading 4">
					<Heading4 className="h-4 w-4" />
				</ToggleGroupItem>
			</ToggleGroup>
		</>
	);
}
