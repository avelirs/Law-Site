import { ChevronRight } from "lucide-react";

function Position() {
  return (
    <div className='space-y-8 font-sans'>
      <h1 className='text-5xl font-bold text-center text-blue-900 bg-white p-8 rounded-lg shadow-lg'>
        Позиції
      </h1>

      <div className='bg-white p-8 rounded-lg shadow-lg'>
        <h2 className='text-3xl font-bold mb-6 text-blue-900'>Наші гарантії</h2>
        <div className='space-y-6 text-gray-800'>
          {[
            "Ми гарантуємо, що наші знання, досвід, практика, навички та вміння будуть максимально задіяні для успішного вирішення завдань, пов'язаних із захистом Ваших прав та законних інтересів.",
            "Ми запевняємо, що після укладання угоди ми зосереджуємось на досягненні результату, а не просто на завершенні строку дії договору.",
            "Завжди прагнемо досягнення найкращого можливого результату в кожній конкретній ситуації.",
            "Забезпечуємо високу якість і рівень наших послуг.",
            "Ми працюємо з повною віддачею, не покладаючись на випадковий успіх чи удачу.",
            "Ми гарантуємо, що вся інформація, яка є комерційною таємницею або конфіденційною і стане відома під час співпраці, буде ретельно збережена.",
            "Ми ніколи не беремося за ведення сумнівних чи непристойних справ, але для нас немає безперспективних або програшних справ. З нами у Вас з'явиться більше шансів на перемогу в складних ситуаціях або досягнення кращого результату в наявних умовах.",
            "Ми зазвичай працюємо в спокійній атмосфері, поєднуючи традиційні цінності адвокатської професії з сучасними методами надання послуг.",
          ].map((text, index) => (
            <div key={index} className='flex items-start'>
              <ChevronRight className='w-5 h-5 text-blue-500 mt-1 flex-shrink-0' />
              <p className='ml-2 leading-relaxed text-xl'>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Position;
