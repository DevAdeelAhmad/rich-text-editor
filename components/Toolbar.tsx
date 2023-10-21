"use client"
import { type Editor } from '@tiptap/react'
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2 } from 'lucide-react'
import { Toggle } from './ui/toggle'
import React from 'react'

type Props = {
    editor: Editor | null
}

const Toolbar = ({ editor }: Props) => {
    if (!editor) {
        return null
    }
    return (
        <div className='border border-input bg-transparent rounded-xl'>
            <Toggle size='sm' pressed={editor.isActive('heading')} onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                <Heading2 className='h-4 w-4' />
            </Toggle>

            <Toggle size='sm' pressed={editor.isActive('bold')} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
                <Bold className='h-4 w-4' />
            </Toggle>

            <Toggle size='sm' pressed={editor.isActive('italic')} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
                <Italic className='h-4 w-4' />
            </Toggle>

            <Toggle size='sm' pressed={editor.isActive('bulletList')} onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
                <ListOrdered className='h-4 w-4' />
            </Toggle>
        </div>
    )
}

export default Toolbar