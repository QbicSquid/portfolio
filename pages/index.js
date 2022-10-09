import About from '../components/About'
import ConsoleFrame from '../components/ConsoleFrame'
import Page from '../components/Page'

function HomePage() {
  return (
    <Page>
      <ConsoleFrame>
        <About/>
      </ConsoleFrame>
    </Page>
  )
}

export default HomePage
