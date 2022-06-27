import { Link } from 'react-router-dom'

const categories = ['animaux', 'sport']
export default function App () {
  return (
    <div className='App'>
      {categories.map((category, idx) => (
        <div key={idx}>
          {/* key={invoice.number} */}
          <Link to={`/categories/${category}`}>
            <button type='button' className='btncats'>
              {category}
            </button>
          </Link>{' '}
          |{' '}
        </div>
      ))}
      <Link to="/outlet">
        <button type='button' className='btncats'>
          outlet
        </button>
      </Link>{' '}
    </div>
  )
}
