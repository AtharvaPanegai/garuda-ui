import { Card, CardContent, CardHeader } from "../../Components/ui/card"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-black p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-purple-500">Refund Policy</h1>
      
      <Card className="bg-black border border-purple-500/20">
        <CardHeader>
          <h2 className="text-xl font-medium text-purple-500">Our Refund Policy</h2>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-300">
          <p>
            At Shreejis Ventures, we strive to provide high-quality services to all our customers. This Refund Policy outlines our guidelines regarding refunds for our subscription-based services.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Subscription Charges and Cancellation</h3>
          <p>
            Once a subscription amount is charged, you have the option to either continue using our services for the entire month or opt out of the service. However, please note that no refunds will be processed for partial use or early cancellation of the service within a billing cycle.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">No Refund Policy</h3>
          <p>
            We do not provide refunds for our subscription services. When you purchase a subscription, you are agreeing to pay for the entire billing cycle, regardless of actual usage. This policy is in place to maintain the quality and consistency of our services.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Cancellation Process</h3>
          <p>
            You may cancel your subscription at any time. Upon cancellation, you will continue to have access to the service until the end of your current billing cycle. After that, your subscription will not renew, and you will no longer be charged.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Exceptions</h3>
          <p>
            In exceptional circumstances, such as extended service outages or other situations deemed appropriate by our management, we may consider issuing refunds or service credits. These will be handled on a case-by-case basis at our discretion.
          </p>
          
          <h3 className="text-lg font-medium text-purple-400 mt-6">Contact Us</h3>
          <p>
            If you have any questions about our Refund Policy, please contact our customer support team.
          </p>
          
          <p className="mt-6 text-sm text-gray-400">
            Last Updated: 14th Jan 2025
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

