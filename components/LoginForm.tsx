'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required()
})

const LoginForm: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })


  const onSubmit = (data: LoginPostData) => {
    reset()
  }

  const router = useRouter()
  const onCancel = () => {
    router.back()
  }

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='form_container glassmorphism'
      >
        <label className='form_label'>
          User Name
          <input
            {...register('userName')}
            required
            className='form_input focus:outline-none focus:shadow-outline'
          />
          <p>{errors.userName?.message}</p>
        </label>

        <label className='form_label'>
          Password
          <input
            {...register('password')}
            type='password'
            required
            className='form_input focus:outline-none focus:shadow-outline'
          />
          <p>{errors.password?.message}</p>
        </label>

        <div className='flex-center'>
          <button
            type='submit'
            className='black_btn'
          >
            Submit
          </button>
          <button
            type='button'
            onClick={onCancel}
            className='outline_btn'
          >
            Cancel
          </button>
        </div>
      </form>
  )
}

export default LoginForm
