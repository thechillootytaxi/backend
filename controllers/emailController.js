import sendMail from '../utils/sendEmail.js';

export const sendEmail = async (req, res) => {
  try {
    let msg = '';
    for (const prop in req.body) {
      msg = msg +`<strong>${prop}:</strong>  ${req.body[prop]}<br/>`
    }
    await sendMail("thechillootytaxi@gmail.com", "Messege From Website", msg);
    return res.status(201).json({
      success: true,
      messege: 'Email has been sent successfully',
      data: null
    });
  }
  catch (error) {
    return res.status(500).json({ success: false, messege: 'Internal Server error', data: null});
  }
};
