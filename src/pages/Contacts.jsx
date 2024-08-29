import { useReducer } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  // Here you would typically send the form data to a server
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return { name: "", email: "", message: "" };
    default:
      return state;
  }
};

const ContactForm = () => {
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    message: "",
  });
};

function Contacts() {
  return (
    <div>
      <h1 className='text-5xl font-bold text-center text-blue-900 bg-white p-8 rounded-lg shadow-lg'>
        Контакти
      </h1>
      <div className='flex flex-col md:flex-row gap-8 p-6 bg-white rounded-lg shadow-lg'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-bold mb-4'>Напишіть нам</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <input
              type='text'
              name='name'
              placeholder="Ім'я"
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <input
              type='email'
              name='email'
              placeholder='Електронна пошта'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded'
            />
            <textarea
              name='message'
              placeholder='Ваше повідомлення'
              value={formData.message}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded h-32'
            />
            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'
            >
              ВІДПРАВИТИ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
