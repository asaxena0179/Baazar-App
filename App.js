import { StatusBar } from 'expo-status-bar';
import {Stack} from './Navigators/Stacknavigator'
import {LogProvider} from './Context/LogContext'
import { CartProvider } from './Context/CartContext';

export default function App() {
  return (
    <LogProvider>
      <CartProvider>
        <Stack/>
      </CartProvider>
    </LogProvider>
  );
}
