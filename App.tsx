import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';

import { CartContextProvider } from './src/contexts/CartContext';

import { NotificationClickEvent, OneSignal } from 'react-native-onesignal'
import { tagUserInfoCreate } from './src/notifications/notificationsTags';
import { useEffect } from 'react';

OneSignal.initialize("99c87f1c-4c7b-4384-bdef-1f5b97e75e50")
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  tagUserInfoCreate()

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent): void => {
      const { actionId } = event.result

      console.log('event.result', event.result)

      switch(actionId) {
        case "1": 
          console.log("Ver todas")
          break
        case "2":
          console.log("Ver pedido")
          break
        default:
          console.log("Nenhu botão de ação selecionado")
          break
      }
    }

    OneSignal.Notifications.addEventListener('click', handleNotificationClick)

    return () => OneSignal.Notifications.removeEventListener('click', handleNotificationClick)
  }, [])

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}