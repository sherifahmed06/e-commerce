"use client";

import * as React from "react";
import Link from "next/link";
import logo from "../../../../assets/images/freshcart-logo.svg";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@base-ui/react";
import Image from "next/image";
import { SearchIcon } from "lucide-react";
import { Field } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

export default function Navbar() {
  return (
    <NavigationMenu className="p-5 max-w-full sticky top-0 z-50 bg-white border-b">
      <NavigationMenuList className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="img">
          <Image src={logo} alt="Fresh Cart" />
        </div>

        {/* Desktop Search + Links */}
        <div className="hidden  lg:flex flex-1 min-w-0 gap-7 items-center justify-center">
          <Field className="w-[clamp(400px,30vw,600px)] shrink-0">
            <InputGroup className="py-5 px-2 rounded-2xl focus-within:border-green-600! focus-within:ring-2! focus-within:ring-green-600/20!">
              <InputGroupInput
                id="inline-start-input"
                placeholder="Search for products, brands and more.."
              />

              <InputGroupAddon align="inline-end">
                <SearchIcon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <div className="xl:flex gap-6 items-center justify-center hidden">
            <NavigationMenuItem>
              <Link className="hover:text-green-600" href="/">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-green-600" href="/">
                Shop
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-green-600" href="/">
                Categories
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link className="hover:text-green-600" href="/">
                Brands
              </Link>
            </NavigationMenuItem>
          </div>
          <div className="support flex items-center gap-2 border-e pe-0 me-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
            <div className="right whitespace-nowrap pe-4">
              <p className="text-xs text-gray-500">Support</p>
              <p className="text-xs">24/7 Help</p>
            </div>
          </div>
        </div>
        {/* Righy Side for mobilr */}
        <div className="flex  gap-5 items-center">
          {/* Heart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          {/* Cart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 hover:text-green-600"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>

          {/* Sign In - Desktop only */}
          <Button className="bg-green-600 py-2 px-6 rounded-2xl text-white font-semibold hidden lg:flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Sign In
          </Button>

          {/* Hamburger - Mobile only */}
          <NavigationMenuItem className="lg:hidden">
            <NavigationMenuTrigger className="bg-green-600 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center hover:bg-green-700 [&>svg:last-child]:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/" title="Home">
                  Home
                </ListItem>

                <ListItem href="/shop" title="Shop">
                  Shop
                </ListItem>

                <ListItem href="/categories" title="Categories">
                  Categories
                </ListItem>

                <ListItem href="/brands" title="Brands">
                  Brands
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & {
  href: string;
}) {
  return (
    <li {...props}>
      <NavigationMenuLink
        render={
          <Link href={href}>
            <div className="flex flex-col gap-1 text-sm">
              <div className="leading-none font-medium">{title}</div>

              <div className="line-clamp-2 text-muted-foreground">
                {children}
              </div>
            </div>
          </Link>
        }
      />
    </li>
  );
}
