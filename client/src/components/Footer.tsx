const Footer = () => {
  return (
    <div
      className='bg-purple-600
 p-4 text-center font-light text-white'
    >
      <p>
        &copy; {new Date().getFullYear()}
        <a
          className='ml-1 underline underline-offset-2'
          href='https://kunwar-aditya-portfolio.vercel.app/'
          rel='noopener'
          target='_blank'
        >
          Kunwar Aditya
        </a>
        . All rights reserved.
      </p>
    </div>
  );
};
export default Footer;
