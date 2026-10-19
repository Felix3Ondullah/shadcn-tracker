import { PanelLeft, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WorkspaceTopbar() {
  return (
    <header className="topbar">
      <Button variant="ghost" className="top-icon" aria-label="Sidebar">
        <PanelLeft size={17} />
      </Button>
      <Button className="upgrade-button" type="button">
        <Sparkles size={16} /> Upgrade
      </Button>
    </header>
  )
}
