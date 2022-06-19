import React, { useState } from 'react'
import styles from './style.module.css'
import { Formik } from 'formik'

function Modal({ open, onClose }) {
    if (!open) return null;
    return (
        <div className={styles.overlay} >
            <div className={styles.modalContainer}>
                <div className={styles.closeContainer}>
                    <button className={styles.closeButton} onClick={onClose}>x</button>
                </div>
                <Formik
                    initialValues={{ title: '', number: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.title) {
                            errors.title = 'Required';
                        } else {
                            errors.title = 'Invalid title';
                        }
                        return errors;
                    }}

                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,

                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {errors.title && touched.title && errors.title}
                            <input
                                type="text"
                                name="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                            />
                            {errors.number && touched.number && errors.number}
                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Modal;