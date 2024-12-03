import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath, UseFormReturn } from "react-hook-form"
import { z } from "zod"
import { authFormSchema } from "@/lib/utils"

const formSchema = authFormSchema("sign-up")
interface CustomInputProps {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeHolder: string
}

const CustomInput = ({control, name, label, placeHolder}: CustomInputProps) => {
  return (
    <div>
       <FormField
                control={control}
                name={name}
                render={({ field }) => (
                 <div className='form-item'>
                     <FormLabel className='form-label text-[17px]'>
                        {label}
                     </FormLabel>
                     
                     <div className='flex flex-col w-full'>
                        <FormControl>
                            <Input 
                              placeholder={placeHolder}
                              className='py-[1.3rem] my-1 placeholder:text-sm text-lg bg-white'
                              style={{ fontSize: "16px" }}
                              {...field}
                              type={name === 'password' ? 'password' : 'text'}
                            />
                        </FormControl>
                        <FormMessage className='form-message mt-2' />
                 </div>
                 </div>


                )}
              />
    </div>
  )
}

export default CustomInput
