/// <reference types="vite/client" />

// Declarações para módulos CSS
declare module '*.css' {
  const content: string
  export default content
}

declare module 'primeicons/primeicons.css' {
  const content: string
  export default content
}

// Declaração para componentes Vue
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
