import '../../styles/textEditor.css'
import { EditorProvider} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import MenuBar from './MenuBar'
import ArticleSubmit from './articleSubmit'
// define your extension array
const extensions = [
  StarterKit,
  Image.configure({HTMLAttributes:{class:'editor-images'}})
]
const content = '<p></p>'


const Tiptap = () => {
  return (
<EditorProvider extensions={extensions} content={content} slotBefore={<MenuBar></MenuBar>} slotAfter={<ArticleSubmit></ArticleSubmit>}><></></EditorProvider>
  )
}

export default Tiptap