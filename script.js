const scriptURL = 'https://script.google.com/macros/s/AKfycbykMXUYxSSbOcLH4EiceOEJ3bQcYmzsJVbX6izUIL2aO6YVpyPEj72gC6FduxILe9WuqA/exec'
  const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank you for Subscribing!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })