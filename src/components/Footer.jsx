import { useState } from "react";

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
    <footer className='bg-gray-900 text-white py-12 flex l items-center'>
      <div>
        <p>Напишіть свою електронну пошту і ми зв’яжемось з вами</p>
        <form onSubmit={handleSubmit} action=''>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
            className='bg-gray-800 text-white px-4 py-2 rounded-md'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Зв’язатися
          </button>
        </form>
      </div>
      <div className='flex space-x-4'></div>
    </footer>
  );
}

export default Footer;
