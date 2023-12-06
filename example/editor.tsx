import React from 'react'
import { useEditor, EditorContent, FloatingMenu, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import useTiptapDevTool from '../src/index'
// define your extension array
const extensions = [
  StarterKit,
]

const content = '<p>Hello World!</p>'

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
  })
	useTiptapDevTool(editor);
  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor!}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={editor!}>This is the bubble menu</BubbleMenu>
    </>
  )
}

export default Tiptap