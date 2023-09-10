import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { resolveRelative, slugifyFilePath } from "../util/path"


function ParentLink({ fileData }: QuartzComponentProps) {
  const parentFile = fileData.frontmatter?.parent

  if (parentFile != undefined) {
    const parentFileParsed = parentFile.match(/\[\[(.*?)\|(.*?)\]\]/)
    const targetPath = resolveRelative(fileData.slug!, slugifyFilePath(parentFileParsed[1]))
    const targetName = parentFileParsed[2]

    return (
      <a href={targetPath} style={{minWidth: "5%", whiteSpace: "nowrap"}}>{targetName}</a>
    )
  } else {
    return null
  }
}
export default (() => {
 return ParentLink

}) satisfies QuartzComponentConstructor
