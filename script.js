const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById('email').value;
  const githubRepoUrl = document.getElementById('githubRepoUrl').value;

  // Create the fetch request
  fetch('https://7pu263mpcarw3lhazop5ec7u7e0bclzu.lambda-url.us-east-1.on.aws', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      githubRepoUrl: githubRepoUrl
    })
  })
  .then(response => {
    if (response.ok) {
      console.log('Form submitted successfully');
      // Clear the form fields
      form.reset();
    } else {
      console.log('Error:', response.status);
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });
});