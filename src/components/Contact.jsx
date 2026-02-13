import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Instagram, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // EmailJS Configuration - Replace these with your actual credentials
    const serviceID = 'service_tfya5l8'      // Get from EmailJS dashboard
    const templateID = 'template_arimkyq'    // Get from EmailJS dashboard
    const publicKey = 'wSUWbu3son53e8VuR'      // Get from EmailJS dashboard

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'workspacedoni7@gmail.com',  // Your email
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text)
          setSubmitStatus('success')
          alert('✅ Message sent successfully! I\'ll get back to you soon.')
          setFormData({ name: '', email: '', message: '' })
          setIsSubmitting(false)
        },
        (error) => {
          console.error('FAILED...', error)
          setSubmitStatus('error')
          alert('❌ Oops! Something went wrong. Please try again or email me directly at workspacedoni7@gmail.com')
          setIsSubmitting(false)
        }
      )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/deekshith_doni',
      color: 'hover:text-pink-500',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:workspacedoni7@gmail.com',
      color: 'hover:text-electric-lime',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          <span className="bg-gradient-to-r from-electric-lime to-neon-purple bg-clip-text text-transparent">
            LET'S WORK TOGETHER
          </span>
        </h2>
        <p className="text-gray-400 text-lg">
          Got a project in mind? Drop me a message!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-electric-lime/30 rounded-lg focus:outline-none focus:border-electric-lime transition-colors text-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-zinc-900 border border-electric-lime/30 rounded-lg focus:outline-none focus:border-electric-lime transition-colors text-white"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-zinc-900 border border-electric-lime/30 rounded-lg focus:outline-none focus:border-electric-lime transition-colors text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-electric-lime text-dark-bg font-bold rounded-lg hover:bg-neon-purple hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <p className="text-gray-400 mb-8">
            Follow me on social media for behind-the-scenes content, tips, and updates on my latest projects.
          </p>

          <div className="space-y-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`flex items-center gap-4 p-4 bg-zinc-900 border border-electric-lime/20 rounded-lg transition-all hover:border-electric-lime hover:scale-105 group ${social.color}`}
              >
                <social.icon className="w-6 h-6" />
                <span className="font-semibold">{social.name}</span>
                <div className="ml-auto w-2 h-2 bg-electric-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.a>
            ))}
          </div>

          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="mt-8 p-4 bg-gradient-to-r from-electric-lime/10 to-neon-purple/10 border border-electric-lime/30 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 bg-electric-lime rounded-full"></div>
                <div className="w-3 h-3 bg-electric-lime rounded-full absolute top-0 animate-ping"></div>
              </div>
              <div>
                <p className="font-semibold text-white">Available for Projects</p>
                <p className="text-sm text-gray-400">Currently accepting new clients</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="mt-20 pt-8 border-t border-electric-lime/20 text-center text-gray-500"
      >
        <p>&copy; 2026 Video Editor & Graphic Designer. Crafted with passion.</p>
      </motion.div>
    </section>
  )
}

export default Contact
