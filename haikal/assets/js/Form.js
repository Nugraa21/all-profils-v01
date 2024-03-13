//---------------------------------------//
//                                       //
//                                       //
//  Java Scripts   @Nugra21.github.io    //
//                                       //
//                                       //
//---------------------------------------//

//------------------------  Form Alert 
const scriptURL = 'https://script.google.com/macros/s/AKfycbz5VPjX6CG4WbXmEdoSb5aQU-Put1IN0pw17xkOA5k8-mgp3mKJM4Arb2GjycGaDlmQ4g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Pesan ada tekah terkirim ( Berhasil di kirim ) ..!!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
//------------------------  Form Alert 
