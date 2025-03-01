'use client';  // This marks the file as a client-side component

import React from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';  // Use Next.js Link instead of React Router
import { usePathname } from 'next/navigation';  // Import from next/navigation
import Image from 'next/image';  // Import Image from Next.js for optimized images

import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();  // Using usePathname() from next/navigation to get current route

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          {/* Make the logo the home link */}
          <Link href="/" className={styles.logoText}>
            <Image
              src="/WhatsApp_Image_2025-02-03_at_17.21.46__1_-removebg-preview.png" // Path to your logo image in the public folder
              alt="NhaNha Engineering Logo"
              width={190} // Adjust width to your desired size
              height={95} // Adjust height to match the logo's aspect ratio
              className={styles.logoImage}
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className={styles.desktopLinks}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={`${pathname === item.href ? styles.activeLink : styles.link}`}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <div className={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className={`${pathname === item.href ? styles.activeLink : styles.link}`} onClick={() => setIsOpen(false)}>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
