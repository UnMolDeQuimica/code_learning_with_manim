import { QuartzComponentConstructor } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, Array<string>>
}

export default ((opts?: Options) => {
  function Footer() {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer>
        <hr />
        <p>
          Hecho con <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>, © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, [link, image]]) => (
            <li>
              <div>
                
                <a href={link}>
                  <img style={{ height: 50, float: "left" }} src={String(image)} />
                  <p style={{textAlign: "center"}}>{text}</p>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
