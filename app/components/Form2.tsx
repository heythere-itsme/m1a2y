import React from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage, FormLabel } from './ui/form'
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { CircleArrowRight } from 'lucide-react'

const formSchema = z.object({
    company: z.string(),
    model: z.string(),
    variant: z.string(),
    YOProd: z.coerce.number(),
})

const Form1 = () => {
    const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: '',
      model: '',
      variant: '',
      YOProd: 0,
    },
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => console.log(values);
  return (
    <div className='form-page-contain'>
        <Form {...form}>
            <h3>Uploading Details</h3>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                    <FormItem>
                    <FormControl>
                    <Input placeholder="Company" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                    <FormItem>
                    <FormControl>
                    <Input placeholder="Model" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="variant"
                    render={({ field }) => (
                    <FormItem>
                    <FormControl>
                    <Input placeholder="Variant" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="YOProd"
                    render={({ field }) => (
                    <FormItem>
                    <FormControl>
                    <Input placeholder="Year Of Production"{...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                    )}
                />
                <div className='flex justify-between px-5 py-5'>
                    <h5>Page 1/9</h5>
                <Button type="submit">Submit <CircleArrowRight strokeWidth={1}/></Button>
                </div>
            </form>
        </Form>
    </div>
  )
}

export default Form1