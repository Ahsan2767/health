import React from "react";

const ForgetPassword = ({ onLoginClick }) => {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        padding: '50px',
             // White background color
        color: '#000',                 // Black text color
     // Soft shadow for depth
        borderRadius: '8px',           // Rounded corners for a modern look
        textAlign: 'center'            // Center align all content
    }}>
      <h2 style={{ marginBottom: '20px', color: '#000' }}>Reset Password</h2>
      <form style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '15px',
          maxWidth: '300px',  // Limit form width for better readability
          width: '100%',      // Full width form
          textAlign: 'center' // Center align form elements
      }}>
        <label style={{ fontSize: '16px', fontWeight: 'bold', color: '#5D63AA' }}>
          New Password:
        </label>
        <div style={{ position: 'relative' }}>
          <input 
            type="password" 
            placeholder="Enter new password"
            style={{ 
                padding: '10px', 
                fontSize: '16px', 
                border: '1px solid #5D63AA',  // Blue border
                borderRadius: '5px',          // Rounded corners
                backgroundColor: '#fff',      // White background color
                color: '#000',                // Black text color
                paddingLeft: '40px'           // Space for icon
            }} 
          />
        </div>
        <label style={{ fontSize: '16px', fontWeight: 'bold', color: '#5D63AA' }}>
          Confirm New Password:
        </label>
        <div style={{ position: 'relative' }}>
          <input 
            type="password" 
            placeholder="Confirm new password"
            style={{ 
                padding: '10px', 
                fontSize: '16px', 
                border: '1px solid #5D63AA',  // Blue border
                borderRadius: '5px',          // Rounded corners
                backgroundColor: '#fff',      // White background color
                color: '#000',                // Black text color
                paddingLeft: '40px'           // Space for icon
            }} 
          />
        </div>
        <button 
          type="submit" 
          style={{ 
              padding: '12px', 
              fontSize: '16px', 
              backgroundColor: '#5D63AA',   // Blue background color
              color: '#EDF5EB',                // White text color
              border: 'none', 
              borderRadius: '5px',         // Rounded corners
              cursor: 'pointer',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',  // Soft shadow for depth
              marginTop: '20px'             // Space above the button
          }}
        >
          Reset Password
        </button>
      </form>
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#000' }}>
        Remembered your password? 
        <span 
          style={{ 
              color: '#007bff', 
              cursor: 'pointer', 
              textDecoration: 'underline', 
              marginLeft: '5px' 
          }} 
          onClick={onLoginClick}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default ForgetPassword;