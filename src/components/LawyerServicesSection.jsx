import {
  Briefcase,
  Users,
  Building,
  FileText,
  UserPlus,
  Shield,
  MapPin,
} from "lucide-react";

const services = [
  { icon: Users, text: "Адвокат у господарських справах" },
  { icon: Building, text: "Адвокат в адміністративних справах" },
  { icon: FileText, text: "Адвокат у цивільних справах" },
  { icon: UserPlus, text: "Адвокат у сімейних спорах" },
  { icon: Shield, text: "Адвокат із захисту бізнесу" },
  { icon: MapPin, text: "Адвокат у кримінальних справах" },
];

const ServiceIcon = ({ Icon }) => (
  <div className='bg-gray-200 p-4 rounded-full'>
    <Icon className='w-8 h-8 text-gray-600' />
  </div>
);

const ServiceItem = ({ Icon, text }) => (
  <div className='flex flex-col items-center text-center'>
    <ServiceIcon Icon={Icon} />
    <p className='mt-2 text-sm'>{text}</p>
  </div>
);

const LawyerServicesSection = () => {
  return (
    <div className='container mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-14'>
        <div className='flex flex-col items-center text-center'>
          <Briefcase className='w-12 h-12 text-blue-500 mb-4' />
          <div>
            <h2 className='text-xl font-semibold'>25+ років практичного</h2>
            <p>досвіду та успішної адвокатської практики</p>
          </div>
        </div>
        <div className='flex flex-col items-center text-center'>
          <Users className='w-12 h-12 text-blue-500 mb-4' />
          <div>
            <h2 className='text-xl font-semibold'>Правова допомога адвоката</h2>
            <p>в Києві</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3  gap-y-14'>
        {services.map((service, index) => (
          <ServiceItem key={index} Icon={service.icon} text={service.text} />
        ))}
      </div>
    </div>
  );
};

export default LawyerServicesSection;
