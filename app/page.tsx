"use client"
import TipTap from "@/components/Tiptap"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import Link from "next/link"
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function Home() {

  const formSchema = z.object({
    title: z.string().min(5, { message: 'The title is not long enough!' }).max(100, { message: 'The title is too long!' }),
    price: z.number().min(1, { message: 'The price cannot be zero!' }),
    description: z.string().min(5, { message: 'The title is not long enough!' }).max(300, { message: 'The title is too long!' }).trim(),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      price: 108,
      description: ''
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
  }
  return (
    <main className="p-24 text-xl">
      <h1 className="text-2xl font-bold text-center">Developed By <Link href='https://linktr.ee/devadeelahmad' className="text-violet-500">DevAdeelAhmad</Link></h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel style={{ fontSize: 25 }}>Title</FormLabel>
              <FormControl>
                <Input placeholder="Main title of your product" {...field} />
              </FormControl>
            </FormItem>
          )} />
          <div className="mt-6">
            <FormField control={form.control} name="description" render={({ field }) => (
              <FormItem>
                <FormLabel style={{ fontSize: 25 }}>Description</FormLabel>
                <FormControl>
                  <TipTap description={field.name} onChange={field.onChange} />
                </FormControl>
              </FormItem>
            )} />
          </div>
          <Button className="my-4" type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}
