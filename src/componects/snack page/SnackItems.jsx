import CategorySidebar from './RightSideCrads/CategorySidebar'
import PriceFilterSidebar from './RightSideCrads/PriceFilterSidebar '
import NewProductsSidebar from './RightSideCrads/NewProductsSidebar '
import PromoCard from './RightSideCrads/PromoCard '
import CardFive from '../Card5'
import FilterBar from './leftSideItems/FilterBar'
import Snackpage from './leftSideItems/Snackpage'

function Snackitems() {
  return (
      <>  <Snackpage/>
          <div className='d-flex w-100'>
              <div className='listcarditems'>
                  <FilterBar/>
                  <ul className="cardfivesfs">
                    <CardFive />
                  </ul>
              </div>
              <div className="sideSnack d-flex flex-column gap-4 ">
                  <CategorySidebar />
                  <PriceFilterSidebar />
                  <NewProductsSidebar />
                  <PromoCard />
              </div>
          </div>
      </>
  )
}

export default Snackitems
