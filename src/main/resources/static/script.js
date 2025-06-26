// Function to fetch and display all patients
function fetchPatients() {
    fetch('/api/patients')
        .then(response => response.json())
        .then(patients => {
            const patientsList = document.getElementById('patientsList');
            patientsList.innerHTML = '';
            patients.forEach(patient => {
                const listItem = document.createElement('li');
                listItem.textContent = `${patient.firstName} ${patient.lastName} (ID: ${patient.id})`;
                patientsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching patients:', error));
}

// Function to add a new patient
function addPatient() {
    const patient = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        contactNumber: document.getElementById('contactNumber').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        emergencyContactName: document.getElementById('emergencyContactName').value,
        emergencyContactPhone: document.getElementById('emergencyContactPhone').value
    };

    fetch('/api/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
    .then(response => {
        if (response.ok) {
            alert('Patient added successfully');
            window.location.href = 'index.html'; // Redirect to main page
        } else {
            alert('Error adding patient');
        }
    })
    .catch(error => console.error('Error adding patient:', error));
}

// Function to view a patient by ID
function viewPatient() {
    const id = document.getElementById('viewPatientId').value;
    fetch(`/api/patients/${id}`)
        .then(response => {
            if (!response.ok) throw new Error('Patient not found');
            return response.json();
        })
        .then(patient => {
            const patientDetails = document.getElementById('patientDetails');
            patientDetails.innerHTML = `
                <p><strong>First Name:</strong> ${patient.firstName}</p>
                <p><strong>Last Name:</strong> ${patient.lastName}</p>
                <p><strong>Date of Birth:</strong> ${patient.dob}</p>
                <p><strong>Gender:</strong> ${patient.gender}</p>
                <p><strong>Contact Number:</strong> ${patient.contactNumber}</p>
                <p><strong>Email:</strong> ${patient.email}</p>
                <p><strong>Address:</strong> ${patient.address}</p>
                <p><strong>Emergency Contact Name:</strong> ${patient.emergencyContactName}</p>
                <p><strong>Emergency Contact Phone:</strong> ${patient.emergencyContactPhone}</p>
            `;
        })
        .catch(error => {
            alert(error.message);
            console.error('Error viewing patient:', error);
        });
}

// Function to update a patient
function updatePatient() {
    const id = document.getElementById('updatePatientId').value;
    const patient = {
        firstName: document.getElementById('updateFirstName').value,
        lastName: document.getElementById('updateLastName').value,
        dob: document.getElementById('updateDob').value,
        gender: document.getElementById('updateGender').value,
        contactNumber: document.getElementById('updateContactNumber').value,
        email: document.getElementById('updateEmail').value,
        address: document.getElementById('updateAddress').value,
        emergencyContactName: document.getElementById('updateEmergencyContactName').value,
        emergencyContactPhone: document.getElementById('updateEmergencyContactPhone').value
    };

    fetch(`/api/patients/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
    .then(response => {
        if (response.ok) {
            alert('Patient updated successfully');
            window.location.href = 'index.html'; // Redirect to main page
        } else {
            alert('Error updating patient');
        }
    })
    .catch(error => console.error('Error updating patient:', error));
}

// Function to delete a patient
function deletePatient() {
    const id = document.getElementById('deletePatientId').value;

    fetch(`/api/patients/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Patient deleted successfully');
            window.location.href = 'index.html'; // Redirect to main page
        } else {
            alert('Error deleting patient');
        }
    })
    .catch(error => console.error('Error deleting patient:', error));
}

// Fetch patients on page load for the main page
window.onload = fetchPatients;

