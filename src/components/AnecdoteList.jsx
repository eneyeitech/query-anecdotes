import { useQuery } from '@tanstack/react-query'
import { getAnecdotes } from '../requests'

const AnecdoteList = () => {
  const { data: anecdotes, isLoading, isError } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    retry: false  // or retry: 1
  })

  if (isLoading) {
    return <div>loading data...</div>
  }

  if (isError) {
    return <div>anecdote service not available due to problems in server</div>
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>has {anecdote.votes}</div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList
