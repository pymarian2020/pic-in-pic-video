"stric mode";

const streamElement = document.getElementById("stream");

// Buttons for video streaming
const streamStart = document.getElementById("btn-stream-start");
const streamButtonPic = document.getElementById("btn-stream-pic");

// Promt a user to select a media stream, pass a video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    streamElement.srcObject = mediaStream;
    streamElement.onloadedmetadata = () => {
      streamElement.play();
    };
  } catch (error) {
    // Catch error here
    console.log("whoops, error here", error);
  }
}

// Add event listener for Stream
streamStart.addEventListener("click", selectMediaStream);
streamButtonPic.addEventListener("click", async () => {
  // Disable Button
  streamButtonPic.disable = true;
  // Start Picture in Picture
  await streamElement.requestPictureInPicture();
  // Reset Button
  streamButtonPic.disable = false;
});
