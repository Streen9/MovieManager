
import MovieList from '../components/MovieList'
import MetaDataEditor from '../components/MetaDataEditor'
import ActorSelector from '../components/ActorSelector'
import CategoriesSelector from '../components/CategoriesSelector'

const MainPage = () => {
  return (
    <>
    <div className='lg:flex'>
        <div className='m-2 lg:w-3/5'>
            <MovieList/>
        </div>
        <div className='m-2 lg:w-2/5'>
            <MetaDataEditor/>
        </div>
    </div>
    <div className='lg:flex'>
        <div className='m-2 lg:w-1/2'><ActorSelector/></div>
        <div className='m-2 lg:w-1/2'><CategoriesSelector/></div>
    </div>
    </>
  )
}

export default MainPage