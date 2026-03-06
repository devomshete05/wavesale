import './category.css'

type Cat = { id: string; name: string }

export function CategoryList({
  categories,
  selectedId,
  onSelect,
}: {
  categories: Cat[]
  selectedId: string | null
  onSelect: (id: string) => void
}) {
  return (
    <nav className="categories">
      {categories.map((c) => (
        <button
          key={c.id}
          className={"cat-btn" + (selectedId === c.id ? ' active' : '')}
          onClick={() => onSelect(c.id)}
        >
          {c.name}
        </button>
      ))}
    </nav>
  )
}
