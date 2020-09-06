import React, { useState, useEffect } from 'react'
const MousesTracker: React.FC = () => {
  const [postions, setPostions] = useState({
    x: 0,
    y: 0
  })
  useEffect(() => {
    console.log('添加事件绑定')
    const updateMouse = (e: MouseEvent) => {
      console.log('调用')
      setPostions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return ()=>{
    console.log('移除事件绑定')
      document.removeEventListener('click',updateMouse)
    }
  },[])
  return (
    <p>
      X:{postions.x},Y:{postions.y}
    </p>
  )
}
export default MousesTracker
