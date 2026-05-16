import { motion } from 'framer-motion';
import { AtSign, Briefcase, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="px-6 pb-24 pt-[120px] sm:px-8">
      <div className="mx-auto max-w-5xl space-y-14">
        <section className="rounded-[36px] border border-white/10 bg-[#08101f]/90 p-10 shadow-soft backdrop-blur-xl">
          <SectionHeading
            eyebrow="Contact"
            title="Partner with us to build the next generation of Agent General Intelligence."
            description="Whether you're an investor, enterprise partner, or early adopter, we welcome conversations that accelerate intelligent automation." 
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: Briefcase, title: 'Enterprise inquiry', detail: 'partner@agi.ai' },
              { icon: MessageCircle, title: 'Investor relations', detail: 'invest@agi.ai' },
              { icon: AtSign, title: 'General inquiry', detail: 'hello@agi.ai' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <item.icon className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: 'easeOut' }}>
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
