type Params = {
  quantity: string
  text1: string
  text2?: string
}

export default function InfoCard({ quantity, text1, text2 }: Params) {
  return (
    <div className='relative flex w-full flex-col rounded-lg border-2 border-cLightGrey bg-white p-4 shadow dark:bg-cDark md:p-6'>
      <div>
        <p className='flex justify-start align-top text-4xl font-black text-primary'>
          {quantity}
          <span className='ml-1 text-3xl font-medium'>+</span>
        </p>
      </div>
      <div className='-mt-1 flex flex-wrap gap-2 lg:flex-nowrap'>
        <div className='mt-3 h-[2px] w-[30px] bg-primary'></div>
        <div className='ml-1'>
          <p className='text-lg font-black uppercase leading-[25px] text-cDark dark:text-cOffWhite'>
            {text1}
          </p>
          <p className='text-lg uppercase leading-[25px] text-cDark dark:text-cOffWhite'>
            {text2}
          </p>
        </div>
      </div>
    </div>
  )
}
