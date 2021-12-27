import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";
import Header from "./../Header/Header";
import Paragraph from "../Paragraph/Paragraph";

function NavLink({ href, exact, children, activeColor = "#05aff2", ...props }) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.includes(href);
  if (isActive) {
    props.className += " active";
  }
  return (
    <Link href={href}>
      <Paragraph
        style={{
          marginBottom: 0,
        }}
        color={isActive ? activeColor : "#0c0c0cf0"}
        fontWeight="medium">
        {children}
      </Paragraph>
    </Link>
  );
}

export default NavLink;
