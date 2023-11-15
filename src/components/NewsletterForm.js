import { useState, useEffect } from 'react';
import Script from 'next/script';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  useEffect(() => {
    const checkMailerLiteScript = () => {
      // Ensure that the MailerLite script is loaded
      if (window.ml) {
        // Now you can use the 'ml' object
        console.log('MailerLite script loaded successfully');
      } else {
        console.error('MailerLite script not loaded. Retrying in 500ms.');
        setTimeout(checkMailerLiteScript, 500);
      }
    };

    // Initial check
    checkMailerLiteScript();
  }, []); // The empty dependency array ensures this effect runs only once

  const handleScriptLoad = () => {
    // This function will be called once the script has successfully loaded
    console.log('MailerLite script has been loaded');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure that the MailerLite script is loaded before using it
    if (window.ml) {
      try {
        // Use the 'ml' object to trigger the 'subscribed' event
        window.ml('events', 'trigger', 'subscribed', {
          email: email,
          // additional parameters
        });

        console.log('User subscribed successfully:', email);
        setSubscriptionStatus('success');
      } catch (error) {
        console.error('Error subscribing user:', error.message);
        setSubscriptionStatus('error');
      }
    } else {
      console.error('MailerLite script not loaded.');
      setSubscriptionStatus('error');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-black'
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>

      {/* Include the MailerLite script with the onLoad attribute */}
      <Script
        strategy="afterInteractive"
        src="https://assets.mailerlite.com/js/universal.js"
        id="mailerlite-script"
        async
        onLoad={handleScriptLoad}
      >
        {`
          (function(w,d,e,u,f,l,n){
            w[f]=w[f]||function(){
              (w[f].q=w[f].q||[]).push(arguments);
            },l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);
          })(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '670955');
        `}
      </Script>

      {subscriptionStatus === 'success' && (
        <p style={{ color: 'green' }}>Subscription successful! Thank you for subscribing.</p>
      )}
      {subscriptionStatus === 'error' && (
        <p style={{ color: 'red' }}>Oops! Something went wrong. Please try again later.</p>
      )}
    </div>
  );
};

export default NewsletterForm;
