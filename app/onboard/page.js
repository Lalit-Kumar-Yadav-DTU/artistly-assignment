'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useState } from 'react'

const schema = yup.object({
  name: yup.string().required('Name is required').min(2),
  bio: yup.string().required('Bio is required').min(50),
  categories: yup.array().min(1, 'Select at least one category'),
  languages: yup.array().min(1, 'Select at least one language'),
  feeRange: yup.string().required(),
  location: yup.string().required()
})

const categoryOptions = ['Singer', 'Dancer', 'DJ', 'Speaker']
const languageOptions = ['Hindi', 'English', 'Tamil', 'Punjabi', 'Marathi']
const feeOptions = ['₹10,000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000 - ₹100,000', '₹100,000+']

export default function OnboardPage() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, watch, setValue, getValues, formState: { errors } } = useForm({
    defaultValues: { categories: [], languages: [] },
    resolver: yupResolver(schema)
  })

  const toggleCheck = (field, value) => {
    const current = getValues(field) || []
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value]
    setValue(field, updated)
  }

  const onSubmit = (data) => {
    console.log('Submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div className="bg-white shadow rounded p-6 max-w-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Application Submitted!</h2>
          <p className="text-gray-700 mb-4">Thank you for joining Artistly. We’ll review your profile soon.</p>
          <button onClick={() => setSubmitted(false)} className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Another
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Artist Onboarding Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded shadow">
        {/* Name */}
        <div>
          <label className="font-medium">Name *</label>
          <input {...register('name')} className="input" placeholder="Artist or Group Name" />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>

        {/* Bio */}
        <div>
          <label className="font-medium">Bio *</label>
          <textarea {...register('bio')} rows={4} className="input" placeholder="Tell us about yourself" />
          {errors.bio && <p className="text-red-600 text-sm mt-1">{errors.bio.message}</p>}
        </div>

        {/* Categories */}
        <div>
          <label className="font-medium">Categories *</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {categoryOptions.map((cat) => (
              <label key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={watch('categories')?.includes(cat) || false}
                  onChange={() => toggleCheck('categories', cat)}
                />
                {cat}
              </label>
            ))}
          </div>
          {errors.categories && <p className="text-red-600 text-sm mt-1">{errors.categories.message}</p>}
        </div>

        {/* Languages */}
        <div>
          <label className="font-medium">Languages Spoken *</label>
          <div className="grid grid-cols-2 gap-2 mt-2">
            {languageOptions.map((lang) => (
              <label key={lang} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={watch('languages')?.includes(lang) || false}
                  onChange={() => toggleCheck('languages', lang)}
                />
                {lang}
              </label>
            ))}
          </div>
          {errors.languages && <p className="text-red-600 text-sm mt-1">{errors.languages.message}</p>}
        </div>

        {/* Fee */}
        <div>
          <label className="font-medium">Fee Range *</label>
          <select {...register('feeRange')} className="input">
            <option value="">Select Fee Range</option>
            {feeOptions.map((fee) => (
              <option key={fee} value={fee}>{fee}</option>
            ))}
          </select>
          {errors.feeRange && <p className="text-red-600 text-sm mt-1">{errors.feeRange.message}</p>}
        </div>

        {/* Location */}
        <div>
          <label className="font-medium">Location *</label>
          <input {...register('location')} className="input" placeholder="City, State" />
          {errors.location && <p className="text-red-600 text-sm mt-1">{errors.location.message}</p>}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  )
}
