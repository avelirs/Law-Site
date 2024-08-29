import { useReducer } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

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

function Contacts() {
  const [formData, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <>
      <h1 className='text-5xl font-bold text-center text-blue-900 bg-white p-8 rounded-lg shadow-lg'>
        Контакти
      </h1>
      <div className='flex flex-col md:flex-row justify-between gap-8 p-8 bg-white rounded-lg shadow-lg'>
        <div className='w-full md:w-7/12'>
          <h2 className='text-2xl font-bold mb-4'>Напишіть нам</h2>
          <form
            onSubmit={handleSubmit}
            className='space-y-4 flex flex-col w-7/12'
          >
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
              className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors w-1/4 h-11'
            >
              ВІДПРАВИТИ
            </button>
          </form>
        </div>
        <div className='w-full md:w-5/12'>
          <h2 className='text-2xl font-bold mb-4'>Зв'яжіться з нами</h2>
          <div className='space-y-8'>
            <div className='flex items-center'>
              <Phone className='w-5 h-5 mr-2' />
              <a
                href='tel:+380505860456'
                className='hover:text-blue-600 hover:underline transition-colors text-lg'
              >
                38 (050) 586 04 56
              </a>
            </div>
            <div className='flex items-center'>
              <Mail className='w-5 h-5 mr-2' />
              <a
                href='mailto:sibilev.maksim@gmail.com'
                className='hover:text-blue-600 hover:underline transition-colors text-lg'
              >
                sibilev.maksim@gmail.com
              </a>
            </div>
            <div className='flex items-start'>
              <MapPin className='w-5 h-5 mr-2 mt-1' />
              <a
                href="https://www.google.com/maps/search/?api=1&query=04119,+Київ,+вул.+Дерев'янська,+8"
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-600 hover:underline transition-colors text-lg'
              >
                04119, м. Київ,
                <br />
                вул. Дерев'янська, буд. 8, кім.22.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
