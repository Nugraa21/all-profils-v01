//---------------------------------------//
//                                       //
//                                       //
//  Java Scripts   @Nugra21.github.io    //
//                                       //
//                                       //
//---------------------------------------//

//------------------------  Form Alert 
const scriptURL = 'https://script.google.com/macros/s/AKfycbzwoCwgYW1Mcr8m1xIKHxLBjSJndYw3Y4seN--C3gMYTEBkHS3hEDBWx8t6A6YXyfXEHg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Pesan ada tekah terkirim ( Berhasil di kirim ) ..!!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
//------------------------  Form Alert 
