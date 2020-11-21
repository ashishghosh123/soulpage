import React from 'react'
import { useForm } from 'react-hook-form'


function Form() {
    const {register,handleSubmit,errors}=useForm()

    const onSubmit = (data)=>{
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type='text' name='userid' placeholder='Enter your name' ref={register({required:true})} />
                {errors.userid && 'username required'}
                <input type='password' name='password' placeholder='Enter password' ref={register({required:'required password',minLength:{value:5,message:'too short'}})}/>
                {errors.password && errors.password.message}
                <input type='text' name='address.street' placeholder='Enter address 1' ref={register({required:true})} />
                <input type='text' name='address.city' placeholder='Enter address 2' ref={register({required:true})} />
                
                <input type='text' name='phone[0]' placeholder='Enter phone No.1' ref={register({required:true})} />
                <input type='text' name='phone[1]' placeholder='Enter phone no 2' ref={register({required:true})} />
                <button>Submit</button>
                
            </form>
        </div>
    )
}

export default Form
