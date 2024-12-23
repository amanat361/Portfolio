'use server'

import { redirect } from "next/navigation"

export async function subscribeToNewsletter(formData: FormData) {
  const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
      },
      body: JSON.stringify({
          access_key: process.env.WEB3_FORMS_ACCESS_KEY,
          email: formData.get('email'),
          message: "Someone just subscribed to your newsletter.",
      }),
  });
  const result = await response.json();
  if (result.success) {
    redirect('/thank-you')
  } else {
    throw new Error('Failed to subscribe to newsletter')
  }
}
