import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import zFold from '../assets/Samsung Galaxy Z Fold 2.png'
import note20 from '../assets/Samsung Galaxy Note 20:Ultra.png'
import s20FE from '../assets/Samsung Galaxy S20 FE.png'
import welcomeGalaxy from '../assets/Welcome To Your Galaxy.png'
import '../styling/Home.css'

export class BootstrapCarousel extends Component {
        render() {

                return (
                  <Carousel interval={5000}>
                    <Carousel.Item>
                     <a href="https://www.samsung.com/uk/smartphones/galaxy-z-fold2/buy/">
                      <img
                        id="Welcome-Galaxy"
                        alt='Welcome to Your Galaxy'
                        src={welcomeGalaxy}
                      />
                     </a>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="https://www.samsung.com/uk/smartphones/galaxy-z-fold2/buy/">
                      <img
                        id="Z-Fold-2"
                        alt='Samsung Galaxy Z Fold 2 5G'
                        src={zFold}
                      />
                    </a>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="https://www.samsung.com/uk/smartphones/galaxy-note20/buy/">
                      <img
                        id="Note-20"
                        alt='Samsung Galaxy Note 20 | Note 20 Ultra 5G'
                        src={note20}
                      />
                    </a>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="https://www.samsung.com/uk/smartphones/galaxy-s20/buy/">
                      <img
                        id="S20-FE"
                        alt='Samsung Galaxy S20 FE 5G'
                        src={s20FE} />
                    </a>
                    </Carousel.Item>
                  </Carousel>
                )
        }
}


export default BootstrapCarousel
