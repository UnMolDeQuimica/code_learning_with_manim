import { precisionRound } from "d3"
import { formatDate, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"

export default (() => {
  function ContentMetadata({ cfg, fileData }: QuartzComponentProps) {
    const text = fileData.text
    if (text) {
      const segments: string[] = []
      var { minutes: minutes, words: _words } = readingTime(text)

      if (fileData.dates) {
        segments.push(formatDate(getDate(cfg, fileData)!))
      }
      const timeTaken = Math.floor(minutes)

      segments.push("Tiempo estimado de lectura: " + timeTaken + " minutos")
      segments.push("Palabras totales: " + _words)
      return <p class="content-meta">{segments.join(" - ")}</p>
    } else {
      return null
    }
  }

  ContentMetadata.css = `
  .content-meta {
    margin-top: 0;
    color: var(--gray);
  }
  `
  return ContentMetadata
}) satisfies QuartzComponentConstructor
