import Button from '@/components/form/Button'
import TextInput from '@/components/form/TextInput'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form';

const PollForm = () => {

  const { control, register, formState, handleSubmit } = useForm({
    defaultValues: {
      Question: '',
      Options: [
        {
          values: [{ option: '', id: "" }]
        }
      ]
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control,
    name: "Questions",
  });

  console.log(fields)
  return (
    <aside className='justify-center mt-10 flex mb-[130px]'>
      <form className='md:w-[500px] flex flex-col  '>
        <section className='rounded-lg border p-4 bg-white my-4'>
          <TextInput label={'Title'} placeholder={'e.g Headies Award,Presidential Election'} type={'text'} />
          <TextInput label={'Description'} placeholder={'Describe what the poll is about'} type={'text'} />
          <div className='flex justify-between items-center  w-full gap-4'>
            <TextInput label={'Start Date'} placeholder={'Describe what the poll is about'} type={'text'} />
            <TextInput label={'End date'} placeholder={'Describe what the poll is about'} type={'text'} />
          </div>
        </section>
        <section className='rounded-lg border p-4 bg-white my-4'>

          <form>
            <input

              placeholder={`Question 1}`}
              className='w-full py-3 border border-gray-300 px-3 text-[12px] my-2 rounded-md capitalize'
            // {...register(`field.Options.${index}`)}
            />
          </form>
          {/* {fields.map((field, index) => (
            <>
              <input
                key={field.id}
                placeholder={`Options ${index + 1}`}
                className='w-full py-3 border border-gray-300 px-3 text-[12px] my-2 rounded-md capitalize'
                {...register(`field.Options.${index}`)}
              />
              {
                fields.length - 1 === index && (
                  <>
                    <p onClick={() => append({ option: "my name", id: 1 })}>Add Option</p>
                    {index > 0 && (<p onClick={() => remove(index)}>Remove Option</p>)}
                  </>
                )
              }
            </>
          ))} */}
        </section>
        <section className='rounded-lg border p-4 bg-white flex justify-between items-center gap-10'>
          <Button text={'Add Question'} />
          <Button text={'Launch Poll'} />
        </section>
      </form>
    </aside>
  )
}

export default PollForm