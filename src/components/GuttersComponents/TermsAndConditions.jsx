import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-gray-800 p-8 max-w-4xl mx-auto my-10 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Terms & Conditions</h1>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to JonesCo Gutters. By using our website, booking estimates, or scheduling jobs, you agree to abide by the terms and conditions outlined below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Booking Estimates and Jobs</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Free Estimates:</strong> Our complimentary estimates are provided without any obligation.</li>
            <li><strong>Booking Confirmation:</strong> Once an estimate or job is booked, we will confirm your appointment via email or phone.</li>
            <li><strong>Cancellations:</strong> Please provide a minimum of 24 hours notice to cancel or reschedule your appointment.</li>
            <li><strong>Scope of Work:</strong> Any changes to the original scope of work must be agreed upon by both parties in writing.</li>
            <li><strong>Payment Terms:</strong> Payment terms will be outlined in the estimate or job contract and must be adhered to. Full payment is due upon completion unless otherwise specified.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Data Collection and Use</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Personal Information:</strong> We collect your personal information (name, contact details) solely to provide estimates or book jobs.</li>
            <li><strong>Data Usage:</strong> Your data will be used exclusively for the purposes of providing our services and relevant marketing communications.</li>
            <li><strong>Data Sharing:</strong> We do not sell or share your data with third-party companies without your consent, except as required by law or necessary for service provision (e.g., Jobber POS, Zapier).</li>
            <li><strong>Cookies:</strong> Our website uses cookies to enhance your browsing experience and gather analytics. You can manage your cookie preferences through your browser settings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Website Usage</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Content Ownership:</strong> All content on the JonesCo Gutters website, including text, images, and logos, is our property and protected by copyright laws.</li>
            <li><strong>Third-Party Links:</strong> Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.</li>
            <li><strong>User Conduct:</strong> You agree not to use our website for any unlawful purpose or to disrupt its normal operations. Unauthorized use of the website may give rise to a claim for damages and/or be a criminal offense.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. AI Assistance</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>AI Bot Usage:</strong> Our website uses an AI bot to assist with customer inquiries and provide information about our services.</li>
            <li><strong>Information Accuracy:</strong> While the AI bot strives to provide accurate and helpful information, all recommendations and details provided by the AI bot are for guidance purposes only and do not constitute a binding agreement.</li>
            <li><strong>Verification with Staff:</strong> Any information or services suggested by the AI bot must be confirmed by an actual employee of JonesCo Gutters to be considered valid.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Liability and Disclaimers</h2>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li><strong>Service Quality:</strong> We strive to provide the best service possible. However, we cannot guarantee perfection in every aspect of the job. Any issues must be reported within 7 days of service completion.</li>
            <li><strong>Website Accuracy:</strong> We endeavor to keep the information on our website accurate but do not guarantee its completeness or reliability.</li>
            <li><strong>Indemnification:</strong> You agree to indemnify and hold harmless JonesCo Gutters from any claims arising from your use of our website or services. This includes any direct, indirect, incidental, or consequential damages.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Changes to Terms</h2>
          <p className="text-gray-600">
            We reserve the right to update these terms and conditions at any time. Please review this page regularly for any changes. Your continued use of our services after any changes are made constitutes your acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or concerns regarding these terms and conditions, please contact us at:
          </p>
          <p className="text-gray-600">
            JonesCo Gutters <br />
            Parrottsville, TN <br />
            423.900.7901 <br />
            admin@jonescogutters.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
