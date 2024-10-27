// src/app/layout.js

"use client"
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BoostrapClient';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styleHome from '../styles/Home.css';
import style from '../styles/App.css';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <BootstrapClient />
    </html>
  );
}