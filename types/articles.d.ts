export interface articlesResponseType {
  status: string
  totalResults: number 
  articles: Array<articleType>
}
interface articleType {
  source: Object | null
  author: string | null
  title: string | null
  description: string | null
  url: string | null
  urlToImage: string | null
  publishedAt: string | null
  content: string | null
}