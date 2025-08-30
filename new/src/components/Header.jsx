"use client";
import { Button } from "@/components/ui/button";
import { Building, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      title: "Bosh sahifa",
      path: "/",
      items: [],
    },
    {
      title: "Jamiyat haqida",
      path: "/about",
      items: [],
    },
    {
      title: "Xizmatlar",
      path: "/services",
      items: [],
    },
    {
      title: "Yangiliklar",
      path: "/news",
      items: [],
    },
    {
      title: "Bog'lanish",
      path: "/contact",
      items: [],
    },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg ">
              <Image src={"/logo.png"} width={100} height={100} alt="logo" />
            </div>
            <div className="hidden md:block">
              {/* <h1 className="text-xl font-bold text-primary">
                Qirguli Issiqlik Manbai MCHJ
              </h1> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <Button
                  variant="ghost"
                  className={`text-lg font-medium hover:text-primary hover:bg-accent transition-colors ${
                    pathname === item.path ? "text-primary bg-accent" : ""
                  }`}>
                  {item.title}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-left font-medium ${
                      pathname === item.path ? "text-primary bg-accent" : ""
                    }`}>
                    {item.title}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
