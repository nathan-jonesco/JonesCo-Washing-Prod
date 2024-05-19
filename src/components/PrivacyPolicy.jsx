import { ShieldCheckIcon } from '@heroicons/react/20/solid'

export default function PrivacyPolicy() {
    return (
        <div className="bg-white px-6 py-4 pb-14 lg:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-JonesCo-Blue-950">
                <p className="text-base font-semibold leading-7 text-indigo-600">Privacy Assurance</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
                <p className="mt-6 text-xl leading-8">
                    At JonesCo Seamless Gutter Systems, safeguarding your personal information is a responsibility we take
                    seriously. This Privacy Policy explains how we collect, use, and store your information when you use our
                    services, with the utmost respect for your privacy.
                </p>
                <div className="mt-10 max-w-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Information Collection and Use</h2>
                    <p>
                        We collect details like your name, email address, house size, gutter specifics, and property address to
                        tailor our services to your needs. Here’s how we handle your data:
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <ShieldCheckIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                            <span>
                                Personal information is collected solely for fulfilling service requests and improving our offerings.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <ShieldCheckIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                            <span>
                                Data storage and customer support are managed through Jira Service Management, ensuring secure handling of your information.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <ShieldCheckIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                            <span>
                                We do not share your personal data with third parties without your explicit consent, except as required for providing requested services or as mandated by law.
                            </span>
                        </li>
                    </ul>
                    <p className="mt-8">
                        Our team is trained in privacy protection, and we use security measures to prevent unauthorized access or disclosure of your data.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Your Rights and Choices</h2>
                    <p className="mt-6">
                        You have rights over your personal information, including the right to access, correct, or delete your data.
                        If you wish to exercise these rights or have questions about our data practices, please contact us.
                    </p>
                </div>
                <div className="mt-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Consent and Updates</h2>
                    <p className="mt-6">
                        By utilizing our services, you acknowledge and agree to our data practices as described in this policy. We
                        will inform you of any updates to our privacy procedures, which will be reflected in the revisions to this document.
                    </p>
                </div>
            </div>
        </div>
    )
}
