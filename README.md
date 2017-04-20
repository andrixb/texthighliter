# texthighliter
data structure for sharing info content across components.

it uses autoEdit v2 STT results as data inputs.


## Input
example:
```html
<span
     contenteditable="false"
     class="words text-muted"
     data-transcription-id="24dcd88b"
     data-paragaph-id="0"
     data-word-id="0"
     data-line-id=""
     data-reel-name="NA"
     data-clip-name="Ian Perkin-Mobile.mp4"
     data-video-id="videoId_24dcd88b"
     data-speaker="Unnamed Speaker"
     data-src="/Users/pietropassarelli/Library/Application Support/autoEdit2/media/Ian_Perkin-Mobile.mp4.1486169904445.webm"
     data-audio-file="/Users/pietropassarelli/Library/Application Support/autoEdit2/media/Ian_Perkin-Mobile.mp4.1486169904445.ogg"
     data-start-time="0.06"
     data-text="oh"
     data-end-time="1.65">oh </span>
```

## Logic

- For each source text element present on the page it creates an object with the relevant attributes
- For each selection event it creates an object which gets data from the object linked with the text element selected
  - It creates a new div
  - Add the relevant HTML attributes
  - Add the text (as inner HTML)


`datalayer.component.js` stays in the middle and is the controller and listens to the events
`destination.component.js` is a model
