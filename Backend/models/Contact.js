const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        contact: '',
        countryCode: '+213',
        website: '',
        budget: '',
        requirement: '',
        message: ''
      });
    } else {
      alert('Submission failed. Try again.');
    }
  } catch (err) {
    console.error(err);
    alert('Something went wrong.');
  }
};
