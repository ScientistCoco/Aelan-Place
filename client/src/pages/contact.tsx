import React from "react";
import { Formik, Form, Field } from "formik";
import { Button, message } from "antd";
import { format, isFuture } from 'date-fns';
import {
  AntTextArea,
  AntInput,
  AntSelect,
  AntRangePicker,
} from "../components/createAntFields";
import { Footer, Image, Layout, Navbar, Modal, SEO, Loading } from "../components";
import { post } from "../helpers";
import CMS from "../../content/contactUsCMS.json";
import * as styles from "./contact.module.scss";
import * as Yup from "yup";

interface IContactFormValues {
  email_field: string;
  name_field: string;
  enquiry_type_field: string;
  enquiry_date_field?: Array<any>;
  message_field: string;
}

enum ENQUIRY_TYPES {
  GENERAL_ENQUIRY = "General enquiry",
  BOOKING_ENQUIRY = "Booking enquiry"
}

message.config({
  top: 50,
  maxCount: 2
});

class Contact extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      menuToggled: false,
      showBookingDates: false,
      loading: false,
    }
  }

  toggleMenu = () => {
    const { menuToggled } = this.state;

    this.setState({
      menuToggled: !menuToggled
    })
  }

  handleEnquiryChange = (value: string) => {    
    this.setState({ 
      showBookingDates: value === "Booking enquiry"
    })
  }
  
  handleSubmit = async (values: IContactFormValues, resetForm: any) => {    
    message.destroy();
    
    this.setState({ loading: true });

    const enquiryDates = values.enquiry_date_field && values.enquiry_date_field.length ? 
      `<b>Start date:</b> ${format(values.enquiry_date_field[0].toDate(), "dd-MM-yyyy")}
        <br/>
        <b>End date: </b> ${format(values.enquiry_date_field[1].toDate(), "dd-MM-yyyy")}
        <br/>
        <br/>
      `
      :
      "";
    
    const messageTemplate = `
      <b>Name: </b><p>${values.name_field}</p>
      <br/>
      <b>Email: </b><p>${values.email_field}</p>
      <br/>
      <b>Enquiry Type: </b><p>${values.enquiry_type_field}</p>
      <br/>
      ${enquiryDates}    
      <b>Message: </b><p>${values.message_field}</p>
    `

    const sendEmailRes = await post("/api/email", { message: messageTemplate }, {});

    this.setState({ loading: false });

    if (sendEmailRes.status === 200) {
      this.handleSuccessfulSend(resetForm);
    } else {
      this.handleFailedSend();
    }
  }

  handleSuccessfulSend = (resetForm: any) => {
    message.success('Succesfully sent', 0);
    resetForm();
  }

  handleFailedSend = () => {
    message.error('Failed to send', 0);
  }

  componentWillUnmount() {
    message.destroy();
  }

  render() {
    const { loading, menuToggled, showBookingDates } = this.state; 
    
    return (
      <Layout className={styles.contact}>
        <Loading loading={loading} message="Sending..." />
        <SEO title="Contact" />
        <Navbar menuToggled={menuToggled} handleToggle={this.toggleMenu}/>
        <Modal showModal={menuToggled} />
        {!menuToggled && 
        <>
          <div className={styles.contactIntro_container}>
            <Image filename="aelan_4.jpg" imgStyle={{ filter: 'brightness(0.5)' }} style={{ height: '50vh' }}/>
            <div className={styles.contactIntro_text}>
              <h1 className={styles.contactIntro_header}>{CMS.title}</h1>
              <p className={styles.contactIntro_subtitle}>{CMS.subtitle}</p>
            </div>
          </div>
          <div className={styles.contactForm_container}>
            <Formik
              initialValues={{ 
                email_field: '',
                name_field: '',
                enquiry_type_field: '',
                enquiry_date_field: [],
                message_field: '',
              }}
              validationSchema={Yup.object().shape({
                email_field: Yup.string()
                  .email("Please enter a valid email")
                  .required("Email is required"),
                name_field: Yup.string()
                  .required("Name is required"),
                enquiry_type_field: Yup.string()
                  .required("Please state the purpose of your enquiry"),
                enquiry_date_field: Yup.mixed().when('enquiry_type_field', {
                  is: ENQUIRY_TYPES.BOOKING_ENQUIRY,
                  then: Yup.mixed()
                    .required("Date required")
                    .test("Is-present-date", 
                      "Enquiry dates cannot be in the past",
                      (value: any) => isFuture(value[0].toDate())
                    )
                }),
                message_field: Yup.string()
                  .required("Message is required")
              })}
              onSubmit={( values: IContactFormValues, { resetForm } ) => {
                message.destroy();
                this.handleSubmit(values, resetForm)
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
                    selectOptions={[ENQUIRY_TYPES.GENERAL_ENQUIRY, ENQUIRY_TYPES.BOOKING_ENQUIRY]}
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
                    component={AntRangePicker} 
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
                <Button type="primary" shape="round" htmlType="submit">Send message</Button>
              </Form>                             
            </Formik>
            <div className={styles.contactForm_details}>
              <p className={styles.contactForm_details_label}>ADDRESS</p>
              <p className={styles.contactForm_details_text}>{CMS.address}</p>
              <p className={styles.contactForm_details_label}>EMAIL</p>
              <p className={styles.contactForm_details_text}>{CMS.email}</p>
            </div>
          </div>
          <Footer />
        </>
        }
      </Layout>
    )
  }
}

export default Contact;