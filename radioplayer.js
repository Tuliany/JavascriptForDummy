// Steg 1. gör en fect från url
let theData;

const time = Date.now();

fetch('http://api.sr.se/api/v2/channels/?format=json')
  .then((response) => response.json())
  .then(data => {
    theData = data;
    showRadioPlayers(data);

    console.log(Date.now() - time);
  })


function showRadioPlayers(data) {
  let channelsElement = document.querySelector('#channels');

  data.channels.forEach((channel) => {
    const divElement = document.createElement('div');
    divElement.innerHTML = 
    `
    ${channel.name}
    <audio controls class="audioplayer">
    <source src="${channel.liveaudio.url}" type="audio/mpeg" /> 
    </audio>`
    channelsElement.appendChild(divElement);

  })
}
console.log(Date.now() - time);






// Steg 2. loopa med forEach över data.channels och ta ut visa data på html

const generateAudioTags = (channels) => {
  channels = fetch('http://api.sr.se/api/v2/channels/?format=json')
  const channels2 = channels.then((res) => {
    console.log(res)
    return res.json();
  })
  channels2.then((data) => {
    generateAudioTags(data.channels)
  })
}

// Ta ut liveaudio från varje kanal 