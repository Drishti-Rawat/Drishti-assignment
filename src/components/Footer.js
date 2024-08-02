import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
    const footerLinks = [
        {
          title: "About",
          links: [
            { title: "How it works", url: "/" },
            { title: "Featured", url: "/" },
            { title: "Partnership", url: "/" },
            { title: "Bussiness Relation", url: "/" },
          ],
        },
        {
          title: "Company",
          links: [
            { title: "Events", url: "/" },
            { title: "Blog", url: "/" },
            { title: "Podcast", url: "/" },
            { title: "Invite a friend", url: "/" },
          ],
        },
        {
          title: "Socials",
          links: [
            { title: "Discord", url: "/" },
            { title: "Instagram", url: "/" },
            { title: "Twitter", url: "/" },
            { title: "Facebook", url: "/" },
          ],
        },
      ];
  return (
    <footer className='flex flex-col text-white   bg-cyan-800 border-t border-slate-200'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-3'>
        
        <p className='text-base text-white'>
           2024 
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
        {footerLinks.map((item) => (
          <div key={item.title} className="flex flex-col gap-6 text-base min-w-[170px]">
            <h3 className="font-bold text-gray-200">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-slate-300"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-300 sm:px-16 px-6 py-10'>
      <p>@2024. All rights reserved</p>

      <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10 text-white">
        <Link href="/">
          Privacy & Policy
        </Link>
        <Link href="/">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
  )
}

export default Footer