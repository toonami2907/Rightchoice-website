'use client'
import Loading from './Loading'
import dynamic from 'next/dynamic';
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { motion } from "framer-motion";
import { Button, buttonVariants } from '@/components/button'
import { ArrowDownToLine, Car, CheckCircle, Leaf, Link2, Link2Icon, Lock, Shield} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Features from '@/components/Features'
import Study from '@/components/Study'
import HomePage from '@/components/HomePage';
import Services from '@/components/Services';
import HotOffers from '@/components/HotOffers';
import { useEffect, useState } from 'react';
import Testimonials from '@/components/Testimonials';


const perks = [
  {
    name: 'Reliable Customer Services',
    Icon: ArrowDownToLine,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Experienced Services',
    Icon: Shield,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Guaranteed Quality',
    Icon: CheckCircle,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'For The World',
    Icon: Leaf,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Privacy',
    Icon: Lock,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
  {
    name: 'Friendly Client service',
    Icon: Link2Icon,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aut similique mollitia libero? Nisi eveniet veniam incidunt, cumque exercitationem aliquam?'
  },
];


export default function Home() {
  return (  
<>
<HomePage />
<Services />
<HotOffers />
<Testimonials/>
</>
      )}
