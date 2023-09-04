import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, slugifyFilePath } from "../util/path"


function NextFile({ fileData }: QuartzComponentProps) {
  const nextFile = fileData.frontmatter?.next

  if (nextFile != undefined) {
    const nextFileParsed = nextFile.match(/\[\[(.*?)\|(.*?)\]\]/)
    const targetPath = resolveRelative(fileData.slug!, slugifyFilePath(nextFileParsed[1]))
    const targetName = nextFileParsed[2]
    return (
      <a href={targetPath}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", border: "solid #5d9bc5", borderSpacing: "5px", padding: "1px", borderRadius: "10px"}}>
          <div style={{marginLeft: "5px"}}>
            Nota siguiente
          </div>
          <img src="https://img.icons8.com/?size=512&id=GE50k2_uSobU&format=png" alt={"Siguiente Nota"} href={targetPath} style={{maxHeight: "50px" }}/>
        </div>
      </a>
    )
  } else {
    return null
  }
}
export default (() => {
 return NextFile

}) satisfies QuartzComponentConstructor
