import ConsoleFrame from '../components/ConsoleFrame'
import TextTyper from '../components/console/TextTyper'
import Page from '../components/Page'

function HomePage() {
  return (
    <Page>
      <ConsoleFrame>
        <TextTyper text="Hello World!" />
      </ConsoleFrame>
    </Page>
  )
}

export default HomePage
