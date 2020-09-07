import React, { useState, useEffect } from 'react'

const useMousePosition = () =>{
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
    document.addEventListener('mousemove', updateMouse)
    return ()=>{
    console.log('移除事件绑定')
      document.removeEventListener('mousemove',updateMouse)
    }
  },[])
  return postions
}

export default useMousePosition