// write your custom hook here to control your checkout form
import React, { useState } from 'react'


const useForm = (initialVales, initialSuccessMessage) =>  {
    const [values, setValues] = useState(initialVales);
    const [showSuccessMessage, setShowSuccessMessage] = useState(initialSuccessMessage);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value
         });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessMessage(true);
      };    

    return ([values, handleChanges, handleSubmit, showSuccessMessage])
}
export default  useForm