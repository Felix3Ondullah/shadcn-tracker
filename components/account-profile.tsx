import { Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AccountProfile() {
  return (
    <footer className="account-row">
      <span className="account-avatar" role="img" aria-label="Felix Ondullah">F</span>
      <span className="account-copy">
        <strong>Felix Ondullah</strong>
        <small>humluchetu@gmail.com</small>
      </span>
      <Button variant="ghost" className="settings-button" aria-label="Settings" title="Settings">
        <Settings size={18} />
      </Button>
    </footer>
  )
}
