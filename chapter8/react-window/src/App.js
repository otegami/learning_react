import faker from 'faker'
import List from './components/List'

const biglist = [...Array(5000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}))

const App = () => {
  const renderItem = item => (
    <div style={{ display: 'flex' }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.eamil}
      </p>
    </div>
  )

  return <List data={biglist} renderItem={renderItem} />
}

export default App
