import Button from "@/components/Button/Button"
import { contactSchema } from "@/components/Contact/contactSchema"
/* import toast from "@/components/Toast/ToastBox" */
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useTranslation } from "next-i18next"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import * as z from "zod"

type FormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const { t } = useTranslation()
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
    mode: `onChange`
  })
  const [fomrIsSubmitting, setFormIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState("untouched")

  async function onSubmit(data: FormData) {
    setFormIsSubmitting(true)

    // Try to send the email
    axios
      .post("/api/sendgrid", {
        email: data.email,
        name: data.name,
        subject: data.subject,
        message: data.description
      })
      .then(() => {
        // If success, reset the form and show a success message
        toast(t("contact.form.success.message"), {
          toastId: "successFrame",
          type: "success"
        })
        setFormStatus("success")
        reset()
      })
      .catch(() => {
        // If error, show an error message
        toast(t("contact.form.errors.sendError"), {
          type: "error",
          toastId: "errorFrame"
        })
        setFormStatus("error")
      })
      .finally(() => {
        // Set the form is not submitting either way
        setFormIsSubmitting(false)
      })
  }

  return (
    <form
      action=''
      method='POST'
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-2 justify-center gap-4'
      data-test='contact-form'
    >
      {/* Name */}
      <div className='relative col-span-2 md:col-span-1'>
        <label htmlFor='name' className='hidden'>
          {t("contact.form.labels.name")}
        </label>
        <input
          {...register("name")}
          className='h-10 w-full rounded-full border-b-2 border-transparent px-4 text-cDark caret-primary transition focus:border-primary focus:outline-none dark:text-cOffWhite'
          placeholder={t("contact.form.labels.name")}
          name='name'
          id='name'
          type='text'
          data-test='contact-name'
        />

        {/* Name Error message */}
        {errors?.name && (
          <p
            className='mt-1 pl-4 text-sm text-error'
            data-test='contact-name-error'
          >
            {errors?.name?.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div className='relative col-span-2 md:col-span-1'>
        <label htmlFor='email' className='hidden'>
          {t("contact.form.labels.email")}
        </label>
        <input
          className='h-10 w-full rounded-full border-b-2 border-transparent px-4 text-cDark caret-primary transition focus:border-primary focus:outline-none dark:text-cOffWhite'
          {...register("email")}
          placeholder={t("contact.form.labels.email")}
          name='email'
          type='email'
          id='email'
          data-test='contact-email'
        />

        {/* Email Error message */}
        {errors?.email && (
          <p
            className='mt-1 pl-4 text-sm text-error'
            data-test='contact-email-error'
          >
            {errors?.email?.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className='relative col-span-2'>
        <label htmlFor='subject' className='hidden'>
          {t("contact.form.labels.subject")}
        </label>
        <input
          className='h-10 w-full rounded-full border-b-2 border-transparent px-4 text-cDark caret-primary transition focus:border-primary focus:outline-none dark:text-cOffWhite'
          {...register("subject")}
          placeholder={t("contact.form.labels.subject")}
          name='subject'
          type='text'
          id='subject'
          data-test='contact-subject'
        />

        {/* Subject Error message */}
        {errors?.subject && (
          <p
            className='mt-1 pl-4 text-sm text-error'
            data-test='contact-subject-error'
          >
            {errors?.subject?.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className='relative col-span-2'>
        <label htmlFor='message' className='hidden'>
          {t("contact.form.labels.message")}
        </label>
        <textarea
          {...register("description")}
          className='h-10 min-h-[100px] w-full resize-none rounded-xl border-2 border-transparent px-4 pt-3 text-cDark caret-primary transition focus:border-primary focus:outline-none dark:text-cOffWhite'
          placeholder={t("contact.form.labels.message")}
          name='description'
          id='message'
          data-test='contact-message'
        ></textarea>

        {/* Message Error message */}
        {errors?.description && (
          <p
            className='mt-1 pl-4 text-sm text-error'
            data-test='contact-message-error'
          >
            {errors?.description?.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <div className='relative col-span-2 justify-self-center md:justify-self-start'>
        <p data-test='form-status' className='hidden'>
          {formStatus}
        </p>
        <Button
          text={
            fomrIsSubmitting
              ? t("contact.form.sending")
              : t("contact.form.sendButton")
          }
          icon='forward_to_inbox'
          type='submit'
          testId='contact-submit'
        />
      </div>
    </form>
  )
}
