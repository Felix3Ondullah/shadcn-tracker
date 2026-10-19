import { CircleHelp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ChatComposer } from './chat-composer'
import { WorkspaceSidebar } from './workspace-sidebar'
import { WorkspaceTopbar } from './workspace-topbar'

export function Workspace() {
  return (
    <div className="workspace-shell">
      <WorkspaceSidebar />
      <main className="main-panel">
        <WorkspaceTopbar />
        <section className="home-content">
          <div className="center-panel"><ChatComposer /></div>
          <Button variant="ghost" className="help-button" aria-label="Help"><CircleHelp size={17} /></Button>
        </section>
      </main>
    </div>
  )
}
