import { BsCartCheck } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdOutlineManageHistory } from "react-icons/md"

export const customerLinks = [
  {
    href: "/profile",
    label: "Profile",
    Icon: CiUser,
  },
  {
    href: "/settings",
    label: "Account setting",
    Icon: RiUserSettingsLine,
  },
  {
    href: "/orders",
    label: "My orders",
    Icon: FiShoppingBag,
  },
  {
    href: "/track-order",
    label: "Track my order",
    Icon: BsCartCheck,
  },
];

export const ownerLinks = [
  {
    href: "/profile",
    label: "Profile",
    Icon: CiUser,
  },
  {
    href: "/settings",
    label: "Account setting",
    Icon: RiUserSettingsLine,
  },
  {
    href: "/profile/sell",
    label: "Sales",
    Icon: FiShoppingBag,
  },
  {
    href: "/profile/product-create",
    label: "Add Product",
    Icon: BsCartCheck,
  },
  {
    href: "/profile/manage-product",
    label: "Manage Product",
    Icon: MdOutlineManageHistory,
  },
];
