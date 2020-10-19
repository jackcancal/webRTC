import React, { PureComponent } from 'react'
import Button from "../../components/Button";
import styles from './index.scss'
import { downLoad } from "../../utils/utils";
class Home extends PureComponent {
  state = {

  }
  componentDidMount() {
    this.init()
  }

  init = () => {
    const { player } = this
    const { navigator } = window
    navigator.mediaDevices.getUserMedia({
      video: {
        width: 640,
        height: 480,
        frameRate: 15,
        facingMode: 'enviroment'
      },
      audio: false
    }).then(stream => {
      player.srcObject = stream
    })
  }
  savePicture=() => {
    const { picture, player } = this
    picture.width = document.documentElement.offsetWidth
    picture.height = document.documentElement.offsetHeight
    picture.getContext('2d').drawImage(player, 0, 0, player.offsetWidth, player.offsetHeight)
    downLoad(picture.toDataURL("image/jpeg"))
  }
  render() {
    return (
      <div>
        <video
          className={styles.video}
          ref={r => this.player = r}
          autoPlay={1}
          playsInline={1}
        />
        <canvas ref={r => this.picture = r} />
        <Button className={styles.button} onClick={this.savePicture}>保存图片</Button>
      </div>
    )
  }
}
export default Home
