"use client"

import React from "react";
import Image from "next/image";
import styles from "./Sidebar.module.css";
import { MessageSquare, Phone, Settings, Sun, Users2 } from "lucide-react";
import Link from "next/link";
import { Menu } from "./sidebar.data";
import cn from "clsx";
import { usePathname } from "next/navigation";

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <Image src="/logo.svg" priority alt="" width={45} height={45} />
      <div>
        {Menu.map((item) => (
          <Link href={item.url} key={item.url} className={cn({[styles.active]: pathname == item.url})}>
            <item.Icon size={27} />
          </Link>
        ))}
      </div>
      <Sun />
    </aside>
  );
};

export default Sidebar;
