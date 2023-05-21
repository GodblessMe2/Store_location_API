const storeForm = document.getElementById('store-form');

storeForm.addEventListener('submit', async e => {
  e.preventDefault();
  const storeId = document.getElementById('storeId').value;
  const address = document.getElementById('address').value;

  if(storeId === '' || address === '') {
    alert('Please fill in fields')
  }
  const sendBody = {
    storeId, 
    address
  }
  try {
    const res = await fetch('/api/v1/stores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(sendBody)
    });
    if(res.status === 400) {
      throw Error('Store already exists 💥')
    }

    alert('Store added💯');
    window.location.href = '/'
  } catch (err) {
    alert(err);
    return;
  }

})