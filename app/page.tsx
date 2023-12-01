import Image from 'next/image'

const HomePage: React.FC = () => (
  <section className='page-section'>
    <Image
      src='/hi.png'
      alt='hi'
      width='0'
      height='0'
      sizes='100vw'
      className='w-[600px] h-auto'
      priority={true}
    />
  </section>
)

export default HomePage
