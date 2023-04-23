import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}| shopnow`
    },[title]);
  return null
}

export default useTitle
