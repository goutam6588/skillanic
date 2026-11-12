'use client'

import { useState, useRef, useEffect } from 'react'
import {
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from 'lucide-react'

const COURSES = [
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'Data Science',
  'Machine Learning',
  'Cloud Computing',
]

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    course: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const firstFieldRef = useRef(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      firstFieldRef.current?.focus({
        preventScroll: true,
      })
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  /* ================= VALIDATION ================= */

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        return value.trim().length < 2
          ? 'Please enter your full name'
          : ''

      case 'phoneNumber':
        return !/^\d{10}$/.test(value)
          ? 'Enter a valid 10-digit phone number'
          : ''

      case 'email':
        return !EMAIL_REGEX.test(value)
          ? 'Enter a valid email address'
          : ''

      case 'course':
        return !value
          ? 'Please select a course'
          : ''

      case 'message':
        return value.trim().length < 5
          ? 'Tell us a little more (min 5 characters)'
          : ''

      default:
        return ''
    }
  }

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    let { name, value } = e.target

    if (name === 'phoneNumber') {
      value = value.replace(/\D/g, '').slice(0, 10)
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }))
    }
  }

  /* ================= HANDLE BLUR ================= */

  const handleBlur = (e) => {
    const { name, value } = e.target

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }))

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }))
  }

  /* ================= VALIDATE ALL ================= */

  const validateAll = () => {
    const newErrors = {}

    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key])

      if (err) {
        newErrors[key] = err
      }
    })

    setErrors(newErrors)

    setTouched({
      fullName: true,
      phoneNumber: true,
      email: true,
      course: true,
      message: true,
    })

    return Object.keys(newErrors).length === 0
  }

  /* ================= GOOGLE SCRIPT ================= */ //rogerthat

  const SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbw5aEg9ygoRH8vEno8aKeOj15_72IAkaYmMZkcgAMHEm2x1hQbJGrxbf-2wf1orHUqH8g/exec'

  /* ================= SUBMIT ================= */

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateAll()) {
      const firstErrorField = document.querySelector(
        '[data-invalid="true"]'
      )

      firstErrorField?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })

      return
    }

    setIsSubmitting(true)

    try {
      const params = new URLSearchParams({
        name: formData.fullName,
        phone: formData.phoneNumber,
        email: formData.email,
        course: formData.course,
        message: formData.message,
      })

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      })

      const result = await response.json()

      if (!result.success) {
        throw new Error(
          result.error || 'Submission failed'
        )
      }

      setSubmitStatus('success')

      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        course: '',
        message: '',
      })

      setTouched({})
      setErrors({})
    } catch (error) {
      console.error('Error submitting form:', error)

      setSubmitStatus('error')

      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ================= FIELD CLASS ================= */

  const fieldClass = (name) => `
    w-full
    rounded-md
    border
    bg-white
    px-4
    py-2.5
    text-sm
    text-gray-800
    placeholder:text-gray-400
    shadow-xs
    transition-all
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-blue-900/20
    focus:border-[#003366]

    ${
      touched[name] && errors[name]
        ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
        : 'border-gray-300 hover:border-gray-400'
    }
  `

  /* ================= SUCCESS ================= */

  if (submitStatus === 'success') {
    return (
      <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">

        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2
            className="h-6 w-6 text-green-600"
            strokeWidth={1.75}
          />
        </div>

        <h2 className="text-lg font-semibold text-gray-900">
          Thank you!
        </h2>

        <p className="mt-1.5 text-xs sm:text-sm text-gray-600">
          Your enquiry has been submitted.
          Our team will reach out to you shortly.
        </p>

      </div>
    )
  }

  /* ================= FORM ================= */

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-3.5 text-left"
    >

      {/* ================= FULL NAME ================= */}

      <div>
        <label
          className="sr-only"
          htmlFor="fullName"
        >
          Full Name
        </label>

        <input
          ref={firstFieldRef}
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          data-invalid={
            touched.fullName && !!errors.fullName
          }
          aria-invalid={
            touched.fullName && !!errors.fullName
          }
          className={fieldClass('fullName')}
        />

        {touched.fullName && errors.fullName && (
          <p className="mt-1 pl-1 text-[11px] text-red-500">
            {errors.fullName}
          </p>
        )}
      </div>

      {/* ================= PHONE ================= */}

      <div>
        <label
          className="sr-only"
          htmlFor="phoneNumber"
        >
          Phone Number
        </label>

        <input
          id="phoneNumber"
          type="tel"
          inputMode="numeric"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          data-invalid={
            touched.phoneNumber &&
            !!errors.phoneNumber
          }
          aria-invalid={
            touched.phoneNumber &&
            !!errors.phoneNumber
          }
          className={fieldClass('phoneNumber')}
        />

        {touched.phoneNumber &&
          errors.phoneNumber && (
            <p className="mt-1 pl-1 text-[11px] text-red-500">
              {errors.phoneNumber}
            </p>
          )}
      </div>

      {/* ================= EMAIL ================= */}

      <div>
        <label
          className="sr-only"
          htmlFor="email"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          data-invalid={
            touched.email && !!errors.email
          }
          aria-invalid={
            touched.email && !!errors.email
          }
          className={fieldClass('email')}
        />

        {touched.email && errors.email && (
          <p className="mt-1 pl-1 text-[11px] text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      {/* ================= COURSE ================= */}

      <div>
        <label
          className="sr-only"
          htmlFor="course"
        >
          Select Course
        </label>

        <div className="relative">

          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            onBlur={handleBlur}
            data-invalid={
              touched.course && !!errors.course
            }
            aria-invalid={
              touched.course && !!errors.course
            }
            className={`
              ${fieldClass('course')}
              appearance-none
              cursor-pointer
              pr-10
              ${
                !formData.course
                  ? 'text-gray-400'
                  : 'text-gray-800'
              }
            `}
          >

            <option
              value=""
              disabled
              hidden
            >
              Select Course
            </option>

            {COURSES.map((course) => (
              <option
                key={course}
                value={course}
                className="text-gray-800"
              >
                {course}
              </option>
            ))}

          </select>

          <ChevronDown
            size={18}
            className="
              absolute
              right-3.5
              top-1/2
              -translate-y-1/2
              text-gray-500
              pointer-events-none
            "
          />

        </div>

        {touched.course && errors.course && (
          <p className="mt-1 pl-1 text-[11px] text-red-500">
            {errors.course}
          </p>
        )}
      </div>

      {/* ================= MESSAGE ================= */}

      <div>
        <label
          className="sr-only"
          htmlFor="message"
        >
          Your Message
        </label>

        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          data-invalid={
            touched.message && !!errors.message
          }
          aria-invalid={
            touched.message && !!errors.message
          }
          rows={3}
          maxLength={500}
          className={`
            ${fieldClass('message')}
            resize-none
          `}
        />

        <div className="mt-0.5 flex items-center justify-between pl-1 pr-1">

          {touched.message && errors.message ? (
            <p className="text-[11px] text-red-500">
              {errors.message}
            </p>
          ) : (
            <span />
          )}

          <span className="text-[11px] text-gray-400">
            {formData.message.length}/500
          </span>

        </div>
      </div>

      {/* ================= SUBMIT ================= */}

      <div className="pt-1">

        <button
          type="submit"
          disabled={isSubmitting}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            px-6
            py-3
            rounded-xs
            sm:rounded-sm
            bg-[#ED1C24]
            hover:bg-[#c91219]
            text-white
            font-bold
            text-sm
            tracking-wide
            uppercase
            shadow-md
            hover:shadow-lg
            transition-all
            duration-200
            disabled:opacity-70
            disabled:cursor-not-allowed
            active:scale-95
            cursor-pointer
          "
        >

          {isSubmitting ? (
            <>
              <Loader2
                size={18}
                className="animate-spin"
              />
              SUBMITTING...
            </>
          ) : (
            <>
              SUBMIT ENQUIRY
              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
              />
            </>
          )}

        </button>

      </div>

      {/* ================= ERROR ================= */}

      {submitStatus === 'error' && (
        <div
          className="
            mt-3
            rounded-md
            border
            border-red-200
            bg-red-50
            p-3
            text-xs
            text-red-800
          "
        >
          ✗ Error submitting form. Please try again.
        </div>
      )}

    </form>
  )
}