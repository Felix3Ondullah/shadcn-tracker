import { ArrowUp, Paperclip, Sparkles, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { BrandMark } from './brand-mark'

export function ChatComposer() {
  return (
    <>
      <h1><span className="heading-mark"><BrandMark /></span>Where should we start?</h1>
      <div className="composer">
        <Textarea aria-label="Ask Bafa a question" placeholder="Ask Bafa a question..." />
        <div className="composer-actions">
          <div className="composer-tools">
            <Button type="button" variant="ghost" className="tool-button" aria-label="Upload">
              <Upload size={17} />
            </Button>
            <Button type="button" variant="ghost" className="documents-button">
              <Paperclip size={17} /> Documents
            </Button>
            <Button type="button" variant="secondary" className="help-chip">
              <Sparkles size={16} /> What can Bafa do?
            </Button>
          </div>
          <Button type="button" className="send-button" aria-label="Send question">
            <ArrowUp size={21} />
          </Button>
        </div>
      </div>
      <p className="disclaimer">Review cited sources before relying on an answer. Enter to send · Shift+Enter for a new line.</p>
      <p className="suggestion-copy">
        Choose documents and Bafa will suggest what to ask of them: answers with sources, summaries, tables of extracted details
        <br className="desktop-break" /> and chronologies.
      </p>
    </>
  )
}
