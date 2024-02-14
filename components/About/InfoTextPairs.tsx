type Params = {
  title: string
  content: string
  link?: string
}

export default function InfoTextPair({ title, content, link }: Params) {
  return (
    <div className='relative flex gap-2'>
      <p className='text-lg dark:text-cLightGrey'>{title}:</p>
      {link ? (
        <a
          rel='noreferrer'
          href={link}
          target='_blank'
          className='cursor-pointer text-lg font-bold text-primary hover:underline'
        >
          {content}
        </a>
      ) : (
        <p className='text-lg font-bold text-cDark dark:text-cOffWhite'>
          {content}
        </p>
      )}
    </div>
  )
}
