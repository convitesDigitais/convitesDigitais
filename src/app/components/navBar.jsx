import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";

export default function NavBar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Image width={60} height={60} alt="logo" src="/gcLogo.png" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Evento
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Configuração do Evento
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button as={Link} color="warning" href="/" variant="flat">
            Sair <AiOutlineLogout />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
