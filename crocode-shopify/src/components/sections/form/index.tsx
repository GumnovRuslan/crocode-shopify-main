'use client'

import styles from './styles.module.scss'
import { Section, SectionTitle, Input, Button } from "@/components/ui"
import { useState, useEffect } from 'react'

type TProps = {
  className?: string
  title?: string
}

type FormErrors = {
  firstName?: string
  lastName?: string
  companyName?: string
  email?: string
  phone?: string
  budget?: string
  project?: string
  newsletter?: string
}

type TouchedFields = {
  firstName: boolean
  lastName: boolean
  companyName: boolean
  email: boolean
  phone: boolean
  budget: boolean
  project: boolean
  newsletter: boolean
}

const Form = ({ className, title }: TProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    budget: '',
    project: '',
    newsletter: false
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<TouchedFields>({
    firstName: false,
    lastName: false,
    companyName: false,
    email: false,
    phone: false,
    budget: false,
    project: false,
    newsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasValidationErrors, setHasValidationErrors] = useState(false)

  // Валидация при изменении данных или touched полей
  useEffect(() => {
    const newErrors: FormErrors = {}
    let hasErrors = false

    // First Name validation
    if (touched.firstName) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required'
        hasErrors = true
      } else if (formData.firstName.trim().length < 2) {
        newErrors.firstName = 'First name must be at least 2 characters'
        hasErrors = true
      }
    }

    // Last Name validation
    if (touched.lastName) {
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required'
        hasErrors = true
      } else if (formData.lastName.trim().length < 2) {
        newErrors.lastName = 'Last name must be at least 2 characters'
        hasErrors = true
      }
    }

    // Company Name validation
    if (touched.companyName) {
      if (!formData.companyName.trim()) {
        newErrors.companyName = 'Company name is required'
        hasErrors = true
      }
    }

    // Email validation
    if (touched.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
        hasErrors = true
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
        hasErrors = true
      }
    }

    // Phone validation
    if (touched.phone) {
      const phoneRegex = /^\+?[\d\s-()]{10,}$/
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required'
        hasErrors = true
      } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number'
        hasErrors = true
      }
    }

    // Budget validation
    if (touched.budget) {
      if (!formData.budget.trim()) {
        newErrors.budget = 'Budget is required'
        hasErrors = true
      }
    }

    // Project validation
    // if (touched.project) {
    //   if (!formData.project.trim()) {
    //     newErrors.project = 'Project description is required'
    //     hasErrors = true
    //   } else if (formData.project.trim().length < 10) {
    //     newErrors.project = 'Please provide at least 10 characters'
    //     hasErrors = true
    //   }
    // }

    // Newsletter validation (если поле было затронуто)
    if (touched.newsletter) {
      if (!formData.newsletter) {
        newErrors.newsletter = 'You must agree to join the newsletter'
        hasErrors = true
      }
    }

    setErrors(newErrors)
    setHasValidationErrors(hasErrors)
  }, [formData, touched])

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Помечаем поле как "тронутое" при первом изменении
    if (!touched[field]) {
      setTouched(prev => ({ ...prev, [field]: true }))
    }
  }

  const handleCheckboxToggle = () => {
    setFormData(prev => ({ ...prev, newsletter: !prev.newsletter }))
    if (!touched.newsletter) {
      setTouched(prev => ({ ...prev, newsletter: true }))
    }
  }

  const handleBlur = (field: keyof TouchedFields) => {
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Помечаем все поля как "тронутые" при попытке отправки
    setTouched({
      firstName: true,
      lastName: true,
      companyName: true,
      email: true,
      phone: true,
      budget: true,
      project: true,
      newsletter: true
    })

    // Проверяем, есть ли ошибки после пометки всех полей
    const finalErrors: FormErrors = {}
    let hasFinalErrors = false

    if (!formData.firstName.trim()) {
      finalErrors.firstName = 'First name is required'
      hasFinalErrors = true
    }

    if (!formData.lastName.trim()) {
      finalErrors.lastName = 'Last name is required'
      hasFinalErrors = true
    }

    if (!formData.companyName.trim()) {
      finalErrors.companyName = 'Company name is required'
      hasFinalErrors = true
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      finalErrors.email = 'Email is required'
      hasFinalErrors = true
    } else if (!emailRegex.test(formData.email)) {
      finalErrors.email = 'Please enter a valid email address'
      hasFinalErrors = true
    }

    const phoneRegex = /^\+?[\d\s-()]{10,}$/
    if (!formData.phone.trim()) {
      finalErrors.phone = 'Phone number is required'
      hasFinalErrors = true
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      finalErrors.phone = 'Please enter a valid phone number'
      hasFinalErrors = true
    }

    if (!formData.budget.trim()) {
      finalErrors.budget = 'Budget is required'
      hasFinalErrors = true
    }

    // if (!formData.project.trim()) {
    //   finalErrors.project = 'Project description is required'
    //   hasFinalErrors = true
    // } else if (formData.project.trim().length < 10) {
    //   finalErrors.project = 'Please provide at least 10 characters'
    //   hasFinalErrors = true
    // }

    // Newsletter validation при отправке
    if (!formData.newsletter) {
      finalErrors.newsletter = 'You must agree to join the newsletter'
      hasFinalErrors = true
    }

    setErrors(finalErrors)
    
    if (hasFinalErrors) {
      return
    }

    setIsSubmitting(true)
    try {
      console.log('Form data:', formData)
      // Your API call here
      // await submitForm(formData)
      alert('Form submitted successfully!')
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        budget: '',
        project: '',
        newsletter: false
      })
      setTouched({
        firstName: false,
        lastName: false,
        companyName: false,
        email: false,
        phone: false,
        budget: false,
        project: false,
        newsletter: false
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Кнопка активна только когда нет ошибок валидации
  const isSubmitDisabled = hasValidationErrors || isSubmitting

  return (
    <Section className={styles.section}>
      <div className={styles.section__inner}>
        {title && <SectionTitle className={styles.section__title} text={title}/>}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <Input 
            as='input' 
            type='text' 
            value={formData.firstName} 
            errorText={errors.firstName} 
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            onBlur={() => handleBlur('firstName')}
            label='First Name' 
            placeholder="What's your first name?"
          />
          <Input 
            as='input' 
            type='text' 
            value={formData.lastName} 
            errorText={errors.lastName} 
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            onBlur={() => handleBlur('lastName')}
            label='Last Name' 
            placeholder="What's your last name?"
          />
          <Input 
            as='input' 
            type='text' 
            value={formData.companyName} 
            errorText={errors.companyName} 
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            onBlur={() => handleBlur('companyName')}
            label='Company name' 
            placeholder="What's your company name?"
          />
          <Input 
            as='input' 
            type='email' 
            value={formData.email} 
            errorText={errors.email} 
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            label='Email' 
            placeholder="What's your email?"
          />
          <Input 
            as='input' 
            type='tel' 
            value={formData.phone} 
            errorText={errors.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            label='Phone' 
            placeholder="What's your phone?"
          />
          <Input 
            as='input' 
            type='text' 
            value={formData.budget} 
            errorText={errors.budget} 
            onChange={(e) => handleInputChange('budget', e.target.value)}
            onBlur={() => handleBlur('budget')}
            label='Budget' 
            placeholder="What's your budget?"
          />
          <div className={styles.form__input_wrapper}>
            <Input 
              as='textarea' 
              rows={6} 
              value={formData.project} 
              errorText={errors.project} 
              onChange={(e) => handleInputChange('project', e.target.value)}
              onBlur={() => handleBlur('project')}
              label='Tell us about your project' 
              placeholder="Describe your project"
            />
            <Input 
              as='checkbox' 
              isActive={formData.newsletter}
              handlerToggle={handleCheckboxToggle}
              errorText={errors.newsletter}
              label='Join our ecommerce newsletter to receive free ecommerce guides, tips, tricks & more'
            />
          </div>
          
          <div className={styles.form__button_wrapper}>
            <span className={`${styles.form__error} ${isSubmitDisabled ? styles['form__error--active'] : styles['form__error--hidden']}`}>Please complete all required fields</span>
            <Button 
              as='button' 
              type='submit' 
              className={styles.form__button}
              text={isSubmitting ? 'Submitting...' : 'Submit enquiry'} 
              disabled={isSubmitDisabled}
            />
          </div>
        </form>
      </div>
    </Section>
  )
}

export default Form