"use client"
import TipTap from "@/components/Tiptap"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
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
    <main className="p-24">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Main title of your product" {...field} />
              </FormControl>
            </FormItem>
          )} />
          <FormField control={form.control} name="description" render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TipTap description={field.name} onChange={field.onChange} />
              </FormControl>
            </FormItem>
          )} />
          <Button className="my-4" type="submit">Submit</Button>
        </form>
      </Form>
    </main>
  )
}
