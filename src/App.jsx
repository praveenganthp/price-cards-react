import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from './Card';

function App() {
  const cards = [
    {
      type: "free",
      price: 0,
      features: [
        { text: "single user", enabled: true },
        { text: "50GB Storage", enabled: true },
        { text: "unlimited public project", enabled: true },
        { text: "community access", enabled: true },
        { text: "unlimited private project", enabled: false },
        { text: "dedicated phone support", enabled: false },
        { text: "free subdomain", enabled: false },
        { text: "monthly status report", enabled: false },
      ],
    },
    {
      type: "plus",
      price: 9,
      features: [
        { text: "5 users", enabled: true },
        { text: "50GB Storage", enabled: true },
        { text: "unlimited public project", enabled: true },
        { text: "community access", enabled: true },
        { text: "unlimited private project", enabled: true },
        { text: "dedicated phone support", enabled: true },
        { text: "free subdomain", enabled: true },
        { text: "monthly status report", enabled: false },
      ],
    },
    {
      type: "pro",
      price: 49,
      features: [
        { text: "unlimited users", enabled: true },
        { text: "50GB Storage", enabled: true },
        { text: "unlimited public project", enabled: true },
        { text: "community access", enabled: true },
        { text: "unlimited private project", enabled: true },
        { text: "dedicated phone support", enabled: true },
        { text: "free subdomain", enabled: true },
        { text: "monthly status report", enabled: true },
      ],
    },
  ];
  return (
    <div className="App">
      <Card cards={cards}/>
    </div>
  );
}

export default App;
