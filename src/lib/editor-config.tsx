import { BaseEditor } from "slate";
import { DefaultElement, ReactEditor, RenderElementProps, RenderLeafProps } from "slate-react";

export default function useEditorConfig(editor : BaseEditor & ReactEditor) {
  return { renderElement, renderLeaf };
}

function renderElement(props : RenderElementProps) {
  const { element, children, attributes } = props;
  switch (element.type) {
    case "paragraph":
      return <p {...attributes}>{children}</p>;
    case "h1":
      return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" {...attributes}>{children}</h1>;
    case "h2":
      return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0" {...attributes}>{children}</h2>;
    case "h3":
      return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight" {...attributes}>{children}</h3>;
    case "h4":
      return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight" {...attributes}>{children}</h4>;
    default:
      // For the default case, we delegate to Slate's default rendering.
      return <DefaultElement {...props} />;
  }
}

function renderLeaf({ attributes, children, leaf }: RenderLeafProps) {
  let el = <>{children}</>;

  if (leaf.bold) {
    el = <strong>{el}</strong>;
  }

  if (leaf.code) {
    el = <code>{el}</code>;
  }

  if (leaf.italic) {
    el = <em>{el}</em>;
  }

  if (leaf.underline) {
    el = <u>{el}</u>;
  }

  return <span {...attributes}>{el}</span>;
}
