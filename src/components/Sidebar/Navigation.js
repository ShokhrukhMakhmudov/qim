import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import {
  MdOutlineFeaturedPlayList,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { IoNewspaperOutline, IoDocumentsOutline } from "react-icons/io5";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemIds = [
  {
    text: "Yangiliklar",
    icon: <IoNewspaperOutline />,
    link: "/news",
  },
  {
    text: "Biz haqimizda",
    icon: <AiOutlineInfoCircle />,
    link: "/#about",
  },
  {
    text: "Hujjatlar",
    icon: <IoDocumentsOutline />,
    link: "/documents",
  },

  {
    text: "Kontaktlar",
    icon: <AiOutlinePhone />,
    link: "#contacts",
  },
];

export const Navigation = ({ close }) => (
  <motion.ul variants={variants} className="sidebar-ul">
    {itemIds.map((item, ind) => (
      <MenuItem key={ind} data={item} close={close} />
    ))}
  </motion.ul>
);
