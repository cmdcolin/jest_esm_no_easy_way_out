import QuickLRU from 'quick-lru'

export default function makeLRU() {
  const lru = new QuickLRU({ maxSize: 100 })
  return lru
}
