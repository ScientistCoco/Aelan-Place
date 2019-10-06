import React from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "antd";
import {
  AntTextArea,
  AntInput,
  AntSelect,
  AntDatePicker,
} from "../components/createAntFields";
import { Footer, Image, Layout, Navbar, Modal } from "../components";
import * as styles from "./contact.module.scss";
import * as Yup from "yup";

class Contact extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuToggled: false,
      showBookingDates: false
    }
  }

  toggleMenu = () => {

  }

  handleEnquiryChange = (value: string) => {    
    this.setState({ 
      showBookingDates: value === "Booking enquiry"
    })
  }

  render() {
    const { menuToggled, showBookingDates } = this.state; 
    
    return (
      <Layout className={styles.contact}>
        <Navbar menuToggled={menuToggled} handleToggle={this.toggleMenu}/>
        <>
          <div className={styles.contactIntro_container}>
            <Image filename="hero_2.jpg" imgStyle={{ filter: 'brightness(0.5)' }} style={{ height: '50vh' }}/>
            <div className={styles.contactIntro_text}>
              <h1 className={styles.contactIntro_header}>Contact Us</h1>
              <p className={styles.contactIntro_subtitle}>Fill in the fields below and we'll get back to you.</p>
            </div>
          </div>
          <div className={styles.contactForm_container}>
            <Formik
              initialValues={{ email: '', text: '' }}
              validationSchema={Yup.object().shape({
                email_field: Yup.string()
                  .email("Please enter a valid email")
                  .required("Email is required"),
                name_field: Yup.string()
                  .required("Name is required"),
                enquiry_type_field: Yup.string()
                  .required("Please state the purpose of your enquiry"),
                enquiry_date_field: Yup.mixed("Date required")
                  .required("Date required")
              })}
              onSubmit={( values ) => {
              }}
            >
              <Form className={styles.contactForm_form}>
                <div className={styles.contactForm_field}>
                  <label htmlFor="name_field">Name</label>
                  <Field id="name_field" 
                    size="large" 
                    name="name_field" 
                    type="text" 
                    component={AntInput}
                    hasFeedback
                  />
                </div>
                <div className={styles.contactForm_field}>
                  <label htmlFor="email_field">Email</label>
                  <Field id="email_field" 
                    size="large" 
                    name="email_field" 
                    type="email" 
                    component={AntInput}
                    hasFeedback
                  />
                </div>
                <div className={styles.contactForm_field}>
                  <label htmlFor="enquiry_type_field">Type of enquiry</label>
                  <Field id="enquiry_type_field" 
                    size="large" 
                    name="enquiry_type_field" 
                    component={AntSelect} 
                    selectOptions={["General enquiry", "Booking enquiry"]}
                    onChange={this.handleEnquiryChange}
                    hasFeedback
                  />
                </div>
                {showBookingDates && 
                  <div className={styles.contactForm_field}>
                  <label htmlFor="enquiry_date_field">Enquiry dates</label>
                  <Field id="enquiry_date_field" 
                    size="large" 
                    name="enquiry_date_field" 
                    component={AntDatePicker} 
                    format="DD-MM-YYYY"
                    hasFeedback
                  />
                </div>
                }
                <div className={styles.contactForm_field}>
                  <label htmlFor="message_field">Write message</label>
                  <Field id="message_field" 
                    size="large" 
                    name="message_field" 
                    component={AntTextArea}
                    type="text"
                    autosize={{ minRows: 4, maxRows: 6 }}         
                  />
                </div>
                <Button type="primary" shape="round">Send message</Button>
              </Form>
            </Formik>
          </div>
          <Footer />
        </>
      </Layout>
    )
  }
}

export default Contact;