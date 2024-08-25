// useEmail.js

import { useState } from "react";
import { send } from "emailjs-com";

const useEmail = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        console.log(formData);
        if (!formData.name || !formData.email || !formData.company || !formData.phone || !formData.message) {
            console.log("Please fill all the fields");
            return;
        }

        send(
            "service_36q4vyh",
            "template_hldt8as",
            formData,
            "qKi87D5s3LUgzTv8I"
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setFormData({
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.log("FAILED...", err);
            });
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    };
};

export default useEmail;
