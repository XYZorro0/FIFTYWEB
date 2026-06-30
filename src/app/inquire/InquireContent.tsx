"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { IMAGES } from "@/data/images";
import { staggerContainer, fadeInUp } from "@/animations/variants";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

const INTEREST_OPTIONS = [
  "Available Homes",
  "Custom Build",
  "Luxury Remodel",
  "Property Acquisition",
  "General Inquiry",
];

function InquireForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (_data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-dark-2 border border-gold/20 text-light font-body text-sm px-5 py-4 outline-none placeholder:text-light/30 focus:border-gold/60 transition-colors duration-200";
  const errorClass = "font-body text-[0.65rem] text-red-400/80 mt-1";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-16 text-center"
        >
          <div className="w-12 h-px bg-gold mx-auto mb-8" />
          <h3 className="font-display text-2xl md:text-3xl text-ink font-normal mb-4">
            Thank You
          </h3>
          <p className="font-body text-sm text-light/60 leading-[1.9] max-w-md mx-auto">
            We have received your inquiry and will be in touch within one business day. We look
            forward to speaking with you.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="space-y-5"
          noValidate
        >
          {/* Name row */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <input
                {...register("firstName", { required: "First name is required" })}
                placeholder="First Name"
                className={inputClass}
                autoComplete="given-name"
              />
              {errors.firstName && <p className={errorClass}>{errors.firstName.message}</p>}
            </div>
            <div>
              <input
                {...register("lastName", { required: "Last name is required" })}
                placeholder="Last Name"
                className={inputClass}
                autoComplete="family-name"
              />
              {errors.lastName && <p className={errorClass}>{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
              })}
              placeholder="Email Address"
              type="email"
              className={inputClass}
              autoComplete="email"
            />
            {errors.email && <p className={errorClass}>{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <input
              {...register("phone")}
              placeholder="Phone Number (optional)"
              type="tel"
              className={inputClass}
              autoComplete="tel"
            />
          </div>

          {/* Interest */}
          <div>
            <select
              {...register("interest", { required: "Please select an area of interest" })}
              className={`${inputClass} appearance-none`}
              defaultValue=""
            >
              <option value="" disabled>
                Area of Interest
              </option>
              {INTEREST_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            {errors.interest && <p className={errorClass}>{errors.interest.message}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              {...register("message")}
              placeholder="Tell us about your vision (optional)"
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full border border-gold text-gold font-body text-[0.7rem] tracking-[0.2em] uppercase py-4 hover:bg-gold hover:text-dark transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="font-body text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 mb-2">
          Email
        </p>
        <a
          href="mailto:info@fiftyseventh7th.com"
          className="font-body text-sm text-light/70 hover:text-gold transition-colors duration-200"
        >
          info@fiftyseventh7th.com
        </a>
      </div>

      <div>
        <p className="font-body text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 mb-2">
          Location
        </p>
        <p className="font-body text-sm text-light/70 leading-relaxed">
          Houston, Texas
        </p>
      </div>

      <div>
        <p className="font-body text-[0.6rem] tracking-[0.22em] uppercase text-gold/70 mb-2">
          Instagram
        </p>
        <a
          href="https://www.instagram.com/fiftyseventh7th/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-light/70 hover:text-gold transition-colors duration-200"
        >
          @fiftyseventh7th
        </a>
      </div>

      <div className="border-t border-gold/15 pt-8">
        <p className="font-body text-sm text-light/50 leading-[1.9]">
          We take on a limited number of projects each year. We encourage early inquiry so we can
          give your home the time and attention it deserves.
        </p>
      </div>
    </div>
  );
}

function InquireMain() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="bg-dark py-20 md:py-28">
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1200px] mx-auto px-6 md:px-10"
      >
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-20">
          {/* Left: contact info */}
          <motion.div variants={fadeInUp}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl text-ink font-normal mb-4">
              Start a Conversation
            </h2>
            <GoldDivider className="mb-8" />
            <ContactInfo />
          </motion.div>

          {/* Right: form */}
          <motion.div variants={fadeInUp}>
            <InquireForm />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export function InquireContent() {
  return (
    <>
      <PageHeader
        title="Inquire"
        eyebrow="Contact Us"
        subtitle="Every extraordinary home begins with a conversation."
        bgImage={IMAGES.PORTFOLIO_FULL_01}
      />
      <InquireMain />
    </>
  );
}
