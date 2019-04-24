import React, { Component } from 'react'
import { css } from 'react-emotion'
import HamburgerMenu from 'react-hamburger-menu'

interface INavbarEntry {
  id: string
  title: string
}

interface INavbarProps {
  title: string
  entries: INavbarEntry[]
  selectedId: string
}

export class Navbar extends Component<INavbarProps> {
  render() {
    return (
      <div
        className={css`
          font-family: 'Open Sans Condensed', sans-serif;
          position: sticky;
          top: 0;
        `}
      >
        <div
          className={css`
            @media screen and (min-width: 800px) {
              display: none;
            }
          `}
        >
          <MobileNavbar {...this.props} />
        </div>
        <div
          className={css`
            @media screen and (max-width: 800px) {
              display: none;
            }
          `}
        >
          <DesktopNavbar {...this.props} />
        </div>
      </div>
    )
  }
}

class DesktopNavbar extends Component<INavbarProps> {
  handleClick = (id: string) => {
    // TODO
  }

  renderItem(entry: INavbarEntry) {
    const isSelected = entry.id === this.props.selectedId
    return (
      <div
        key={entry.id}
        className={css`
          ${isSelected ? 'border-bottom: 4px solid #FFB48A;' : ''}
          display: inline-block;
          cursor: pointer;
          height: 2.1rem;
          font-size: 1.5rem;
          padding: 0;
          margin: auto 0;
        `}
        onClick={this.handleClick.bind(entry.id)}
      >
        {entry.title}
      </div>
    )
  }
  render() {
    return (
      <div
        className={css`
          height: 5rem;
          display: flex;
          justify-content: space-evenly;
          font-family: 'Open Sans Condensed';
          background-color: white;
        `}
      >
        {this.props.entries.map(e => this.renderItem(e))}
      </div>
    )
  }
}

interface IMobileNavbarState {
  expanded: boolean
}

class MobileNavbar extends Component<INavbarProps, IMobileNavbarState> {
  state = {
    expanded: false,
  }

  toggleExpanded = () => {
    const expanded = this.state.expanded
    this.setState({ expanded: !expanded })
  }

  handleClick = (id: string) => {
    // TODO
  }

  renderItem(entry: INavbarEntry) {
    const isSelected = entry.id === this.props.selectedId
    return (
      <li
        key={entry.id}
        className={css`
          ${isSelected
            ? 'background-color: #004C76; color: white;'
            : 'color: #004C76;'}
          cursor: pointer;
          font-size: 1.5rem;
          padding-top: 0.8rem;
          padding-bottom: 0.8rem;
          margin: 0;
          text-align: center;
          border-top: 1px solid #c4c4c4;
        `}
        onClick={this.handleClick.bind(entry.id)}
      >
        {entry.title}
      </li>
    )
  }
  render() {
    return (
      <>
        <div
          className={css`
            color: #004c76;
            font-family: 'Open Sans Condensed', sans-serif;
            font-size: 1.2rem;
            padding-top: 1rem;
            padding-left: 2rem;
            padding-bottom: 1rem;
            background-color: white;
          `}
        >
          <div>{this.props.title}</div>
        </div>
        <div
          className={css`
            position: absolute;
            right: 0;
            top: 0;
          `}
        >
          <div
            className={css`
              margin-right: 0;
              position: relative;
            `}
          >
            <ul
              className={css`
                position: absolute;
                right: 0;
                background-color: #f2f2f2;
                width: 10rem;
                ${this.state.expanded
                  ? 'max-height: 100vh;'
                  : 'max-height: 0px;'}
                transition: max-height 0.2s linear;
                overflow: hidden;
              `}
            >
              <li
                key={-1}
                className={css`
                  height: 2.95rem;
                `}
              />
              {this.props.entries.map(e => this.renderItem(e))}
            </ul>
            <div
              className={css`
                float: right;
                margin-top: 1.2rem;
                margin-right: 1rem;
              `}
            >
              <HamburgerMenu
                isOpen={this.state.expanded}
                menuClicked={this.toggleExpanded}
                width={28}
                height={20}
                color="#004C76"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export function DUMMY_DO_NOT_USE_THIS_OR_YOU_WILL_BE_FIRED_Navbar() {
  const props: INavbarProps = {
    title: 'BLAH OVERCROWDING',
    entries: [
      {
        id: '1',
        title: 'Part 1',
      },
      {
        id: '2',
        title: 'Part 2',
      },
      {
        id: '3',
        title: 'Part 3',
      },
      {
        id: '4',
        title: 'Part 4',
      },
      {
        id: '5',
        title: 'Part 5',
      },
    ],
    selectedId: '1',
  }

  return <Navbar {...props} />
}
