import { Button, Grid, TextField } from '@material-ui/core';
import './App.css';
import './index.css';
import './LeadGenerationPopup.css';
import closeIcon from './images/icons8-close-128.png';
import { useState } from 'react';
/* import nodemailer from 'nodemailer'; */

function LeadGenerationPopup({ showHide }) {
  /* const sendEmail = useEmailSender(); */
  const [isError, setIsError] = useState(false);

  let formObject = {};
  async function submitRegistrationForm(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    formObject = Object.fromEntries(formData);
    /* console.log('formObject', JSON.stringify(formObject)); */
    if (Object.keys(formObject).length > 0) {
      if (
        formObject.custName &&
        formObject.custName !== '' &&
        formObject.custMobile &&
        formObject.custMobile !== '' &&
        formObject.custMobile.length === 10 &&
        formObject.custVehicleNo &&
        formObject.custVehicleNo !== '' &&
        formObject.custLocation &&
        formObject.custLocation !== '' &&
        formObject.custEmail &&
        formObject.custEmail !== ''
      ) {
        /* sendEmail(formObject); */
        setIsError(false);
      } else {
        setIsError(true);
      }
    }
  }

  /* function useEmailSender() {
    const sendEmail = async (body) => {
      const { custEmail } = body;
      const [email, setEmail] = useState(custEmail);
      const [subject, setSubject] = useState('New Lead');
      const [message, setMessage] = useState('Hi, New lead is on the way');

      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'shantanuambadkar@gmail.com',
            pass: '',
          },
        });

        const mailOptions = {
          from: 'shantanuambadkar@gmail.com',
          to: email,
          subject: subject,
          text: message,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Error sending email:', error);
        console.log('Failed to send email. Please try again later.');
      }
    };

    // Return the function that sends email
    return sendEmail;
  } */

  return (
    <div className="popup">
      <div className="popup-content">
        <form id="registrationForm" onSubmit={submitRegistrationForm}>
          <Grid container>
            <Grid className='center-text' item xs={9}>
              <h3>Eccel Recycling Private Limited (ERPL)</h3>
            </Grid>
            {/* <Grid item xs={3}></Grid> */}
            <Grid item xs={2}></Grid>
            <Grid item xs={1} className="closeBtnDiv">
              <img
                src={closeIcon}
                alt="Close Icon"
                className="closeIcon close-button"
                onClick={showHide}
              />
            </Grid>
          </Grid>
          <Grid container className="grid-mar">
          <Grid item xs={9}>
                  <TextField
                    required
                    label="Name"
                    inputProps={{ id: 'custName', name: 'custName' }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    label="Email"
                    inputProps={{ id: 'custEmail', name: 'custEmail' }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    type="number"
                    label="Mobile"
                    inputProps={{ id: 'custMobile', name: 'custMobile' }}
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 10);
                    }}
                  />
              </Grid>
              <Grid item xs={9}>
                  <TextField
                    required
                    label="Vehicle Number"
                    inputProps={{ id: 'custVehicleNo', name: 'custVehicleNo' }}
                  />
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    required
                    label="Location"
                    inputProps={{ id: 'custLocation', name: 'custLocation' }}
                  />
                </Grid>
              {isError && (
                <Grid item xs={9} id="error-grid" className="danger-text">
                  Your details are invalid
                </Grid>
              )}
          </Grid>
          <Grid container>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={7}>
              <Button type="Submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default LeadGenerationPopup;
