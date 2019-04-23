import React from 'react'
import { css, cx } from 'emotion'
import { Resizable, ResizableBox } from 'react-resizable';
import { SizeMe } from 'react-sizeme';
import sizeMe from 'react-sizeme';

import './styles.css'
import { number } from 'prop-types';

interface DualPhotoSliderProps {
  imageLeft: string,
  imageRight: string,
  titleLeft: string,
  titleRight: string,
  height: number,
}

interface DualPhotoSliderState {
  location: number,
  componentWidth: number,
  totalWidth: number,
  totalHeight: number,
}

var totalWidth;
var colorInactive = 'red';
var colorActive = '#004C76';

class DualPhotoSlider extends React.Component<DualPhotoSliderProps, DualPhotoSliderState> {

  constructor(props) {
    super(props);
    const { width, height } = props.size;
    this.state = {
      location: 0,
      componentWidth: width / 2,
      totalHeight: height,
      totalWidth: width,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  eventLogger = (e: MouseEvent, data: Object) => {
    this.setState({componentWidth: data.size.width});
    let percentage = data.size.width / totalWidth;
    this.setState({location: percentage > 0.5 ? -1 : 1})
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ totalWidth: window.innerWidth, totalHeight: window.innerHeight });
  }

  render() {
    return (
      <SizeMe
        monitorHeight
        refreshRate={16}
        render={({ size }) => 
        <div className={css`
          background-image: url(${this.props.imageRight});
          background-size: auto 100%;
          width: 100%;
          height: 100%;
          overflow: hidden;
          object-fit: cover;
          object-position: 0 0;
        `}>
          <div className={css`
            width: calc(100% - ${this.state.componentWidth}px);
            direction: rtl;
            position: absolute;
            right: 0px;
            white-space: nowrap;
            font-family: Open Sans;
            font-style: italic;
            font-weight: 800;
            font-size: 80px;
            text-align: center;
            line-height: 76px;
            color: ${this.state.location == 1 ? colorActive : colorInactive};
          `}>
            <div>
              {this.props.titleRight.toUpperCase()}
            </div>         
          </div>
          <ResizableBox width={size.width / 2} height={this.props.height} axis='x'
            minConstraints={[0,0]}
            maxConstraints={[size.width,size.height]}
            onResize={(e, data) => {this.eventLogger(e, data); totalWidth = size.width;}}
          >
            <div className={css`
              background-image: url(${this.props.imageLeft});
              background-size: auto 100%;
              height: 100%;
              width: 100%;
              object-fit: cover;
              object-position: 0 0;
              border-right: 5px solid black;
              overflow: hidden;
            `}>
              <div className={css`
                left: 0;
                white-space: nowrap;
                font-family: Open Sans;
                font-style: italic;
                font-weight: 800;
                font-size: 80px;
                text-align: center;
                line-height: 76px;
                color: ${this.state.location == -1 ? colorActive : colorInactive};
                overflow: hidden;
              `}>
                <div>
                  {this.props.titleLeft.toUpperCase()}
                </div>
              </div>
            </div>
          </ResizableBox> 
        </div>
        }
      />
      
    )
  }
}

// export default DualPhotoSlider;
export default sizeMe({ monitorHeight: true })(DualPhotoSlider)