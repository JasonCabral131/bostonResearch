import { ReactNode } from 'react'

export type RootStackParamList = {
  Dashboard: any
  Login: any
  Splash: any
  OverView: any
  Modal: {
    content: ReactNode
    bgColor?: string
  }
  WebView: {
    uri?: string
    title: string
  }
}
