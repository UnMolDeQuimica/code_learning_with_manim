import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative, slugifyFilePath } from "../util/path"


function ToLink(file: Array<string>){
  const baseObject = file[0][0].split("|");

  return [baseObject[0], baseObject[1]]
}

function InChapter({ fileData }: QuartzComponentProps) {
  const inChapter = fileData.frontmatter?.children
  if (inChapter != undefined) {
    var childrenList = []
    for (const children of inChapter) {
      const childrenParsed = children.match(/\[\[(.*?)\|(.*?)\]\]/);
      childrenList.push(childrenParsed)
    }
    return (
      <div>
        <h3>En este capítulo</h3>
        <ul>
          {childrenList.length > 0 ? (
            childrenList.map((f: any) => (
              <li>
                <a href={resolveRelative(fileData.slug!, slugifyFilePath(f[1]))}>
                  {f[2]}
                </a>
              </li>
            ))
          ) : (
            <li>Capítulo vacío</li>
          )
        }
        </ul>
      </div>
    )
  } else {
    return null
  }
}
export default (() => {
 return InChapter

}) satisfies QuartzComponentConstructor
