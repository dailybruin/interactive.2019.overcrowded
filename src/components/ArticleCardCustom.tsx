import * as React from 'react'
import { css } from 'react-emotion'


interface TallProps {
  imageurl: string
  hoverimage: string
  title: string
  content: string
}

interface MyState {
  notHovered: boolean;
}

class ArticleCardCustom extends React.Component<TallProps, MyState> {
  constructor(props) {
    super(props);

    this.state = {
      notHovered: true,
    };
  }

  handleEnter() {
    this.setState({
      notHovered: false
    });
  }

  handleLeave() {
    this.setState({
      notHovered: true
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleEnter.bind(this)}
        onMouseLeave={this.handleLeave.bind(this)}
        className={css`
          position: relative;
          height: 539px;
          width: 505px;
          border: 8px solid #0088D4;
          box-sizing: border-box;
          display: inline-block;
          box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
          border-radius: 25px;
          margin: 22px;
          &:hover {
            background: url("${this.props.hoverimage}") no-repeat center;
            background-size: cover;
            margin: 22px
          }
          @media (max-width: 550px) {
            display: none;
          }
          overflow: hidden;

        `}
      >
      {this.state.notHovered ? (
        <div
          className={css`
            font-family: Open Sans;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: normal;
            color: #0088D4;
            padding: 20px 75px 0 75px;
          `}
        >
          {this.props.title}
        </div> ) : (
          <div className={css`display: none`}/>
        )}
        {this.state.notHovered ? (
        <img className={css`
          width: auto;
          height: auto;
          padding: 16px 16px 8px 16px;
          margin-bottom: 0px;`}
          src={this.props.imageurl}
        />) : (
          <div className={css`display: none`}/>
        )}
        {this.state.notHovered ? (
        <div
          className={css`
            /* font-family: bodyFont, serif; */
            font-family: Karla;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: normal;
            text-align: center;
            padding: 0px 16px 40px 16px;
          `}
        >
          {this.props.content}
        </div>) : (
          <div className={css`display: none`}>yup</div>
        )}
      </div>
    )
  }
}

export default ArticleCardCustom
