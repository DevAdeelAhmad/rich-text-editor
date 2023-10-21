"use client"
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import Toolbar from '@/components/Toolbar'
import Heading from '@tiptap/extension-heading'

const TipTap = ({ description, onChange }: {
    description: string
    onChange: (richText: string) => void
}) => {
    const editor = useEditor({
        extensions: [StarterKit.configure({}), Heading.configure({
            HTMLAttributes: {
                class: 'text-4xl font-bold',
                levels: [2],
            }
        })],
        content: description,
        editorProps: {
            attributes: {
                class: "rounded-md border min-h-[150px] border-input bg-white disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2"
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
            console.log(editor.getHTML())
        },
    })
    return (
        <div className='flex flex-col justify-stretch min-h-[250px]'>
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default TipTap