import Image from 'next/image'

const AboutPage: React.FC = () => (
  <section className='page-section'>
    <Image
      src='/about.png'
      alt='about'
      width='0'
      height='0'
      sizes='100vw'
      className='w-[400px] h-auto'
    />
  </section>
)

export default AboutPage
