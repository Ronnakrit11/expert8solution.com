import Link from "next/link";
import React, { useState } from "react";
import { ListGroup } from "flowbite-react";
import { GoChevronDown } from "react-icons/go";
import { useRouter, usePathname } from "next/navigation";
export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "About us",
    url: "/about",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Price",
    url: "/pricing"
  },
  {
    name: "Services",
    url: "/pricing",
    subMenu: [
      {
        name: "บริการทำเว็ปไซต์ E-learning",
        url: "/",
      },
      {
        name: "บริการทำเว็ปไซต์ E-Commerce",
        url: "/",
      },
      {
        name: "บริการทำ Marketing ครบวงจร",
        url: "/",
      },
    ]
  },
  {
    name: "Contact",
    url: "/pricing"
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [active, setActive] = useState('');
  const router = useRouter()
  const pathname = usePathname()

  const resetActive = () => {
    setActive('')
  }
  const hightlightMenu = 'เข้าสู่ห้องเรียน'

  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData &&
          navItemsData.map((item, index) => {
            if (item.subMenu?.length) {
              return <div className="relative"
              >
                <span
                  className={`${pathname === item.url
                    ? "text-white"
                    : "dark:text-white text-black"
                    } text-[18px] px-6 font-Poppins font-[400] cursor-pointer flex items-center justify-center gap-1 `}
                  onMouseOver={() => setActive(item.name)}
                >
                  <div>{item.name}</div>
                  <GoChevronDown />
                </span>
                <div onMouseLeave={resetActive} className={`flex justify-center absolute z-10 top-[28px] min-w-[143px] transition  ease-out ${active === item.name ? 'visible' : 'hidden'}`}>
                  <ListGroup className="w-48">
                    {
                      item.subMenu.map((subItem, subIndex) => {
                        return <ListGroup.Item onClick={() => router.push(subItem.url)} key={`sub-${subIndex}`}>
                          {subItem.name}
                        </ListGroup.Item>
                      })
                    }
                  </ListGroup>
                </div>
              </div>
            }

            return <Link href={`${item.url}`} key={index} passHref>
              <span
                onMouseOver={resetActive}
                className={`${pathname === item.url
                  ? "text-black border-primary border-b-4 p-6"
                  : "dark:text-white text-black"
                  } text-[18px] px-6 font-Poppins font-[400] ${item.name === hightlightMenu ? 'border-solid border-2 border-red-300 py-1 rounded-md' : null} `}
              >
                {item.name}
              </span>
            </Link>
          })}
      </div>
      {isMobile && (
        <div className="800px:hidden mt-5 pb-3">
          <div className="w-full text-center py-6">
            <Link href={"/"} passHref>
              <span
                className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
              >ELearning</span>
            </Link>
          </div>
          {navItemsData &&
            navItemsData.map((item, index) => {

              if (item.subMenu?.length) {
                return <div className="relative"
                >
                  <span
                    className={`${pathname === item.url
                      ? "text-black font-bold"
                      : "dark:text-white text-black"
                      } text-[18px] px-6 font-Poppins font-[400] cursor-pointer flex justify-left gap-1 py-5 w-[95%]`}
                    onMouseOver={() => setActive(item.name)}
                  >
                    <div>{item.name}</div>
                    <GoChevronDown />
                  </span>
                  <div onMouseLeave={resetActive} className={`flex justify-left px-8 py-2 z-10 top-[28px] min-w-[143px] transition  ease-out ${active === item.name ? 'visible' : 'hidden'}`}>
                    <ul className="text-black">
                      {
                        item.subMenu.map((subItem, subIndex) => {
                          return <li onClick={() => router.push(subItem.url)} key={`sub-${subIndex}`} className="py-2">
                            <span className="text-[8px] pr-2">⚪ </span> {subItem.name}
                            <hr />
                          </li>
                        })
                      }
                    </ul>
                  </div>
                </div>
              }

              return (
                <Link onMouseOver={resetActive} href={`${item.url}`} passHref key={index}>
                  <span
                    className={`${pathname === item.url
                      ? "text-black font-bold"
                      : "dark:text-white text-black"
                      } block py-5 text-[18px] px-6 font-Poppins font-[400] ${item.name === hightlightMenu ? 'border-solid border-2 border-red-300 py-1 rounded-md' : null}`}
                  >
                    {item.name}
                  </span>
                </Link>
              )
            }
            )}
        </div>
      )}
    </>
  );
};

export default NavItems;