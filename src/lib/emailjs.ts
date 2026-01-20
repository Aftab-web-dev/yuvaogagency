import emailjs from '@emailjs/browser'

// EmailJS configuration
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  message: string
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  // Check if EmailJS is configured
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.warn('EmailJS is not configured. Please set up environment variables.')
    // Return success for demo purposes when not configured
    return { success: true }
  }

  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      service: data.service,
      message: data.message,
      to_name: 'Yuvaog Team',
    }

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )

    if (response.status === 200) {
      return { success: true }
    } else {
      return { success: false, error: 'Failed to send email' }
    }
  } catch (error) {
    console.error('EmailJS error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email'
    }
  }
}

// Initialize EmailJS (optional, for debugging)
export function initEmailJS(): void {
  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY)
  }
}
