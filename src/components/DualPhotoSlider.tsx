import React from 'react'
import { css, cx } from 'emotion'
import { Resizable, ResizableBox } from 'react-resizable';
import { SizeMe } from 'react-sizeme';
import Draggable from 'react-draggable';

import './styles.css'

interface CarouselProps {
  imageLeft: string,
  imageRight: string,
}

class DualPhotoSlider extends React.Component<CarouselProps> {

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {    
    return (
      <SizeMe
        monitorHeight
        refreshRate={32}
        render={({ size }) => 
        <div className={css`
          background-image: url(${this.props.imageRight});
          width: 100%;
          height: 100%;
          overflow: hidden;
        `}>
          <ResizableBox width={size.width / 2} height={720} axis='x'
            minConstraints={[0,0]}
            maxConstraints={[size.width,size.height]}
          >
            <img src={this.props.imageLeft} className={css`
              height: 100%;
              width: 100%;
              object-fit: cover;
              object-position: 0 0;
              padding-right: 5px;
              background-color: black;
            `}/>
          </ResizableBox> 
          
        </div>
        }
      />
      
    )
  }
}

export default DualPhotoSlider;
// export default withSize()(DualPhotoSlider);