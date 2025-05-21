import { useTranslation } from '../context/LanguageContext'

export const LoadingState = () => {
  const { t } = useTranslation()

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center py-12'>
      <div className='w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4'></div>
      <p className='text-center text-lg text-gray-600'>{t('loading')}</p>
    </div>
  )
}
