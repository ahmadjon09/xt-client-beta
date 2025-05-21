import { motion } from 'framer-motion'

export const AboutPage = () => {
  return (
    <div className='mt-[70px] sm:mt-[120px] bg-white min-h-screen text-gray-800 px-4 sm:px-8 py-12'>
      <div className='max-w-5xl mx-auto'>
        <motion.h1
          className='text-3xl sm:text-5xl font-extrabold text-center mb-6 text-purple-700'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Xitoydan Oson Savdo
        </motion.h1>

        <motion.p
          className='text-lg sm:text-xl text-center text-gray-600 mb-10'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Biz Xitoydan sifatli mahsulotlarni olib kelib, butun O‘zbekiston
          bo‘ylab tez va ishonchli yetkazib beramiz.
        </motion.p>

        <div className='grid sm:grid-cols-2 gap-8'>
          <motion.div
            className='p-6 bg-purple-100 rounded-xl shadow-md'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className='text-xl font-bold text-purple-700 mb-2'>
              Bizning Afzalliklarimiz
            </h2>
            <ul className='list-disc list-inside space-y-1 text-gray-700'>
              <li>To‘g‘ridan-to‘g‘ri Xitoydan mahsulotlar</li>
              <li>Barcha viloyatlarga yetkazib berish</li>
              <li>Onlayn buyurtma va kuzatuv tizimi</li>
              <li>Sifat kafolati va ishonchli xizmat</li>
            </ul>
          </motion.div>

          <motion.div
            className='p-6 bg-white border border-purple-200 rounded-xl shadow-md'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className='text-xl font-bold text-purple-700 mb-2'>
              Biz Kimlarga Xizmat Ko‘rsatamiz?
            </h2>
            <p className='text-gray-700'>
              🛍️ Yakka tartibdagi xaridorlardan tortib, 🏪 yirik
              tadbirkorlargacha. Har kim uchun eng yaxshi xizmat — bu bizning
              asosiy tamoyilimiz!
            </p>
          </motion.div>
        </div>

        <motion.div
          className='mt-12 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-xl p-6 text-center shadow-lg'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3 className='text-2xl font-bold mb-2'>
            Sifatli, tez, ishonchli — bularning barchasi bizda!
          </h3>
          <p className='text-sm sm:text-base'>
            Bugunoq buyurtma bering va Xitoydan tovar olishda farqni his qiling!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
