'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  userName: yup.string().required(),
  password: yup.string().required()
})

const LoginForm: React.FC = () => {
  const [error, setError] = useState('')
  const [submitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema)
  })

  const handleInputChange = () => setError('')

  //Request Login
  const onSubmit = async (data: LoginPostData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      if (response.ok) {
        //TO-DO: Login action
        return
      }
      const result = await response.json()
      setError(result.message || 'Unknown error occurred')
    } catch (error) {
      setError('Request Error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const onCancel = () => {
    const confirmCancel = window.confirm('Cancel and go back?')
    if (confirmCancel) {
      router.back()
    }
  }

  return (
    <>
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
          <p>{errors.password?.message}</p>
        </label>

        <div className='flex-center'>
          <button type='submit' disabled={submitting} className='black_btn'>
            Submit
          </button>
          <button type='button' onClick={onCancel} className='outline_btn'>
            Cancel
          </button>
        </div>
      </form>
      <p className='error-text'>{error}</p>
    </>
  )
}

export default LoginForm
