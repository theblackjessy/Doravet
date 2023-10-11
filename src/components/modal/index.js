import React from 'react'
import styles from './modal.module.css'
import CloseIcon from './close'

const Modal = ({ open, toggleModal, children }) => {
  return (
    open && (
      <>
        <section className={styles.modal_wrapper}>

        </section>
        <article className={styles.modal}>
          <p className='flex relative justify-end  m-2 text-[20px] cursor-pointer' onClick={toggleModal}>
            <CloseIcon />
          </p>
          <aside className='mt'>
            {children}
          </aside>
        </article>
      </>
    )
  )
}

export default Modal