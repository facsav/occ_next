// src/app/layout.js

"use client"
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer';
import BootstrapClient from '../components/BoostrapClient'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/App.css';





const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children} 
        <Footer/>
      </body>
      <BootstrapClient/>
    </html>
  );
}