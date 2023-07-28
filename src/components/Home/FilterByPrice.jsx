import React from 'react'
import { useForm } from 'react-hook-form'
import './style/filter.css'

const FilterByPrice = ({setFromTo}) => {


    const {reset, register, handleSubmit} = useForm()

    const submit = (data) =>{
        setFromTo(data)
        reset({
            from:'',
            to:''
        })
    }
    
  return (
    <div className='filter2'>
        <h3 className='filter_name'>Precio</h3>
        <form className='filter_from' onSubmit={handleSubmit(submit)}>
           <div className='filter_fo'>
            <label className='filter_label' htmlFor="from">De</label>
            <input className='filter_input' {...register('from')} type="number" id='from' />
           </div>
           <div className='filter_fo'>
            <label className='filter_label' htmlFor="to">A</label>
            <input className='filter_input' {...register('to')} type="number" id='to' />
           </div>
           <button className='filter_btn'>Filtar Precio</button>
        </form>
    </div>
  )
}

export default FilterByPrice