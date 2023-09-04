import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, slugifyFilePath } from "../util/path"


function PreviousFile({ fileData }: QuartzComponentProps) {
  const previousFile = fileData.frontmatter?.previous

  if (previousFile != undefined) {
    const previousFileParsed = previousFile.match(/\[\[(.*?)\|(.*?)\]\]/)
    const targetPath = resolveRelative(fileData.slug!, slugifyFilePath(previousFileParsed[1]))
    const targetName = previousFileParsed[2]

    return (
      <a href={targetPath}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid #5d9bc5", borderSpacing: "5px", padding: "1px", borderRadius: "10px"}}>
          <img src="https://img.icons8.com/?size=512&id=GE50k2_uSobU&format=png" alt={"Anterior Nota"} href={targetPath} style={{maxHeight: "50px", rotate: "-180deg"}}/>
          <div style={{marginRight: "5px"}}>
            Nota anterior
          </div>
        </div>
      </a>
    )
  } else {
    return null
  }
}
export default (() => {
 return PreviousFile

}) satisfies QuartzComponentConstructor
