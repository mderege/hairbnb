// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ['@react-oauth/google'],
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path' // Make sure to import 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { // !!!
      react: path.resolve(__dirname, 'node_modules/react'), // needed the resolve alias! there were 2 versions of react at once
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom') // the two versions prevent hooks like useState from working
      // this tells the Vite to only get React from this one spot
    },
  },
  optimizeDeps: {
    include: ['@react-oauth/google'],
  },
})
