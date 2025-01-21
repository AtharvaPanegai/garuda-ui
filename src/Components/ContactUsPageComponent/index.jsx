import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "../../hooks/use-toast";

const Button = ({ children, className, variant, onClick }) => (
  <button
    className={`px-4 py-2 rounded-md ${className} ${
      variant === "outline" ? "border border-current" : ""
    }`}
    onClick={onClick}>
    {children}
  </button>
);

const Card = ({ children, className }) => (
  <div className={`rounded-lg ${className}`}>{children}</div>
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full p-2 bg-black border border-[#3F3F46] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`w-full p-2 bg-black border border-[#3F3F46] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9333EA] ${className}`}
    {...props}
  />
);

export default function ContactUsPageComponent() {
  const [messageName, setMessageName] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messageDescription, setMessageDescription] = useState("");
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path);
  };

  const { sendMessageToGaruda } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    let garudaMessageObject = {
      name : messageName,
      email : messageEmail,
      message : messageDescription
    }
    await sendMessageToGaruda(garudaMessageObject);
    toast({
      title : "Message Sent to Team, Will soon reach out to you.!",
      variant : "success"
    })
    setMessageDescription("");
    setMessageEmail("");
    setMessageName("")
    console.log("Form submitted");
  };

  return (
    <div className='min-h-screen bg-black text-white'>
      <header className='px-4 lg:px-6 h-16 flex items-center fixed w-full bg-black/50 backdrop-blur-sm z-50'>
        <a href='/' className='flex items-center justify-center'>
          <div className='w-8 h-8 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full' />
          <span className='ml-2 text-lg font-bold'>Garuda</span>
        </a>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <a
            onClick={() => navigateToPage("/")}
            className='text-sm font-medium hover:text-[#9333EA] transition-colors'>
            Home
          </a>
          <a
            onClick={() => navigateToPage("/pricing")}
            className='text-sm font-medium hover:text-[#9333EA] transition-colors'>
            Pricing
          </a>
        </nav>
      </header>

      <main className='flex-1 pt-16'>
        <section className='w-full pt-32 pb-12 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-black via-[#3B0764] to-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none'>
                  Get in Touch
                  <span className='block text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] to-[#C084FC]'>
                    We're Here to Help
                  </span>
                </h1>
                <p className='mx-auto max-w-[700px] text-zinc-400 md:text-xl lg:text-2xl'>
                  Have questions or need assistance? Our team is ready to
                  provide the support you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32 bg-black'>
          <div className='container px-4 md:px-6 mx-auto'>
            <div className='grid gap-12 lg:grid-cols-2'>
              <Card className='bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6'>
                <h2 className='text-2xl font-bold mb-6'>Contact Information</h2>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-3'>
                    <Mail className='h-6 w-6 text-[#9333EA]' />
                    <span>shreejisventures@gmail.com</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <Phone className='h-6 w-6 text-[#9333EA]' />
                    <span>+91 9665327466</span>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <MapPin className='h-6 w-6 text-[#9333EA]' />
                    <span>Atria Grande, Handewadi,Pune 411028</span>
                  </div>
                </div>
              </Card>
              <Card className='bg-white/5 backdrop-blur-sm border-[#3F3F46] p-6'>
                <h2 className='text-2xl font-bold mb-6'>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium mb-1'>
                      Name
                    </label>
                    <Input value = {messageName} onChange = {(e)=>setMessageName(e.target.value)} type='text' id='name' name='name' required />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium mb-1'>
                      Email
                    </label>
                    <Input value = {messageEmail} onChange = {(e)=>setMessageEmail(e.target.value)} type='email' id='email' name='email' required />
                  </div>
                  <div>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium mb-1'>
                      Message
                    </label>
                    <Textarea value={messageDescription} onChange={(e)=>setMessageDescription(e.target.value)} id='message' name='message' rows='4' required />
                  </div>
                  <Button
                    type='submit'
                    className='w-full bg-[#9333EA] hover:bg-[#7E22CE] text-white'>
                    Send Message
                    <Send className='ml-2 h-4 w-4' />
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className='w-full border-t border-[#3F3F46] py-6 md:py-8'>
        <div className='container flex flex-col gap-4 px-4 md:px-6 md:flex-row md:items-center md:justify-between mx-auto'>
          <div className='flex items-center gap-2'>
            <div className='w-6 h-6 bg-gradient-to-br from-[#9333EA] to-[#C084FC] rounded-full' />
            <span className='text-sm'>© 2025 Shreejis Ventures. All rights reserved.</span>
          </div>
          <nav className='flex gap-4 sm:gap-6'>
            <a href='/about' className='text-sm hover:text-[#9333EA]'>
              About
            </a>
            <a href='/privacy' className='text-sm hover:text-[#9333EA]'>
              Privacy
            </a>
            <a href='/refunds' className='text-sm hover:text-[#9333EA]'>
              Refunds
            </a>
            <a href='/terms' className='text-sm hover:text-[#9333EA]'>
              Terms & Conditions
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
