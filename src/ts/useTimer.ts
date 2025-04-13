// useTimer.js
import { ref, onMounted, onUnmounted } from 'vue'

export default function useTimer() {
  const time = ref(0)
  let timer: number 

  const start = () => {
    timer = setInterval(() => {
      time.value++
    }, 1000)
  }

  const stop = () => {
    clearInterval(timer)
  }

  return {
    time,
    start,
    stop,
  }
}