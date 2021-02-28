import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

const Header = ({ user, loading, error }) => {
  const [state, setState] = useState({});

  const handleItemClick = (e, { name }) => setState({ activeItem: name });
  const { activeItem } = state;

  const LoginLink = () => (
    <Menu.Item
      name="sign-in"
      active={activeItem === "sign-in"}
      onClick={handleItemClick}
      className="headerItem"
    >
      <Link href="/api/v1/login">
        <i className="port-navbar-link">Sign-in</i>
      </Link>
    </Menu.Item>
  );
  const LogoutLink = () => (
    <Menu.Item
      name="log-out"
      active={activeItem === "log-out"}
      onClick={handleItemClick}
      className="headerItem"
    >
      <Link href="/api/v1/logout">
        <i className="port-navbar-link">Logout</i>
      </Link>
    </Menu.Item>
  );

  const MenuItem = ({ name, link, showLink }) => (
    <Menu.Item
      name={name}
      active={activeItem === { name }}
      onClick={handleItemClick}
      className="port-navbar-item"
    >
      <Link href={link}>
        <i className="headerItem port-navbar-link">{showLink}</i>
      </Link>
    </Menu.Item>
  );
  return (
    <Menu stackable borderless className="port-navbar port-default absolute">
      <Menu.Menu position="left">
        <Menu.Item>
          <img src="/images/Octopus.svg" />
        </Menu.Item>
        <MenuItem name="home" link="/" showLink="Home" />
        <MenuItem name="about" link="/about" showLink="About" />
        <MenuItem name="portfolios" link="/portfolios" showLink="Portfolios" />
        <MenuItem name="blog" link="/blog" showLink="Blog" />
        <MenuItem
          name="git"
          link="https://github.com/smadzelonka/"
          showLink="Github"
        />
        <MenuItem name="cv" link="/cv" showLink="Cv" />
      </Menu.Menu>
      <Menu.Menu position="right">
        {!loading && (
          <>
            {user && <LogoutLink />}
            {!user && <LoginLink />}
          </>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Header;
