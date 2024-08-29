import { Users, FileText, Car, Briefcase, Mail } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "ГОСПОДАРСЬКЕ ПРАВО ТА ПРОЦЕС",
    color: "text-blue-500",
  },
  {
    icon: FileText,
    title: "АДМІНІСТРАТИВНЕ ПРАВО ТА ПРОЦЕС",
    color: "text-green-500",
  },
  { icon: Car, title: "ЦИВІЛЬНЕ ПРАВО ТА ПРОЦЕС", color: "text-cyan-500" },
  {
    icon: Users, // Changed from Family to Users
    title: "СІМЕЙНЕ ТА СПАДКОВЕ ПРАВО",
    color: "text-purple-500",
  },
  { icon: Briefcase, title: "ЗАХИСТ БІЗНЕСУ", color: "text-orange-500" },
  { icon: Mail, title: "КРИМІНАЛЬНЕ ПРАВО ТА ПРОЦЕС", color: "text-red-500" },
];

const ServiceCard = ({ icon: Icon, title, color }) => (
  <div className='p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-50 flex flex-col items-center'>
    <Icon className={`w-16 h-16 ${color} mb-6`} />
    <h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
  </div>
);

function Services() {
  return (
    <div className='min-h-screen flex flex-col'>
      <h1 className='text-5xl font-bold text-center text-blue-900 bg-white p-8 rounded-lg shadow-lg mb-12'>
        Послуги
      </h1>
      <div className='container mx-auto px-4 my-14'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
