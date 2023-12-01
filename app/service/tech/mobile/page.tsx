import Image from 'next/image'

const MobilePage: React.FC = () => (
  <section className='page-section'>
    <h1 className='head-text'>
      Mobile Development
    </h1>
    <Image
      src='/mobile_dev.png'
      alt='mobile_dev'
      width='0'
      height='0'
      sizes='100vw'
      className='w-[400px] h-auto'
      priority={true}
    />
  </section>
)

export default MobilePage
