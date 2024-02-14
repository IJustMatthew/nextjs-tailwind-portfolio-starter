import z from "zod"

type MessageObjectType = {
  en: { required: string; email: string }
  de: { required: string; email: string }
}

// Default language is English
let lang = "en"
const messageObject: MessageObjectType = {
  en: {
    required: "This field is required to fill!",
    email: "Invalid email format!"
  },
  de: {
    required: "Dieses Feld muss ausgefüllt werden!",
    email: "Ungültiges E-Mail-Format!"
  }
  // Other languages come here
}
const isBrowser = (): boolean => {
  return typeof window !== "undefined"
}

if (isBrowser()) {
  if (
    localStorage.getItem("lang") !== null &&
    localStorage.getItem("lang") !== undefined
  ) {
    lang = JSON.parse(localStorage.getItem("lang") || "en") ?? "en"
  }
}

export const contactSchema = z.object({
  name: z.string().min(1, {
    message: messageObject[lang as keyof typeof messageObject].required
  }),
  email: z.string().email({
    message: messageObject[lang as keyof typeof messageObject].email
  }),
  subject: z.string().min(1, {
    message: messageObject[lang as keyof typeof messageObject].required
  }),
  description: z.string().min(1, {
    message: messageObject[lang as keyof typeof messageObject].required
  })
})

export type User = z.infer<typeof contactSchema>
