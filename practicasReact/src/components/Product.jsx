
const products = [
    {title: 'Apple', id: 1},
    {title: 'Pinapple', id: 2},
    {title: 'Strawberry', id: 3},
]

export const Product = ({count}) => {

    const listItems = products.map(p => 
        <li key={p.id}>
            {`${p.title} - ${count}`}
        </li>
    )

  return (
    <ul>
        {listItems}
    </ul>
  )
}
    