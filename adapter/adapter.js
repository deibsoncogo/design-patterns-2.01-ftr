const AudioPlayer = require("./audio-player")
const VideoPlayer = require("./video-player")

class Adapter extends AudioPlayer {
  constructor() {
    super()
    this.VideoPlayer = new VideoPlayer()
  }

  playAudio(fileName) {
    console.log("Adaptador em ação, usando o 'VideoPlayer'")
    this.VideoPlayer.playMedia(fileName)
  }
}

module.exports = Adapter
