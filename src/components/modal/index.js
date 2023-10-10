import React from 'react'
import styles from './modal.module.css'

const Modal = ({ open, handleModalClose, children }) => {
  return (
    open && (
      <>
        <section className={styles.modal_wrapper}>

        </section>
        <div className={styles.modal}>
          <p className='text-right p-3 m-2 text-[20px]' onClick={handleModalClose}>x</p>
          {children}
        </div>
      </>
    )
  )
}

export default Modal