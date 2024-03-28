import React from 'react'

const terms = () => {
  return (
    <div className="bg-gray-100">
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

        <p className="mb-4">
            Welcome to Blaqcinity! By using our platform, you agree to abide by the following terms and conditions:
        </p>

        <h2 className="text-2xl font-bold mb-2">1. User Responsibilities</h2>

        <p className="mb-4">
            Users are responsible for maintaining the confidentiality of their account credentials and agree to use the platform responsibly.
        </p>

        <h2 className="text-2xl font-bold mb-2">2. Content Guidelines</h2>

        <p className="mb-4">
            Users agree to post content that is respectful, lawful, and does not violate the rights of others.
        </p>

        <h2 className="text-2xl font-bold mb-2">3. Data Privacy</h2>

        <p className="mb-4">
            We value your privacy. Please refer to our <a href="privacy.html">Privacy Policy</a> for details on how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-bold mb-2">4. Termination</h2>

        <p className="mb-4">
            We reserve the right to terminate accounts that violate our terms of service or engage in inappropriate behavior.
        </p>

        <h2 className="text-2xl font-bold mb-2">5. Contact Us</h2>

        <p className="mb-4">
            If you have any questions or concerns about our terms of service, please <a href="/contact" className='text-blue-600 underline'>contact us</a>.
        </p>
    </div>
</div>

  )
}

export default terms