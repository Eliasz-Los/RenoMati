import axios from 'axios'
import type {ContactFormData} from "@/models/ContactFormData.ts";
// TODO fix email server
export async function sendContactEmail(data: ContactFormData) {
  try {
    await axios.post('/api/send-contact-email', data)
    return true
  } catch (err) {
    console.error('Email sending failed', err)
    throw err
  }
}
