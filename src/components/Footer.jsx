import { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log("Email submitted successfully");
        setEmail(""); // Clear the email input
      } else {
        console.error("Failed to submit email");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  return (
    <footer className='bg-gray-900 text-white py-8 px-8 flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <p className='text-sm'>
          Напишіть свою електронну пошту і ми зв’яжемось з вами
        </p>
        <form
          onSubmit={handleSubmit}
          className='flex items-center mb-4 md:mb-0'
        >
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-white text-gray-900 px-3 py-2 rounded-l-md focus:outline-none'
            required
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Зв’язатися
          </button>
        </form>
      </div>
      <div className='flex space-x-4 gap-3'>
        {" "}
        <a
          href='https://instagram.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-300'
        >
          <FaInstagram className='text-2xl' />
        </a>
        <a
          href='https://telegram.org'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-300'
        >
          <IoSend className='text-2xl' />
        </a>
        <a
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-gray-300'
        >
          <FaFacebook className='text-2xl' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
