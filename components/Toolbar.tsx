"use client"
import { type Editor } from '@tiptap/react'
import { Bold, Strikethrough, Italic,  Heading, Code, CodepenIcon } from 'lucide-react'
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
        <div className='bo6der6border-input bg-transparent rounded-xl'>
            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('heading')} onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                <Heading className='h-6 w-6 hover:stroke-white' />
            </Toggle>

            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('bold')} onPressedChange={() => editor.chain().focus().toggleBold().run()}>
                <Bold className='h-6 w-6 hover:stroke-white' />
            </Toggle>

            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('italic')} onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
                <Italic className='h-6 w-6 hover:stroke-white' />
            </Toggle>

            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('strike')} onPressedChange={() => editor.chain().focus().toggleStrike().run()}>
                <Strikethrough className='h-6 w-6 hover:stroke-white' />
            </Toggle>

            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('code')} onPressedChange={() => editor.chain().focus().toggleCode().run()}>
                <Code className='h-6 w-6 hover:stroke-white' />
            </Toggle>

            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('codeblock')} onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}>
                <CodepenIcon className='h-6 w-6 hover:stroke-white' />
            </Toggle>


            {/* <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('bulletList')} onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
                <List className='h-6 w-6 hover:stroke-white' />
            </Toggle>

            <Toggle className='hover:bg-violet-500' size='lg' pressed={editor.isActive('orderedList')} onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}>
                <ListOrdered className='h-6 w-6 hover:stroke-white' />
            </Toggle> */}
        </div>
    )
}

export default Toolbar