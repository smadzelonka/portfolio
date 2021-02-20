import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable borderless className="port-navbar port-default absolute">
        <Menu.Menu position="left">
          <Menu.Item>
            <img src="/images/logo1.png" />
          </Menu.Item>

          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            className="port-navbar-item"
          >
            <Link href="/">
              <a className="headerItem port-navbar-link">Home</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={this.handleItemClick}
            className="port-navbar-item"
          >
            <Link href="/about">
              <a className="headerItem port-navbar-link">About</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="portfolios"
            active={activeItem === "portfolios"}
            onClick={this.handleItemClick}
            className="port-navbar-item"
          >
            <Link href="/portfolios">
              <a className="headerItem port-navbar-link">Portfolio</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="blog"
            active={activeItem === "blog"}
            onClick={this.handleItemClick}
            className="port-navbar-item"
          >
            <Link href="/blog">
              <a className="headerItem port-navbar-link">Blog</a>
            </Link>
          </Menu.Item>

          <Menu.Item
            name="git"
            active={activeItem === "git"}
            onClick={this.handleItemClick}
            className="port-navbar-item"
          >
            <Link href="https://github.com/smadzelonka/">
              <a className="headerItem port-navbar-link">GitHub</a>
            </Link>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Menu.Item
            name="cv"
            position="right"
            active={activeItem === "cv"}
            onClick={this.handleItemClick}
            className="port-navbar-item"
          >
            <Link href="/cv">
              <a className="headerItem port-navbar-link">CV</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            onClick={this.handleItemClick}
            className="headerItem"
          >
            <Link href="#">
              <a className="port-navbar-link">Sign-in</a>
            </Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
