"use client";
import { useDispatch } from "react-redux";
import { setMode } from "@/store/authSlice";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGavel,
  FaBalanceScale,
  FaBookOpen,
} from "react-icons/fa";
import * as motion from "motion/react-client";

export default function Footer() {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrolled = window.pageYOffset;
      const parallaxElements =
        containerRef.current.querySelectorAll(".parallax-layer");

      parallaxElements.forEach((element, index) => {
        const speed = 0.2 + index * 0.1;
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { name: "خانه", href: "#hero" },
    { name: "ویژگی‌ها", href: "#features" },
    { name: "چگونه کار می‌کند", href: "#works" },
    { name: "ویترین وکلا", href: "#showcase" },
    { name: "نظرات کاربران", href: "#testimonials" },
  ];

  const services = [
    { name: "مشاوره حقوقی", href: "#" },
    { name: "ثبت پرونده", href: "#" },
    { name: "انتخاب وکیل", href: "#" },
    { name: "پیگیری آنلاین", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      href: "#",
      color: "hover:text-blue-500",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      href: "#",
      color: "hover:text-sky-400",
      label: "Twitter",
    },
    {
      icon: <FaInstagram />,
      href: "#",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin />,
      href: "#",
      color: "hover:text-blue-600",
      label: "LinkedIn",
    },
  ];

  return (
    <footer
      ref={containerRef}
      className="parallax-container relative bg-gradient-to-br from-blue-900 via-sky-800 to-sky-900 text-white overflow-hidden"
    >
      {/* Parallax Background Layers */}
      <div className="parallax-bg parallax-layer-1 absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-sky-500/20" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Legal Icons Parallax Layer */}
      <div className="parallax-layer-2 absolute inset-0 overflow-hidden">
        <div className="floating-element absolute top-1/4 left-1/4 text-amber-400/10">
          <FaGavel className="text-8xl" />
        </div>
        <div className="floating-element-reverse absolute bottom-1/4 right-1/4 text-blue-400/10">
          <FaBalanceScale className="text-10xl" />
        </div>
        <div className="drifting-element absolute top-1/2 right-1/3 text-green-400/10">
          <FaBookOpen className="text-6xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-sky-300 bg-clip-text text-transparent mb-4">
              حق‌لاین
            </h2>
            <p className="text-zinc-300 dark:text-zinc-200 leading-relaxed mb-6">
              پلتفرم آنلاین دسترسی به وکلا و مدیریت پرونده‌ها به صورت سریع، امن
              و شفاف. تجربه‌ای جدید در دنیای حقوق.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-zinc-300">
                <FaPhone className="text-sky-600" />
                <span>021-12345678</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FaEnvelope className="text-sky-600" />
                <span>info@haghline.com</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <FaMapMarkerAlt className="text-sky-600" />
                <span>تهران، ایران</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">لینک‌های سریع</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-zinc-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-6">خدمات ما</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-zinc-300 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Auth & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-4">
              ما را دنبال کنید
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl ${social.color} transition-all duration-300 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              از آخرین اخبار و تخفیف‌ها باخبر شوید
            </h3>
            <p className="text-zinc-300 mb-6">
              با عضویت در خبرنامه ما، از جدیدترین خدمات و پیشنهادات ویژه مطلع
              شوید
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                عضویت
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-zinc-700 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-400">
            © 2025 حق‌لاین. تمامی حقوق محفوظ است. | طراحی شده با ❤️ در ایران
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
