// src/app/layout.js

"use client"
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BoostrapClient';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styleHome from '../styles/Home.css';
import style from '../styles/App.css';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
        <title>Instalaciones OCC</title>
        <meta name="description" content="Colocacion de revestimientos de alta calidad; Máarmol, porcelanato, venecitas y más." />
        <meta
          name="keywords"
          content="Revestimientos, Instalacion de revestimientos, Colocacion de mármol, Colocacion de porcelanato, Colocacion de venecitas,
          Colocador de pisos, Colocacion de pisos flotantes, Revestimiento de paredes, Colocador de revestimientos en Bs. As."
        />
        <link rel="icon" href="/iconBlue.svg" />
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <BootstrapClient />
    </html>
  );
}