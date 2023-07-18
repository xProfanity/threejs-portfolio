import { motion } from 'framer-motion'

import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { quotes } from '../constants'

const FeedbackCard = ({index, quote, name, designation, company, image }) => (
  <motion.div variants={fadeIn("", "spring", index * .5, .75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '
  >
    <p className='text-white font-black text-[48px] '>&quot;</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px] '>{quote}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span>{name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>{designation} of {company}</p>
        </div>

        <img 
          src={image}
          alt={`feedback-by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
        <motion.div
          variants={textVariant()}

        >
          <p className={styles.sectionSubText} >Role Models</p>
          <h2 className={styles.sectionHeadText}>Quotes.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7 `}>
        {quotes.map((quote, index) => (
          <FeedbackCard 
            key={quote.name}
            index={index}
            {...quote}
          />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "")