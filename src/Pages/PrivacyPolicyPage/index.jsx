import { Card, CardContent, CardHeader } from "../../Components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-purple-500">Privacy Policy</h1>
      
      <Card className="bg-black border border-purple-500/20">
        <CardHeader>
          <h2 className="text-xl font-medium text-purple-500">Our Commitment to Privacy</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-300">
          <p>
            At Shreejis Ventures, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Information We Collect</h3>
          <p>
            We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact our support team. This may include your name, email address, payment information, and any other information you choose to provide.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">How We Use Your Information</h3>
          <p>
            We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Data Security</h3>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Changes to This Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <p className="mt-6 text-sm text-gray-400">
            Last Updated: 14th Jan 2025
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

