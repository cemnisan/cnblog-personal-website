import React,{useState} from "react";
import {useRouter} from 'next/router'
import emailjs from 'emailjs-com';
import styles from './Contact.module.css'
import { formData } from "../../../../data/FormData";

function Contact() {
    const [contact,setContact] = useState({user_name:"",user_lastName:"",user_city:"",user_email:"",message:""})
    const router = useRouter();
    function onChange(e){
        setContact({...contact,[e.target.name]:e.target.value});
    }

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm('service_6md8sco','template_lkc39me',e.target,'user_bm3DhejnzHNMsgiZuI9kR')
            .then(() =>{
                alert("Mesajınız başarıyla gönderildi, size ek kısa zamanda dönüş yapacağım! ^_^");
                router.push('/');
            },(err)=>{
                alert("Hmm, bir şeyler ters gitti!");
            });
    }

  const itemForm =
    formData &&
    formData.map((item, index) => (
      <React.Fragment key={index}>
        {item.id <= 4 ? (
          <div className={`col-md-6 form-group mt-3 mb-4 text-center ${styles.formGroup}`}>
            <label className={`mb-3 ${styles.formLabel}`} htmlFor={item.for}>{item.placeHolder}</label>
            <input
              type={item.type}
              name={item.name}
              onChange={onChange}
              className="form-control"
              id={item.idForm}
              placeholder={item.placeHolder}
            />
          </div>
        ) : (
          <div className={`col-md-8 form-group text-center ${styles.formMessage} mt-3`}>
            <label className={`mb-3 ${styles.formLabel}`} htmlFor={item.for}>Message</label>
            <textarea
              className="form-control"
              onChange={onChange}
              name={item.name}
              id={item.idForm}
              rows="5"
            ></textarea>
          </div>
        )}
      </React.Fragment>
    ));
  return (
    <div className="container">
      <div className="formTitle">
        <h4 className="text-center mt-5">Contact</h4>
      </div>
      <form onSubmit={sendEmail}>
        <div className="row">
            {itemForm}
        </div>
        <div className="formButton d-flex justify-content-center">
          <button className="btn btn-dark mt-3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
