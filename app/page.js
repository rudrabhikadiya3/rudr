import Image from 'next/image'

export default function Home() {
  return (
    <div className='mx-auto w-full sm:w-3/4 lg:w-1/3 border px-4 font-[family-name:var(--font-satoshi)]'>
      <section className='py-20'>
        <div className='border w-[128px] h-[128px] border-[#bdbdbd] rounded-full p-1 border-dashed mb-8'>
          <Image src='/images/me.jpeg' alt='Rudra Bhikadiya' width={200} height={200} className='rounded-full ' />
        </div>
        <h1 className='text-4xl mb-3'>Rudra Bhikadiya</h1>
        <p className='font-medium mb-5'>product designer - designing beautiful UX</p>
        <div className='flex rounded-3xl p-1 px-2 items-center gap-1 border max-w-fit'>
          <div className='h-[5px] w-[5px] bg-[#29aa6c] rounded-full inline-block'></div>
          <div className='inline-block text-sm '>actively looking for new opportunities</div>
        </div>
      </section>
    </div>
  )
}
