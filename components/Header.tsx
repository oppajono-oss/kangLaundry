'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan', href: '#features' },
    { name: 'Cara Kerja', href: '#how-it-works' },
    { name: 'Harga', href: '#pricing' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  const whatsappUrl = "https://wa.me/628978898454?text=Halo%20KangLaundry%2C%20saya%20mau%20laundry.%20Bisa%20jemput%20hari%20ini%3F";

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-blue-700 py-4'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center">
            <span className="font-poppins font-bold text-2xl" onClick={(e) => handleNavigation(e, '#hero')}>
              <span className={isScrolled ? "text-blue-700" : "text-white"}>Kang</span><span className="text-yellow-500">Laundry</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      legacyBehavior
                      passHref
                    >
                      <NavigationMenuLink
                        className={cn(
                          `rounded-md inline-flex h-10 items-center justify-center px-4 py-2 text-sm font-medium`,
                          `font-medium bg-white/30 border border-white/40 shadow-sm ${isScrolled ? 'text-blue-900 bg-blue-100/70 border-blue-200' : 'text-white'} hover:bg-yellow-500 hover:text-blue-900 hover:border-yellow-400 transition-colors`
                        )}
                        onClick={(e) => handleNavigation(e, item.href)}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center ${isScrolled ? "text-blue-900" : "text-white"} bg-white/10 backdrop-blur-sm rounded-full px-3 py-1`}>
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">0897-8898-454</span>
            </div>
            <div className={`flex items-center ${isScrolled ? "text-blue-900" : "text-white"} bg-white/10 backdrop-blur-sm rounded-full px-3 py-1`}>
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Purwokerto</span>
            </div>
            <Button 
              onClick={() => window.open(whatsappUrl, '_blank')}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold"
            >
              <Phone className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-blue-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-blue-100/30 bg-white/10 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-3 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium px-4 py-2 rounded-md bg-white/30 border border-white/40 ${isScrolled ? 'text-blue-900 bg-blue-100/70 border-blue-200' : 'text-white'} hover:bg-yellow-500 hover:text-blue-900 hover:border-yellow-400 transition-colors`}
                >
                  <span onClick={(e) => handleNavigation(e, item.href)}>
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="pt-4 border-t border-blue-100">
                <Button 
                  onClick={() => {
                    window.open(whatsappUrl, '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Hubungi via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}