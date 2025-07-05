const AudioPlayer = require("./player/audio-player")
const VideoPlayer = require("./player/video-player")

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
