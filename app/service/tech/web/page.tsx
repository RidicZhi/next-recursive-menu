import Image from 'next/image'

const WebPage: React.FC = () => (
  <section className='page-section'>
    <h1 className='head-text'>Web Development</h1>
    <Image
      src='/web_dev.png'
      alt='web_dev'
      width='0'
      height='0'
      sizes='100vw'
      className='w-[400px] h-auto'
      priority={true}
    />
  </section>
)

export default WebPage
