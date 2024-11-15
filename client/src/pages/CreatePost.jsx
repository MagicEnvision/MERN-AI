import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import { FormField, Loader } from '../components'

const CreatePost = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: ''
  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {

  }
  const handleChange = (e) => {

  }
  const handleSupriseMe = () => {

  }
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328]'>Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Create imaginative and visually
          stunning images developed by DALL-E
        </p>
      </div>
      <form action="" className='mt-16 max-w-3xl' onSubmit={handleSubmit()}>
        <div className='flex flex-col gap-5'>
          <FormField 
          labelName="Your name"
          type="text"
          name="name"
          placeholder="John Doe"
          value={form.name}
          handleChange={handleChange}
          />
             <FormField 
          labelName="Prompt"
          type="text"
          name="prompt"
          placeholder="3D render of a cute tropical fish in an aquarium on a dark blue background"
          value={form.prompt}
          handleChange={handleChange}
          isSupriseMe
          handleSupriseMe = {handleSupriseMe}
          />
        </div>
      </form>
    </section>)
}

export default CreatePost