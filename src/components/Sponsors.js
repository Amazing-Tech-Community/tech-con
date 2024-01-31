import React from 'react';
import { motion } from 'framer-motion';
import pinkApp from "../images/app.png";
import cardify from "../images/cardify.png";
import microsoft from "../images/microsoft.png";
import noones from "../images/noones.png";
import found from "../images/found.jpg";
import Image from 'next/image';
import cmx from '../images/cmx.png'
import gdcibad from '../images/gdcibad.png'
import guild from '../images/guild.png'
import imta from '../images/imta.png'
import isu from '../images/isu.png'
import ite from '../images/ite.png'
import nacos from '../images/nacos.png'
import ibtc from '../images/ibtc.png'
import gdc from '../images/gdc.jpg'
import nuesa from '../images/nuesa.jpg'
import uisu from '../images/uisu.png'

const Sponsors = () => {
  const logos = [
    { src: microsoft, width: 200, height: 100,  },
    { src: cardify, width: 200, height: 100, },
    { src: pinkApp, width: 200, height: 100,  },
    { src: noones, width: 200, height: 100,  },
    { src: found, width: 200, height: 100,  },
  ];

  const partners = [
    { src: cmx, width: 140, height: 100, delay: 0 },
    { src: gdc, width: 180, height: 100, delay: 0.2 },
    { src: gdcibad, width: 170, height: 100, delay: 0.4 },
    { src: guild, width: 180, height: 100, delay: 0.6 },
    { src: uisu, width: 180, height: 100, delay: 0.6 },
    { src: ibtc, width: 180, height: 100, delay: 0.2 },
    { src: imta, width: 180, height: 100, delay: 0.4 },
    { src: isu, width: 180, height: 100, delay: 0.6 },
    { src: ite, width: 180, height: 100, delay: 0.2 },
    { src: nacos, width: 140, height: 100, delay: 0.4 },
    { src: nuesa, width: 140, height: 100, delay: 0.6 },
  ];

  return (
    <div className='flex flex-col  py-7'>
      {/* <div className='flex justify-center'>
        <h1 className="text-green py-4 font-bold">
          <b className="text-white font-bold text-3xl">Sponsors</b>
        </h1>
      </div> */}

      {/* <motion.div
        className='grid sm:grid-cols-3 md:grid-cols-4 xx:grid-cols-1 xx:gap-4 sm:gap-2 bg-white rounded-lg justify-center py-8'
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, repeat: 1, repeatType: 'loop', delay: 1 }}
             whileHover={{ scale: 1.5 }}
            className='px-4 pb-3 flex justify-center items-center'
          >
            <Image
              src={logo.src}
              alt="img"
              width={logo.width}
              height={logo.height}
              className=""
            />
          </motion.div>
        ))}
      </motion.div> */}

      <div className='flex justify-center py-4'>
        <h1 className="text-green py-4 font-bold">
          <b className="text-white font-bold text-3xl">Community Partners</b>
        </h1>
      </div>

      <motion.div
        className='grid sm:grid-cols-3 md:grid-cols-5 xx:grid-cols-1 xx:gap-4 sm:gap-2 z-10 bg-white rounded-lg  py-8'
      >
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, repeat: 1, repeatType: 'loop', delay: 1 }}
            whileHover={{ scale: 1.5 }}
            className=' mt-2 flex justify-center items-center'
          >
            <Image
              src={partner.src}
              alt="img"
              width={partner.width}
              height={partner.height}
           
              className=""
            />
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Sponsors;
