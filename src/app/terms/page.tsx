import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

        <p className="mb-4">
            Your privacy is important to us. This <a href="/conditions" className='text-blue-600 underline'>privacy policy </a> explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-bold mb-2">1. Information We Collect</h2>

        <p className="mb-4">
            We collect information such as name, email, and user-generated content when you register or use our platform.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. How We Use Your Information</h2>

        <p className="mb-4">
            We use your information to provide and improve our services, personalize your experience, and communicate with you.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. Data Security</h2>

        <p className="mb-4">
            We implement security measures to protect your data from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-2xl font-bold mb-2">4. Third-Party Services</h2>

        <p className="mb-4">
            We may use third-party services that have their own privacy policies. Please review their policies for more information.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Updates to Privacy Policy</h2>

        <p className="mb-4">
            We may update our privacy policy from time to time. Check this page for the latest information.
        </p>

        <h2 className="text-2xl font-bold mb-2">6. Contact Us</h2>

        <p className="mb-4">
            If you have any questions or concerns about our privacy policy, please <a href="contact.html">contact us</a>.
        </p>
    </div>
</div>

  )
}

export default page