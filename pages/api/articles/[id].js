import { articles } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = articles.find((article) => article.id === id)

  if (filtered) {
    res.status(200).json(filtered)
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` })
  }
}
