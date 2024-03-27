import { Button, Grid, TextField } from '@material-ui/core';
import './App.css';
import './LeadGenerationPopup.css';
import formImage from './images/LeadGenForm.png';
import closeIcon from './images/icons8-close-128.png';
import { useState } from 'react';
import axios from 'axios';

function LeadGenerationPopup({ showHide }) {
  const [isError, setIsError] = useState(false);

  let formObject = {};
  function submitRegistrationForm(e) {
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
        formObject.custLocation !== ''
      ) {
        setIsError(false);
        sendEmail(JSON.stringify(formObject));
      } else {
        setIsError(true);
      }
    }
  }

  async function sendEmail(body) {
    console.log('body', body);
    try {
      await axios.post('/send-email', formObject);
      alert('Email sent successfully');
      /* setFormData({ name: '', email: '', message: '' }); */
    } catch (error) {
      console.error('Error sending email: ', error);
      alert('Failed to send email');
    }
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <form id="registrationForm" onSubmit={submitRegistrationForm}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} className="closeBtnDiv">
              <img
                src={closeIcon}
                alt="Close Icon"
                className="closeIcon close-button"
                onClick={showHide}
              />
            </Grid>
          </Grid>
          <Grid container className="grid-mar">
            <Grid item xs={5}>
              <img
                src={formImage}
                className="form-image"
                alt="Casual man pointing to a form"
              />
            </Grid>
            <Grid item xs={7}>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    required
                    label="Name"
                    inputProps={{ id: 'custName', name: 'custName' }}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    label="Email"
                    inputProps={{ id: 'custEmail', name: 'custEmail' }}
                  />
                </Grid>
              </Grid>
              <Grid container>
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
              </Grid>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    required
                    label="Vehicle Number"
                    inputProps={{ id: 'custVehicleNo', name: 'custVehicleNo' }}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9}>
                  <TextField
                    required
                    label="Location"
                    inputProps={{ id: 'custLocation', name: 'custLocation' }}
                  />
                </Grid>
              </Grid>
              {isError && (
                <Grid item xs={9} id="error-grid" className="danger-text">
                  Your details are invalid
                </Grid>
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Button type="Submit">Submit</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default LeadGenerationPopup;
