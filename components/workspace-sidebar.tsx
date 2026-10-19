import {
  FileText,
  Home,
  Landmark,
  PenLine,
  Search,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AccountProfile } from './account-profile'
import { BrandMark } from './brand-mark'

const recentChats = [
  'What are my rights if I am arrested in Kenya?',
  'How is land ownership transferred in Kenya?',
  'What is the process for filing a succession case?',
  'Can a landlord evict a tenant without notice?',
  'Summarize the remedies for unfair dismissal',
  'What is the penalty for obtaining by false pretences?',
  'How do I file a small claims case in Kenya?',
  'Can the police search my house without a warrant?',
  'What does the Constitution say about bail?',
  'How can I challenge a chief’s decision on land?',
]

const navigation = [
  { label: 'Home', icon: Home },
  { label: 'Featured', icon: Star },
  { label: 'Documents', icon: FileText },
  { label: 'Library', icon: Landmark },
  { label: 'Drafts', icon: PenLine },
]

export function WorkspaceSidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="brand-row" aria-label="Bafa workspace">
          <span className="brand-mark"><BrandMark /></span>
          <span className="brand-name">Bafa</span>
        </div>
        <div className="organization">Kamau associates</div>
        <Button variant="outline" className="new-chat" type="button">
          <PenLine size={15} /><span>New chat</span>
        </Button>
        <nav className="primary-links" aria-label="Main navigation">
          <Button variant="ghost" className="side-link search-link" type="button">
            <Search size={17} /><span>Search chats</span>
          </Button>
          {navigation.map(({ label, icon: Icon }) => (
            <Button variant="ghost" key={label} className="side-link" type="button">
              <Icon size={17} strokeWidth={1.9} /><span>{label}</span>
            </Button>
          ))}
        </nav>
        <RecentChats />
      </div>
      <AccountProfile />
    </aside>
  )
}

function RecentChats() {
  return (
    <section className="recent-list" aria-labelledby="recent-heading">
      <h2 className="recent-title" id="recent-heading">Recents</h2>
      {recentChats.map((chat, index) => (
        <Button variant="ghost" key={`${chat}-${index}`} className="recent-item" type="button">
          {chat}
        </Button>
      ))}
    </section>
  )
}
