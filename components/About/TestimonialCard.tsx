import Image from "next/image"

type Params = {
  image: string
  name: string
  description: string
  title: string
  company: string
}

export default function TestimonialCard({
  image,
  name,
  description,
  title,
  company
}: Params) {
  return (
    <div className='relative flex w-full flex-col items-center overflow-hidden rounded-lg rounded-t-lg border-t-4 border-primary bg-white p-6 shadow dark:bg-cDark'>
      <div>
        <Image
          className='overflow-hidden rounded-full border-b-4 border-primary'
          src={image}
          alt={name}
          width={60}
          height={60}
        />
      </div>

      <div className='mt-3 text-center'>
        <p className='font-bold text-cDark dark:text-cOffWhite'>{name}</p>
        <p className='text-sm font-medium text-primary'>
          {title} {company}
        </p>
      </div>

      <div className='relative mt-3 h-[4px] w-[30px] bg-primary'></div>
      <p className=''>
        <span className='absolute left-2 top-6 align-middle text-4xl leading-[0] text-primary'>
          &ldquo;
        </span>
        <span className='absolute bottom-2 right-2 align-middle text-4xl leading-[0] text-primary'>
          &rdquo;
        </span>
      </p>

      <p className='mt-2 pt-1 text-center text-cDark dark:font-light dark:text-cLightGrey'>
        {description}
      </p>
    </div>
  )
}
