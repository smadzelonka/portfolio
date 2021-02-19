import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable>
        <Menu.Item>
          <img src="/images/logo.png" />
        </Menu.Item>

        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Link href="/">
            <a className="headerItem">Home</a>
          </Link>
        </Menu.Item>

        <Menu.Item
          name="about"
          active={activeItem === "about"}
          onClick={this.handleItemClick}
        >
          <Link href="/about">
            <a className="headerItem">About</a>
          </Link>
        </Menu.Item>

        <Menu.Item
          name="portfolios"
          active={activeItem === "portfolios"}
          onClick={this.handleItemClick}
        >
          <Link href="/portfolios">
            <a className="headerItem">Portfolio</a>
          </Link>
        </Menu.Item>

        <Menu.Item
          name="blog"
          active={activeItem === "blog"}
          onClick={this.handleItemClick}
        >
          <Link href="/blog">
            <a className="headerItem">Blog</a>
          </Link>
        </Menu.Item>

        <Menu.Item
          name="cv"
          position="right"
          active={activeItem === "cv"}
          onClick={this.handleItemClick}
        >
          <Link href="/cv">
            <a className="headerItem">CV</a>
          </Link>
        </Menu.Item>
        <Menu.Item
          // position="right"
          name="sign-in"
          active={activeItem === "sign-in"}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    );
  }
}
